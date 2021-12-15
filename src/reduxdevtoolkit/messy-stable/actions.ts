import { Action } from "redux";
import { ThunkAction } from "redux-thunk";
import { StableState } from "./reducer";
import axios from "axios";

export enum StableActionTypes {
  FEED_REINDEERS = "FEED_REINDEERS",
  DO_SLEIGH_MAINTENANCE = "OVERVIEW_SLEIGH",
  PREPARE_REINDEERS = "PREPARE_REINDEERS",
  SEND_ELF_FOR_GIFTS = "SEND_ELF_FOR_GIFTS",
  LOAD_GIFTS = "LOAD_GIFTS",
  DO_IT_YOURSELF = "DO_IT_YOURSELF",
}

interface FeedReindeers {
  type: StableActionTypes.FEED_REINDEERS;
  payload: boolean; // are they full?
}
interface OverviewSleigh {
  type: StableActionTypes.DO_SLEIGH_MAINTENANCE;
  payload: boolean; // are they working?
}
interface PrepareReindeers {
  type: StableActionTypes.PREPARE_REINDEERS;
  payload: boolean; // are they ready for the road?
}

// async actions
interface SendElfGorGifts extends Action {
  type: StableActionTypes.SEND_ELF_FOR_GIFTS;
  payload: boolean;
}
interface LoadGifts extends Action {
  type: StableActionTypes.LOAD_GIFTS; // gifts for everyone who's been nice!
}
interface ScrewItSantaMustAlwaysDoStuffByHimself extends Action {
  type: StableActionTypes.DO_IT_YOURSELF;
}

type GetGiftsAction =
  | SendElfGorGifts
  | LoadGifts
  | ScrewItSantaMustAlwaysDoStuffByHimself;

export const getPresents =
  (): ThunkAction<void, StableState, undefined, GetGiftsAction> =>
  async (dispatch): Promise<void> => {
    dispatch<SendElfGorGifts>({
      type: StableActionTypes.SEND_ELF_FOR_GIFTS,
      payload: true,
    });
    axios
      .post("force lazy elf to get presents")
      .then(() => {
        dispatch<LoadGifts>({
          type: StableActionTypes.LOAD_GIFTS,
        });
      })
      .catch(() => {
        dispatch<ScrewItSantaMustAlwaysDoStuffByHimself>({
          type: StableActionTypes.DO_IT_YOURSELF,
        });
      })
      .finally(() => {
        dispatch<SendElfGorGifts>({
          type: StableActionTypes.SEND_ELF_FOR_GIFTS,
          payload: false,
        });
      });
  };

export type StableActions =
  | FeedReindeers
  | OverviewSleigh
  | PrepareReindeers
  | LoadGifts;
