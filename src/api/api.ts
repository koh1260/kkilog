import axios, {
  AxiosHeaders,
  AxiosInstance,
  HeadersDefaults,
  RawAxiosRequestHeaders
} from 'axios';
import { UpdatePostData, WriteCommentData, WritePostData } from '../type/request';

class Api {
  apiToken: string | null = null;

  client: AxiosInstance | null = null;

  apiUrl: string = process.env.API_URL!;

  init = () => {
    this.apiToken = window.localStorage.getItem('access_token');

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

  login(email: string, password: string) {
    return this.init().post('/users/login', {email, password});
  }
}

export default new Api();