export const api = createApi({
    baseQuery: fetchBaseQuery({ baseUrl: process.env.NEXT_PUBLIC_API_BASE_URL }),
    reducerPath: "api",
    tagTypes: ["User", "Product"],
    endpoints: (build) => ({
        getUser: build.query({
            query: (id) => `/user/${id}`,
            providesTags: ["User"],
        }),
    }),
});
