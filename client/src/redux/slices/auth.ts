import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UserType } from '../../types/authTypes';
import { jwtDecode } from 'jwt-decode';

export const BASE_URL = 'https://8994-196-135-96-13.ngrok-free.app'; // Replace with your API base URL

export interface AuthState {
  user: UserType | null;
  loading: boolean;
  isAuthenticated: boolean; // Add isAuthenticated to AuthState
}

const initialState: AuthState = {
  user: null,
  loading: false,
  isAuthenticated: false // Set isAuthenticated to false initially
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<UserType | null>) => {
      state.user = action.payload;
    },
    setIsAuthenticated: (state, action: PayloadAction<boolean>) => { // Change the payload type to boolean
      state.isAuthenticated = action.payload;
    }
  },
});

// Define a thunk action to update isAuthenticated based on token
export const checkAuthentication = () => (dispatch: any) => {
  const isAuthenticated = isAuthenticated(); // Call the isAuthenticated function
  dispatch(authSlice.actions.setIsAuthenticated(isAuthenticated));
};

export const isAuthenticated = () => {
  const token = localStorage.getItem('token');
  if (!token) return false;

  try {
    const decodedToken: { exp: number } = jwtDecode(token);
    const currentTime = Date.now() / 1000;
    if (decodedToken.exp < currentTime) {
      localStorage.removeItem('token');
      return false;
    }
    // Token is valid
    return true;
  } catch (error) {
    return false;
  }
};

export default authSlice.reducer;
