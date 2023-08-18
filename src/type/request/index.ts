export interface LoginData {
  username: string;
  password: string;
}

export interface WritePostData {
  title: string;
  content: string;
  introduction: string;
  thumbnail: string;
  categoryName: string;
}

export interface UpdatePostData extends Partial<WritePostData> {
  publicScope: 'PUBLIC' | 'PRIVATE';
}

export interface WriteCommentData {
  postId: number;
  content: string;
  parentId?: number
}
