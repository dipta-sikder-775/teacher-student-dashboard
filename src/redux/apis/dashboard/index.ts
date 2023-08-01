import { apiSlice } from "..";
import { IGetChart, IGetChartRes, IGetStaticRes } from "@interfaces/dashboard";

export const dashboardApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getStatics: builder.query<IGetStaticRes, void>({
      query: () => ({
        url: "v1/dashboard/statics",
        method: "POST",
      }),
      providesTags: ["folders"],
    }),
    getChart: builder.query<IGetChartRes, IGetChart>({
      query: () => ({
        url: "v1/dashboard/statics",
        method: "POST",
      }),
      providesTags: ["folders"],
    }),
  }),
});

export const { useGetChartQuery, useGetStaticsQuery } = dashboardApiSlice;
