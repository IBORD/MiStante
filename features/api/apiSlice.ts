import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export interface CatalogItem {
    id: string;
    title: string;
    thumbnailUrl: string;
}

export interface DummyJSONProductsResponse {
    products: Array<{
        id: number;
        title: string;
        thumbnail: string;
       
    }>;
    total: number;
    skip: number;
    limit: number;
}

export const catalogApi = createApi({
    reducerPath: 'catalogApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://dummyjson.com/' }),
    tagTypes: ['Catalog'],
    endpoints: (builder) => ({
        getCatalogItems: builder.query<CatalogItem[], void | { _limit?: number }>({
            query: (params) => ({
                url: 'products',
                params: params?._limit ? { limit: params._limit } : { limit: 12 },
            }),
            transformResponse: (response: DummyJSONProductsResponse) =>
                response.products.map(product => ({
                    id: String(product.id),
                    title: product.title,
                    thumbnailUrl: product.thumbnail,
                })) as CatalogItem[],
            providesTags: (result) =>
                result
                    ? [
                        ...result.map(({ id }) => ({ type: 'Catalog' as const, id })),
                        { type: 'Catalog', id: 'LIST' },
                    ]
                    : [{ type: 'Catalog', id: 'LIST' }],
        }),

    
        getCatalogItemById: builder.query<CatalogItem, string>({
            query: (id) => `products/${id}`, 
            transformResponse: (response: any) => ({ 
                id: String(response.id),
                title: response.title,
                thumbnailUrl: response.thumbnail,
            }) as CatalogItem,
            providesTags: (_result, _error, id) => [{ type: 'Catalog', id }],
        }),
    }),
});

export const { useGetCatalogItemsQuery, useGetCatalogItemByIdQuery } = catalogApi;