type BlogItemBase = {
  title: string;
};

export type BlogItem = BlogItemBase & {
  id: string;
};

export type Props = BlogItemBase;
