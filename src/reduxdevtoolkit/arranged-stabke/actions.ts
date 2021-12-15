import { ThunkAction } from "redux-thunk";
// import { StableState } from "./reducer";
import { createAction } from "@reduxjs/toolkit";
import axios from "axios";

export const feedReindeers = createAction<boolean>("FEED_REINDEERS");
export const overviewSleigh = createAction<boolean>("OVERVIEW_SLEIGH");
export const prepareReindeers = createAction<boolean>("PREPARE_REINDEERS");

// async actions
export const sendElfGorGifts = createAction<boolean>("SEND_ELF_FOR_GIFTS");
export const loadGifts = createAction("LOAD_GIFTS");
export const screwItSantaMustAlwaysDoStuffByHimself =
  createAction<boolean>("DO_IT_YOURSELF");

type GetGiftsAction =
  | ReturnType<typeof sendElfGorGifts>
  | ReturnType<typeof loadGifts>
  | ReturnType<typeof screwItSantaMustAlwaysDoStuffByHimself>;

export const getPresents =
  (): ThunkAction<void, any, undefined, GetGiftsAction> =>
  async (dispatch): Promise<void> => {
    dispatch(sendElfGorGifts(true));
    axios
      .post("force-lazy-elf-to-get-presents")
      .then(() => {
        dispatch<GetGiftsAction>(loadGifts());
      })
      .catch(() => {
        dispatch<GetGiftsAction>(screwItSantaMustAlwaysDoStuffByHimself(true));
      })
      .finally(() => {
        dispatch(sendElfGorGifts(false));
      });
  };
