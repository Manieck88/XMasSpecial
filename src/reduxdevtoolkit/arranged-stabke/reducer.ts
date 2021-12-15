import { createReducer } from "@reduxjs/toolkit";
import * as StableActions from "./actions";

export const initialStableState = {
  areReindeersFull: false,
  areSleightWorkingProperly: false,
  areReindeersReady: false,
  areGiftsLoaded: false,
};

export const stableReducer = createReducer(initialStableState, (builder) => {
  builder
    .addCase(StableActions.feedReindeers, (state, action) => {
      return { ...state, areReindeersFull: action.payload };
    })
    .addCase(StableActions.prepareReindeers, (state, action) => {
      return { ...state, areReindeersReady: action.payload };
    })
    .addCase(StableActions.overviewSleigh, (state, action) => {
      return { ...state, areSleightWorkingProperly: action.payload };
    })
    .addCase(StableActions.loadGifts, (state) => {
      return { ...state, areGiftsLoaded: true };
    })
    .addDefaultCase((state) => state);
});
