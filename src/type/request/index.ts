export interface SignupData {
  email: string;
  nickname: string;
  password: string;
}

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
  categoryId: number;
  publicScope: 'PUBLIC' | 'PRIVATE';
}

export interface WriteCommentData {
  postId: number;
  content: string;
  userId?: number;
  parentId?: number;
  nickname?: string;
  password?: string;
}
