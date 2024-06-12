import { participantsListState } from "../atom";
import { useSetRecoilState } from "recoil";

export const useAddParticipant = () => {
  const setList = useSetRecoilState(participantsListState);
  return (participantName: string) => {
    return setList((currentList) => [...currentList, participantName]);
  };
};
