export type PaginatedResponseType<T> = {
  page: number;
  limit: number;
  totalCount: number;
  totalPages: number;
  data: Array<T>;
};
