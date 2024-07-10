import { baseApi } from "../../api/baseApi";

const productApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    product: builder.query({
      query: (queryStr) => ({
        url: "/products",
        method: "GET",
      }),
    }),
  }),
});

export const { useProductQuery } = productApi;
