// import MySwal from "components/MySwal";
import { login, logout, updateToken } from "@redux/features/auth/index";

import { apiSlice } from "../index";
import { redirect } from "react-router";
import {
  ILoginRes,
  IUserLogin,
  IUserRegister,
  IUserRegisterRes,
} from "@interfaces/auth";

export const authApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    register: builder.mutation<IUserRegisterRes, IUserRegister>({
      query: (body) => ({
        url: "v1/user/register",
        method: "POST",
        body,
      }),
      async onQueryStarted(args, { dispatch, queryFulfilled }) {
        try {
          const { data: result } = await queryFulfilled;

        //   if (result.data && result.data.user.role === "Admin") {
        //     dispatch(
        //       login({
        //         // token: result.data.accessToken,
        //         // user: result.data.user,
        //         // refreshToken: result.data.refreshToken,
        //         full_name:
        //       }),
        //     );
        //     redirect("/dashboard");
        //   }

        //   return result;
        } catch (error: any) {
          console.log("logout error: ", error);
        }
      },
    }),
    login: builder.mutation<ILoginRes, IUserLogin>({
      query: (body) => ({
        url: "v1/user/login",
        method: "POST",
        body,
      }),
      async onQueryStarted(args, { dispatch, queryFulfilled }) {
        try {
          const { data: result } = await queryFulfilled;

          if (
            result?.data?.position === "student" ||
            result?.data?.position === "teacher"
          ) {
            dispatch(
              login({
                full_name:result?.data?.full_name,
                position:result?.data?.position,
                token:result?.data?.token
              }),
            );
            redirect("/dashboard");
          }

        //   return result;
        } catch (error: any) {
          console.log("logout error: ", error);
        }
      },
    }),
    // logout: builder.mutation({
    //   query: () => ({
    //     url: "/auth/logout",
    //     method: "POST",
    //   }),
    //   async onQueryStarted(args, { dispatch, queryFulfilled }) {
    //     try {
    //       const result = (await queryFulfilled) as any;

    //       if (result) {
    //         dispatch(logout());
    //         localStorage.clear();
    //         redirect("/");
    //       }

    //       return result;
    //     } catch (error: any) {
    //       console.log("login error: ", error);
    //     }
    //   },
    //   invalidatesTags: ["stats", "users"],
    // }),
  }),
});

export const { useRegisterMutation, useLoginMutation } = authApiSlice;
