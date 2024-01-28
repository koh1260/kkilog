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
  UserProfile,
  ValidateLogin
} from '../type';
import { ResponseGet } from '../type/response';
import ApiError from '../errors/ApiError';

class Api {
  isAccessTokenRefresh = false;

  apiUrl: string = process.env.REACT_APP_API_URL || '';

  async fetchData(
    input: RequestInfo | URL,
    init?: RequestInit | undefined
  ): Promise<Response> {
    const fetchFn = () => {
      try {
        const config: RequestInit = {
          ...init,
          headers: {
            ...init?.headers
          }
        };
        return fetch(`${this.apiUrl}${input}`, config);
      } catch (e) {
        throw Error('Network Error');
      }
    };

    let response = await fetchFn();

    if (response.status === 401 && !this.isAccessTokenRefresh) {
      this.isAccessTokenRefresh = true;
      await this.refreshAccessToken();
      this.isAccessTokenRefresh = false;

      response = await fetchFn();
    }

    if (!response.ok) {
      const body = await response.json();
      throw new ApiError(body);
    }

    return response;
  }

  async fetchJson<T>(
    input: RequestInfo | URL,
    init?: RequestInit | undefined
  ): Promise<T> {
    const response = await this.fetchData(input, init);
    const data: Promise<T> = response.json();
    return data;
  }

  writePost(payload: WritePostData) {
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

  async getPost(postId: number) {
    return (await this.fetchJson<ResponseGet<Post>>(`/posts/${postId}`)).result;
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

  async getCategoryList() {
    return (await this.fetchJson<ResponseGet<Category[]>>('/categorys')).result;
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
    return this.fetchJson<ResponseGet<UserProfile>>('/users/login', {
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

  // eslint-disable-next-line consistent-return
  loginValidate() {
      return this.fetchJson<ResponseGet<ValidateLogin>>('/auth/login-validate', {
        credentials: 'include'
      });
  }

  async uploadImage(form: FormData) {
    return (await this.fetchJson<ResponseGet<UploadedImage>>('/file/upload', {
      method: 'POST',
      body: form
    })).result;
  }

  // eslint-disable-next-line consistent-return
  async refreshAccessToken() {
    try {
      return await this.fetchJson<RefreshAccessToken>('/auth/refresh', {
        credentials: 'include'
      });
    } catch(e) {
      console.log('refresh fail');
    }
    
  }

  googleLogin() {
    return this.fetchJson<void>('/auth/google');
  }
}

export default new Api();
