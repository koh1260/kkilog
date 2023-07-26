export interface Post {
  id: number;
  title: string;
  introduction: string;
  thumbnail: string;
  createAt: Date;
  commentCount: number;
}