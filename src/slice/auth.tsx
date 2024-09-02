import { setCookie,deleteCookie } from 'cookies-next'
import {createSlice} from '@reduxjs/toolkit';


const setAuthCookie = (token: string, name: string) => {
  const toBase64 = Buffer.from(token).toString('base64');

  setCookie(name, toBase64, {
    maxAge: 30 * 24 * 60 * 60,
    path: '/',
    // more security options here
    // sameSite: 'strict',
    // httpOnly: true,
    // secure: process.env.NODE_ENV === 'production',
  });
};

const authSlice = createSlice({
  name: 'auth',
  initialState: {user: null, token: null,userId:null},
  reducers: {
    setCredentials: (state, action) => {
      const {user, accessToken,userId} = action.payload;
      state.user = user;
      state.token = accessToken;
      setAuthCookie(accessToken,'auth_token')
      state.userId = userId
    },
    setLogout: (state) => {
      state.user = null;
      state.token = null;
      state.userId = null;
      deleteCookie('auth_token')
    },
  },
});


export const {setCredentials,setLogout}=authSlice.actions

export default authSlice.reducer

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const selectCurrentUser = (state:any)=>state.auth.user
export const selectCurrentUserId=(state:any)=>state.auth.userId
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const selectCurrentToken = (state:any)=>state.auth.token