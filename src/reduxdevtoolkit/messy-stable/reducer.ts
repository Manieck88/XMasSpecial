import { StableActionTypes, StableActions } from "./actions";

export const initialStableState = {
  areReindeersFull: false,
  areSleightWorkingProperly: false,
  areReindeersReady: false,
  areGiftsLoaded: false,
};

export type StableState = typeof initialStableState;

const localizationReducer = (
  state = initialStableState,
  action: StableActions
): StableState => {
  switch (action.type) {
    case StableActionTypes.FEED_REINDEERS: {
      return {
        ...state,
        areReindeersFull: action.payload,
      };
    }
    case StableActionTypes.DO_SLEIGH_MAINTENANCE: {
      return {
        ...state,
        areSleightWorkingProperly: action.payload,
      };
    }
    case StableActionTypes.PREPARE_REINDEERS: {
      return {
        ...state,
        areReindeersReady: action.payload,
      };
    }
    case StableActionTypes.LOAD_GIFTS: {
      return {
        ...state,
        areGiftsLoaded: true,
      };
    }
    default: {
      return { ...state };
    }
  }
};

export default localizationReducer;
