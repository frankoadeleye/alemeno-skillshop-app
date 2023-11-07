import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import { AnyAction } from "redux";
import rootReducer from "src/redux/root-reducer";
import storage from "redux-persist/lib/storage";
import thunkMiddleware, { ThunkAction } from "redux-thunk";
import { persistStore, persistReducer } from "redux-persist";

const AlemenoSkillShopConfig = {
  key: "AlemenoSkillShop",
  storage: storage,
  whitelist: [""],
  blacklist: [""],
};

const pReducer = persistReducer(AlemenoSkillShopConfig, rootReducer);

const store =
  process.env.NODE_ENV === "production"
    ? configureStore({
        reducer: pReducer,
        middleware: [thunkMiddleware],
      })
    : configureStore({
        reducer: pReducer,
        middleware: [thunkMiddleware, logger],
      });

const persistor = persistStore(store);
export { persistor };
/*
 */
export { store };

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  AnyAction
>;
