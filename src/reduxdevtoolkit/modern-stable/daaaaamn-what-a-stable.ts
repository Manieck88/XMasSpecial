import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  areReindeersFull: false,
  areSleightWorkingProperly: false,
  areReindeersReady: false,
  areGiftsLoaded: false,
};

export const loadGifts = createAsyncThunk(
  "send-elf-to-get-gifts",
  async (_arg, _thunkAPI) => {
    const response = await axios.post("force-lazy-elf-to-get-presents");
    // we can do something with response
    return response.data;
  }
);

const superStable = createSlice({
  name: "stable",
  initialState,
  reducers: {
    feedReindeers(state, action: PayloadAction<boolean>) {
      return { ...state, areReindeersFull: action.payload };
    },
    overviewSleigh(state, action: PayloadAction<boolean>) {
      return { ...state, areSleightWorkingProperly: action.payload };
    },
    prepareReindeers(state, action: PayloadAction<boolean>) {
      return { ...state, areReindeersReady: action.payload };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loadGifts.fulfilled, (state, action: PayloadAction<boolean>) => {
        return { ...state, areGiftsLoaded: action.payload };
      })
      .addCase(loadGifts.pending, (state) => {
        return { ...state };
      })
      .addCase(loadGifts.rejected, (state) => {
        return { ...state };
      });
  },
});

export const { feedReindeers, overviewSleigh, prepareReindeers } =
  superStable.actions;
export default superStable.reducer;
