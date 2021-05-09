export interface PaginationInfo {
    total: number;
    totalPages: number;
    currentPage: number;
}

export interface PaginationOptions {
    limit: number;
    page: number;
}

export interface Pagination<T> {
    pagination: PaginationInfo;
    data: T;
}
