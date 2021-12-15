import { configureStore } from "@reduxjs/toolkit";
import { stableReducer } from "./reducer";

const store = configureStore({
  reducer: stableReducer,
  // reducer: {
  //   users: usersReducer,
  //   posts: postsReducer,
  // },
});

// function configureAppStore(preloadedState) {
//     const store = configureStore({
//       reducer: stableReducer,
//       middleware: (getDefaultMiddleware) =>
//         getDefaultMiddleware().concat(loggerMiddleware),
//       preloadedState,
//       enhancers: [monitorReducersEnhancer],
//     })

//     return store
//   }

export default store;
