import { participantsListState } from "../atom";
import { useRecoilValue } from "recoil";

export const useParticipantsList = () => {
  return useRecoilValue(participantsListState);
};
