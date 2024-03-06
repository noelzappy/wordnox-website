export interface PageProps<T = {}> {
  params: { slug: string };
  searchParams: T;
}
