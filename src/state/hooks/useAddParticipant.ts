import { errorState, participantsListState } from "../atom";
import { useRecoilValue, useSetRecoilState } from "recoil";

export const useAddParticipant = () => {
  const setList = useSetRecoilState(participantsListState);
  const list = useRecoilValue(participantsListState);
  const setError = useSetRecoilState(errorState);
  return (participantName: string) => {
    if (list.includes(participantName)) {
      setError("Duplicated names are not allowed");
      setTimeout(() => {
        setError("");
      }, 3000);
      return;
    }
    return setList((currentList) => [...currentList, participantName]);
  };
};
