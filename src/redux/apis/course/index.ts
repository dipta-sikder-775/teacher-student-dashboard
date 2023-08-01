import {
  IAddComment,
  IAddCommentRes,
  IAddDetailsRes,
  IAddList,
  IAddListRes,
  ICreateCourse,
  ICreateCourseRes,
} from "@interfaces/course";
import { apiSlice } from "..";

export const courseApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    createCourse: builder.mutation<ICreateCourseRes, ICreateCourse>({
      query: (body) => ({
        url: "v1/course/create",
        method: "POST",
        body,
      }),
    }),
    createList: builder.mutation<IAddListRes, IAddList>({
      query: (body) => ({
        url: "v1/course/list",
        method: "POST",
        body,
      }),
    }),
    createDetails: builder.mutation<IAddDetailsRes, IAddListRes>({
      query: (body) => ({
        url: "v1/course/details",
        method: "POST",
        body,
      }),
    }),
    createComment: builder.mutation<IAddCommentRes, IAddComment>({
      query: (body) => ({
        url: "v1/course/comment/add",
        method: "POST",
        body,
      }),
    }),
  }),
});

export const { useCreateCourseMutation } = courseApiSlice;
