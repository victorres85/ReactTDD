import { useRecoilValue } from "recoil";
import { errorState } from "../atom";

export const useErrorMessage = () => {
  const msg = useRecoilValue(errorState);
  return msg;
};
