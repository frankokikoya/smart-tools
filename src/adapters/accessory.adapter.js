export const AccessoryPaginationAdapter = (data) => ({
    first: data.first,
    last: data.last,
    totalPages: data.totalPages,
    totalElements: data.totalElements,
});

export const AccessoryAdapter = (data) => ({
    id: data.id,
    accesory: data.accesory,
});

export const AccessoryUser = (data) => ({
    name: data.fullname,
    createdAt: data.creationDate,
});