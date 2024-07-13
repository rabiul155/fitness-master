import { baseApi } from "../../api/baseApi";

const cartApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    addToCart: builder.mutation({
      query: (payload) => ({
        url: "/carts",
        method: "POST",
        body: payload,
      }),
    }),
    getCartProduct: builder.query({
      query: () => ({
        url: "/carts",
        method: "GET",
      }),
      providesTags: ["cart"],
    }),
    deleteCartProduct: builder.mutation({
      query: (id) => ({
        url: `/carts/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["cart"],
    }),
  }),
});

export const {
  useAddToCartMutation,
  useGetCartProductQuery,
  useDeleteCartProductMutation,
} = cartApi;
