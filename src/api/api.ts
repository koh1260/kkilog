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

class Api {
  apiToken: string | null | undefined = null;

  client: AxiosInstance | null = null;

  apiUrl: string = process.env.API_URL!;

  init = () => {
    this.apiToken = localStorage.getItem('access_token')?.split(' ')[1];

    const headers:
      | RawAxiosRequestHeaders
      | AxiosHeaders
      | Partial<HeadersDefaults> = {
      Accept: 'application/json'
    };

    if (this.apiToken) {
      headers.Authorization = `Bearer ${this.apiToken}`;
    }

    this.client = axios.create({
      baseURL: this.apiUrl,
      timeout: 31000,
      headers
    });

    // this.client.interceptors.response.use(
    //   (response) => response,
    //   async (e: any) => {
    //     const originalRequest = e.config;

    //     if (e.response.status === 401) {
    //       try {
    //         const { accessToken } = (await this.refreshAccessToken()).data;
    //         localStorage.setItem('access_token', accessToken);
    //         originalRequest.headers.authorization = `Bearer ${accessToken}`;
    //         return await axios(originalRequest);
    //       } catch (er: any) {
    //         console.log(er.stack);
    //       }
    //     }
    //     return null;
    //   }
    // );

    return this.client;
  };

  writerPost(payload: WritePostData) {
    return this.init().post('/posts', payload);
  }

  getPostList() {
    return this.init().get('/posts');
  }

  getPostListByCategory(categoryId: number) {
    return this.init().get(`/posts/category/${categoryId}`);
  }

  getPost(postId: number) {
    return this.init().get(`/posts/${postId}`);
  }

  updatePost(postId: number, payload: UpdatePostData) {
    return this.init().patch(`/posts/${postId}`, payload);
  }

  deletePost(postId: number) {
    return this.init().delete(`/posts/${postId}`);
  }

  postLike(postId: number) {
    return this.init().get(`/posts/like/${postId}`);
  }

  getPreviousAndNextPost(postId: number) {
    return this.init().get(`/posts/${postId}`);
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

  loginValidate(email: string) {
    const params = { email };
    return this.init().get('/auth/login-validate', { params })
  }

  async refreshAccessToken() {
    return this.init().get('/auth/refresh');
  }
}

export default new Api();
