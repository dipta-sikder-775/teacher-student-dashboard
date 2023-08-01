import {
  IProfileDetailsRes,
  IUpdateUser,
  IUpdateUserRes,
} from "@interfaces/profile";
import { apiSlice } from "..";

export const profileApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    updateProfile: builder.mutation<IUpdateUserRes, IUpdateUser>({
      query: (body) => ({
        url: "v1/user/details/update",
        method: "POST",
        body,
      }),
      invalidatesTags: ["folders"],
    }),
    getProfileDetails: builder.query<IProfileDetailsRes, void>({
      query: () => ({
        url: "v1/user/details",
        method: "GET",
      }),
      providesTags: ["folders"],
    }),
  }),
});

export const { useGetProfileDetailsQuery, useUpdateProfileMutation } =
  profileApiSlice;
