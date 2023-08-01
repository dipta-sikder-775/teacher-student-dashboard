import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { TRootState } from "@redux/store";
import { ILoginData, IUser } from "@interfaces/auth";

const initialState: ILoginData = {
  full_name: null,
  position: null,
  token: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, { payload }: PayloadAction<ILoginData>) => {
      const { full_name, position, token } = payload;
      state.full_name = full_name;
      state.position = position;
      state.token = token;
    },
    logout: (state) => {
      state.full_name = null;
      state.position = null;
      state.token = null;
    },
    updateValidation: (state, action) => {
      //   if (state.user) state.user.hasVerifiedEmail = action.payload;
    },
    updateToken: (
      state,
      action: {
        payload: {
          token: string | null;
          refreshToken?: string | null;
        };
      },
    ) => {
      //   if (action.payload.token) state.token = action.payload.token;
      //   if (action.payload.refreshToken)
      //     state.refreshToken = action.payload.refreshToken;
    },
    updateName: (state, action: { payload: { name: string | null } }) => {
      //   if (state.user?.name) state.user.name = action.payload.name ?? "";
    },
  },
});

export const { login, logout, updateValidation, updateToken, updateName } =
  authSlice.actions;

export const selectAuth = (state: TRootState) => state.auth;

const authReducer = authSlice.reducer;

export default authReducer;
