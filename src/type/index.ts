export interface PostPreview {
  id: number;
  title: string;
  introduction: string;
  thumbnail: string;
  createAt: Date;
  commentCount: number;
};

export interface Post {
  id: number;
  title: string;
  content: string;
  createAt: Date;
  writer: Writer;
  thumbnail: string;
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
