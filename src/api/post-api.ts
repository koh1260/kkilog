import http from './http';

class PostApi {
  static getPosts() {
    return http.get('/posts');
  }

  static getPost(postId: number) {
    return http.get(`/posts/${postId}`);
  }

  // static getPostsByCategory(categoryName: string) {
  //   return http.get('/')
  // }
}

export default PostApi;
