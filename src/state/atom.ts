import { atom } from "recoil";

export const participantsListState = atom<string[]>({
  key: "participantsListState",
  default: [],
});
