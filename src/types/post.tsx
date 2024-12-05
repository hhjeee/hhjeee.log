export interface PostMeta {
  title: string;
  date: string;
}

export interface PostData extends PostMeta {
  slug: string;
}
