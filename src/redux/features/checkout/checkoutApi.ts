import { baseApi } from "../../api/baseApi";

const cartApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createCheckout: builder.mutation({
      query: (payload) => ({
        url: "/checkouts",
        method: "POST",
        body: payload,
      }),
    }),
  }),
});

export const { useCreateCheckoutMutation } = cartApi;
