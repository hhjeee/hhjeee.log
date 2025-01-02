export interface PostMeta {
  title: string;
  date: string;
  desc?: string;
  image?: string;
}

export interface PostData extends PostMeta {
  slug: string;
  category: string;
}
