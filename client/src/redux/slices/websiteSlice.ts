import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface WebsiteState {
  language: 'en' | 'ar';
}

const initialState: WebsiteState = {
  language: 'ar',
};

const websiteSlice = createSlice({
  name: 'website',
  initialState,
  reducers: {
    setLanguage(state, action: PayloadAction<'ar' | 'en'>) {
      state.language = action.payload;
    },
  },
});

export const { setLanguage } = websiteSlice.actions;

export default websiteSlice.reducer;
