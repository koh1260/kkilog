export interface PostPreview {
  id: number;
  title: string;
  introduction: string;
  thumbnail: string;
  createAt: string;
  likes: number;
  commentCount: number;
};

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
  comments: Comment[]
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
  createAt: Date;
  writer: Writer;
}

export interface Category {
  id: number;
  categoryName: string;
  icon: string;
  childCategories: Category[] | [];
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
};

export interface UploadedImage {
  filePath: string;
}

export interface PostLike {
  likeCount: number;
}

export interface PostLikeCheck {
  liked: boolean;
}
