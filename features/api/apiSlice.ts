
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export interface CatalogItem {
    albumId: number;
    id: string;
    title: string;
    url: string;
    thumbnailUrl: string;
}


export type CatalogItemsResponse = CatalogItem[];

export const catalogApi = createApi({
    reducerPath: 'catalogApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com/' }),
    tagTypes: ['Catalog'],
    endpoints: (builder) => ({

        getCatalogItems: builder.query<CatalogItem[], void | { _limit?: number }>({
            query: (params) => ({
                url: 'photos',
                params: params || { _limit: 12 },
            }),

            transformResponse: (response: any[]) =>
                response.map(item => ({
                    ...item,
                    id: String(item.id),
                    src: item.thumbnailUrl,
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
            query: (id) => `photos/${id}`,
            transformResponse: (response: any) => ({
                ...response,
                id: String(response.id),
                src: response.thumbnailUrl,
            }) as CatalogItem,
            providesTags: (_result, _error, id) => [{ type: 'Catalog', id }],
        }),
    }),

});

export const { useGetCatalogItemsQuery, useGetCatalogItemByIdQuery /*, useUpdateItemMutation */ } = catalogApi;