import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: INavigationState = {
  dataFetched: false,
  header: {
    name: "Header",
    slug: "header",
    items: [],
  },
  footer: {
    name: "Footer",
    slug: "footer",
    items: [],
  },
};

const navigationSlice = createSlice({
  name: "navigation",
  initialState,
  reducers: {
    setNavigation: (state, action: PayloadAction<INavigationSchema>) => {
      return {
        ...state,
        ...action.payload,
      };
    },
    setFetchedStatus: (state, action: PayloadAction<boolean>) => {
      state.dataFetched = action.payload;
    }
  },
});

export const { setNavigation, setFetchedStatus } = navigationSlice.actions;
export default navigationSlice.reducer;