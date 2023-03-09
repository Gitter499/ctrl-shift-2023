"use client";

import { createStore, Action, action } from "easy-peasy";

export interface NavModel {
  nav: boolean;
  setNav: Action<NavModel, boolean>;
}
export const navStore = createStore<NavModel>({
  nav: false,

  setNav: action((state, payload) => {
    state.nav = payload;
  }),
});
