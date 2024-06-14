import { useRecoilValue } from "recoil";
import { drawResponse } from "../atom";

export const useDrawResults = () => {
  return useRecoilValue(drawResponse);
};
