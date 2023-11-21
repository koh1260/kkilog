export interface LoginData {
  username: string;
  password: string;
}

export interface WritePostData {
  title: string;
  content: string;
  introduction: string;
  thumbnail: string | null;
  categoryName: string;
}

export interface UpdatePostData extends Partial<WritePostData> {
  publicScope: 'PUBLIC' | 'PRIVATE';
}

export interface WriteCommentData {
  postId: string;
  content: string;
  userId?: string;
  parentId?: number;
  nickname?: string;
  password?: string;
}
