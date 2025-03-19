export interface PostMeta {
  title: string;
  date: string;
  desc?: string;
  image?: string;
  cover?: string;
}

export interface PostData extends PostMeta {
  slug: string;
  category: string;
}
