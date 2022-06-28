export const PaginationAdapter = (data) => ({
    first: data.first,
    last: data.last,
    totalPages: data.totalPages,
    totalElements: data.totalElements,
});

export const CatalogAdapter = (data) => ({
    id: data.id,
    name: data.key,
});