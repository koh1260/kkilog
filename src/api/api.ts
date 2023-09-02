import axios, {
  AxiosHeaders,
  AxiosInstance,
  HeadersDefaults,
  RawAxiosRequestHeaders
} from 'axios';
import {
  LoginData,
  UpdatePostData,
  WriteCommentData,
  WritePostData
} from '../type/request';
import {
  OtherPost,
  Post,
  PostLike,
  PostLikeCheck,
  PostPreview,
  RefreshAccessToken,
  UploadedImage,
  ValidateLogin
} from '../type';
import storage from '../lib/storage';

interface Result<T = any> {
  statusCode: number;
  message: string;
  result?: T;
}

class Api {
  isAccessTokenRefresh = false;

  apiToken: string | null | undefined = null;

  client: AxiosInstance | null = null;

  apiUrl: string = process.env.API_URL!;

  init() {
    this.apiToken = localStorage.getItem('access_token')?.split(' ')[1];

    const headers:
      | RawAxiosRequestHeaders
      | AxiosHeaders
      | Partial<HeadersDefaults> = {
      Accept: 'application/json',
      'Cache-Control': 'no-cache'
    };

    if (this.apiToken) {
      headers.Authorization = `Bearer ${this.apiToken}`;
    }

    this.client = axios.create({
      baseURL: this.apiUrl,
      timeout: 31000,
      headers
    });

    return this.client;
  }

  setAccessToken() {
    this.apiToken = localStorage.getItem('access_token');
  }

  async fetchDate(
    input: RequestInfo | URL,
    init?: RequestInit | undefined
  ): Promise<Response> {
    try {
      const fetchFn = () => {
        this.setAccessToken();
        const config: RequestInit = {
          ...init,
          headers: {
            'Content-Type': 'application/json',
            ...init?.headers,
            ...(this.apiToken ? { Authorization: this.apiToken } : {})
          }
        };
        return fetch(input, config);
      };
      let response = await fetchFn();

      if (!response.ok && !this.isAccessTokenRefresh) {
        this.isAccessTokenRefresh = true;
        const refreshResponse = await this.refreshAccessToken();
        const newToken = refreshResponse.result!.accessToken;
        storage.set('access_token', `Bearer ${newToken}`);
        this.isAccessTokenRefresh = false;

        response = await fetchFn();
        // eslint-disable-next-line @typescript-eslint/no-throw-literal
        if (!response.ok) throw response;
      }

      return response;
    } catch (e) {
      throw new Error('Client Error');
    }
  }

  async fetchJson<T>(
    input: RequestInfo | URL,
    init?: RequestInit | undefined
  ): Promise<Result<T>> {
    const response = this.fetchDate(input, init);
    const result: Promise<Result<T>> = (await response).json();
    return result;
  }

  writerPost(payload: WritePostData) {
    return this.init().post('/posts', payload);
  }

  getPostList() {
    return this.fetchJson<PostPreview[]>('/posts');
  }

  getPostListByCategoryId(categoryId: number) {
    return this.fetchJson<PostPreview[]>(`/posts/category/${categoryId}`);
  }

  getPostListByCategoryName(categoryName: string) {
    return this.fetchJson<PostPreview[]>(
      `/posts/category?categoryName=${categoryName}`
    );
  }

  getPost(postId: number) {
    return this.fetchJson<Post>(`/posts/${postId}`);
  }

  updatePost(postId: number, payload: UpdatePostData) {
    return this.fetchJson<void>(`/posts/${postId}`, {
      method: 'PATCH',
      body: JSON.stringify(payload)
    });
  }

  deletePost(postId: number) {
    return this.init().delete(`/posts/${postId}`);
  }

  postLike(postId: number) {
    return this.fetchJson<PostLike>(`/posts/like/${postId}`);
    // return this.init().get(`/posts/like/${postId}`);
  }

  postLikeCheck(postId: number) {
    return this.fetchJson<PostLikeCheck>(`/posts/like-check/${postId}`);
  }

  getPreviousAndNextPost(postId: number) {
    return this.fetchJson<OtherPost[]>(`/posts/other/${postId}`);
  }

  getCategoryList() {
    return this.init().get('/categorys');
  }

  writeComment(payload: WriteCommentData) {
    return this.init().post('/comments', payload);
  }

  getCommentList(postId: number) {
    const params = { post: postId };
    return this.init().get('/comments', { params });
  }

  getChildCommentList(commentId: number) {
    const params = { parent: commentId };
    return this.init().get('/comments', { params });
  }

  deleteComment(commentId: number) {
    return this.init().delete(`/comments/${commentId}`);
  }

  login(payload: LoginData) {
    return this.init().post('/users/login', payload);
  }

  logout() {
    return this.fetchJson<void>('/users/logout');
  }

  loginValidate() {
    return this.fetchJson<ValidateLogin>('/auth/login-validate');
  }

  uploadImage(form: FormData) {
    return this.fetchJson<UploadedImage>('/file/upload', {
      method: 'POST',
      body: form
    });
  }

  async refreshAccessToken() {
    return this.fetchJson<RefreshAccessToken>('/auth/refresh');
  }
}

export default new Api();
