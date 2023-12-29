export interface PreviewPost {
  id: number;
  title: string;
  introduction: string;
  thumbnail: string;
  createAt: string;
  likes: number;
  commentCount: number;
}

export interface User {
  id: number;
  email: string;
  nickname: string;
  profileImage: string;
  role: 'ADMIN' | 'USER';
  createAt: Date;
}

export interface Post {
  id: number;
  title: string;
  introduction: string;
  content: string;
  publicScope: 'PUBLIC' | 'PRIVATE';
  createAt: string;
  writer: Writer;
  thumbnail: string;
  likes: number;
  comments: Comment[];
  category: { categoryName: string };
}

export interface PostForUpdate {
  id: number;
  title: string;
  content: string;
  introduction: string;
  publicScope: 'PUBLIC' | 'PRIVATE';
  thumbnail: string;
  categoryName: string;
}

interface Writer {
  nickname: string;
  profileImage: string;
}

export interface Comment {
  id: number;
  profileImage: string;
  nickname: string;
  content: string;
  createAt: string;
  writer: Writer;
}

export interface Category {
  id: number;
  categoryName: string;
  icon: string;
  childCategories: Category[] | [];
}

export interface SimpleCategory {
  id: number;
  categoryName: string;
}

export interface OtherPost {
  id: number;
  title: string;
}

export interface RefreshAccessToken {
  accessToken: string;
}

export interface ValidateLogin {
  id: number;
  email: string;
  role: 'USER' | 'ADMIN';
}

export interface UploadedImage {
  filePath: string;
}

export interface PostLike {
  likeCount: number;
}

export interface PostLikeCheck {
  liked: boolean;
}

export interface ErrorResponse {
  error: string;
  message: string;
  statusCode: number;
}
