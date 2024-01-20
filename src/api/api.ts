import {
  LoginData,
  SignupData,
  UpdatePostData,
  WriteCommentData,
  WritePostData
} from '../type/request';
import {
  Category,
  Comment,
  OtherPost,
  Post,
  PostLike,
  PostLikeCheck,
  PreviewPostData,
  RefreshAccessToken,
  UploadedImage,
  ValidateLogin
} from '../type';
import ClientExcepction from '../common/exceptions/client-exception';

interface ResponseGet<T> {
  statusCode: number;
  message: string;
  result: T;
}

export interface ResponsePost {
  statusCode: number;
  message: string;
}

class Api {
  isAccessTokenRefresh = false;

  apiUrl: string = process.env.REACT_APP_API_URL || '';

  async fetchData(
    input: RequestInfo | URL,
    init?: RequestInit | undefined
  ): Promise<Response> {
    try {
      const fetchFn = () => {
        const config: RequestInit = {
          ...init,
          headers: {
            ...init?.headers
          }
        };
        return fetch(`${this.apiUrl}${input}`, config);
      };
      let response = await fetchFn();

      if (response.status === 401 && !this.isAccessTokenRefresh) {
        this.isAccessTokenRefresh = true;
        await this.refreshAccessToken();
        this.isAccessTokenRefresh = false;

        response = await fetchFn();
        // eslint-disable-next-line @typescript-eslint/no-throw-literal
      }

      return response;
    } catch (e) {
      throw new ClientExcepction();
    }
  }

  async fetchJson<T>(
    input: RequestInfo | URL,
    init?: RequestInit | undefined
  ): Promise<T> {
    const response = this.fetchData(input, init);
    const data: Promise<T> = (await response).json();
    return data;
  }

  writerPost(payload: WritePostData) {
    return this.fetchData('/posts', {
      method: 'POST',
      body: JSON.stringify(payload),
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }

  async getPostList() {
    return (await this.fetchJson<ResponseGet<PreviewPostData[]>>('/posts'))
      .result;
  }

  async getPostListByCategoryId(categoryId: number) {
    return (
      await this.fetchJson<ResponseGet<PreviewPostData[]>>(
        `/posts/category/${categoryId}`
      )
    ).result;
  }

  async getPostListByCategoryName(categoryName: string) {
    return (
      await this.fetchJson<ResponseGet<PreviewPostData[]>>(
        `/posts/category?categoryName=${categoryName}`
      )
    ).result;
  }

  getPost(postId: number) {
    return this.fetchJson<ResponseGet<Post>>(`/posts/${postId}`);
  }

  updatePost(postId: number, payload: UpdatePostData) {
    return this.fetchData(`/posts/${postId}`, {
      method: 'PATCH',
      body: JSON.stringify(payload),
      headers: {
        'Content-Type': 'application/json'
      },
      credentials: 'include'
    });
  }

  deletePost(postId: number) {
    return this.fetchData(`/posts/${postId}`, {
      method: 'DELETE',
      credentials: 'include'
    });
  }

  postLike(postId: number) {
    return this.fetchJson<ResponseGet<PostLike>>(`/posts/like/${postId}`, {
      credentials: 'include'
    });
  }

  postLikeCheck(postId: number) {
    return this.fetchJson<ResponseGet<PostLikeCheck>>(
      `/posts/like-check/${postId}`,
      {
        credentials: 'include'
      }
    );
  }

  postLikeCount(postId: number) {
    return this.fetchJson<ResponseGet<PostLike>>(
      `/posts/like-count?post=${postId}`
    );
  }

  getPreviousAndNextPost(postId: number) {
    return this.fetchJson<ResponseGet<OtherPost[]>>(`/posts/other/${postId}`);
  }

  getCategoryList() {
    return this.fetchJson<ResponseGet<Category[]>>('/categorys');
  }

  writeComment(payload: WriteCommentData) {
    return this.fetchData('/comments', {
      method: 'POST',
      body: JSON.stringify(payload),
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }

  getCommentList(postId: number) {
    return this.fetchJson<ResponseGet<Comment[]>>(`/comments?post=${postId}`);
  }

  signup(payload: SignupData) {
    return this.fetchData('/users', {
      method: 'POST',
      body: JSON.stringify(payload),
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }

  login(payload: LoginData) {
    return this.fetchData('/users/login', {
      method: 'POST',
      credentials: 'include',
      body: JSON.stringify(payload),
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }

  logout() {
    return this.fetchJson<void>('/users/logout', {
      credentials: 'include'
    });
  }

  loginValidate() {
    return this.fetchJson<ResponseGet<ValidateLogin>>('/auth/login-validate', {
      credentials: 'include'
    });
  }

  uploadImage(form: FormData) {
    return this.fetchJson<UploadedImage>('/file/upload', {
      method: 'POST',
      body: form
    });
  }

  async refreshAccessToken() {
    return this.fetchJson<RefreshAccessToken>('/auth/refresh', {
      credentials: 'include'
    });
  }

  googleLogin() {
    return this.fetchJson<void>('/auth/google');
  }
}

export default new Api();
