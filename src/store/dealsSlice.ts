import { createSlice, PayloadAction } from "@reduxjs/toolkit";
interface Deal {
  id: string;
  title: string;
  price: number;
}

interface DealsState {
  list: Deal[];
}

const initialState: DealsState = {
  list: [],
};

const dealsSlice = createSlice({
  name: "deals",
  initialState,
  reducers: {
    setDeals: (state, action: PayloadAction<Deal[]>) => {
      state.list = action.payload;
    },
    clearDeals: (state) => {
      state.list = [];
    },
    addDeal: (state, action: PayloadAction<Deal>) => {
      state.list.push(action.payload);
    },
    removeDeal: (state, action: PayloadAction<string>) => {
      state.list = state.list.filter((deal) => deal.id !== action.payload);
    },
    fetchDeals: (state, action: PayloadAction<Deal[]>) => {
      state.list = action.payload;
    },
    getOrSetDeals: {
      prepare: (deals: Deal[]) => ({ payload: deals }),
      reducer: (state, action: PayloadAction<Deal[]>) => {
        if (state.list.length === 0) {
          state.list = action.payload;
        }
      },
    },
  },
});

export const {
  setDeals,
  clearDeals,
  addDeal,
  removeDeal,
  fetchDeals,
  getOrSetDeals,
} = dealsSlice.actions;
export default dealsSlice.reducer;
