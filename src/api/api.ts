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
  PreviewPost,
  RefreshAccessToken,
  UploadedImage,
  ValidateLogin
} from '../type';
import ClientExcepction from '../common/exceptions/client-exception';

interface Result<T = any> {
  statusCode: number;
  message: string;
  result?: T;
}

class Api {
  isAccessTokenRefresh = false;

  apiUrl: string = process.env.REACT_APP_API_URL || '';

  async fetchDate(
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
  ): Promise<Result<T>> {
    const response = this.fetchDate(input, init);
    const result: Promise<Result<T>> = (await response).json();
    return result;
  }

  writerPost(payload: WritePostData) {
    return this.fetchDate('/posts', {
      method: 'POST',
      body: JSON.stringify(payload),
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }

  getPostList() {
    return this.fetchJson<PreviewPost[]>('/posts');
  }

  getPostListByCategoryId(categoryId: number) {
    return this.fetchJson<PreviewPost[]>(`/posts/category/${categoryId}`);
  }

  getPostListByCategoryName(categoryName: string) {
    return this.fetchJson<PreviewPost[]>(
      `/posts/category?categoryName=${categoryName}`
    );
  }

  getPost(postId: number) {
    return this.fetchJson<Post>(`/posts/${postId}`);
  }

  updatePost(postId: number, payload: UpdatePostData) {
    return this.fetchDate(`/posts/${postId}`, {
      method: 'PATCH',
      body: JSON.stringify(payload),
      headers: {
        'Content-Type': 'application/json'
      },
      credentials: 'include'
    });
  }

  deletePost(postId: number) {
    return this.fetchDate(`/posts/${postId}`, {
      method: 'DELETE',
      credentials: 'include'
    });
  }

  postLike(postId: number) {
    return this.fetchJson<PostLike>(`/posts/like/${postId}`, {
      credentials: 'include'
    });
  }

  postLikeCheck(postId: number) {
    return this.fetchJson<PostLikeCheck>(`/posts/like-check/${postId}`, {
      credentials: 'include'
    });
  }

  postLikeCount(postId: number) {
    return this.fetchJson<PostLike>(`/posts/like-count?post=${postId}`);
  }

  getPreviousAndNextPost(postId: number) {
    return this.fetchJson<OtherPost[]>(`/posts/other/${postId}`);
  }

  getCategoryList() {
    return this.fetchJson<Category[]>('/categorys');
  }

  writeComment(payload: WriteCommentData) {
    return this.fetchJson<void>('/comments', {
      method: 'POST',
      body: JSON.stringify(payload),
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }

  getCommentList(postId: number) {
    return this.fetchJson<Comment[]>(`/comments?post=${postId}`);
  }

  signup(payload: SignupData) {
    return this.fetchDate('/users', {
      method: 'POST',
      body: JSON.stringify(payload),
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }

  login(payload: LoginData) {
    return this.fetchDate('/users/login', {
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
    return this.fetchJson<ValidateLogin>('/auth/login-validate', {
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
