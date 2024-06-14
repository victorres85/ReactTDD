import { useSetRecoilState } from "recoil";
import { drawResponse } from "../atom";
import { useParticipantsList } from "./useParticipantList";
import { drawSanta } from "../helpers/drawSanta";
export const useDraw = () => {
  const participants = useParticipantsList();
  const setResults = useSetRecoilState(drawResponse);
  return () => {
    const result = drawSanta(participants);
    setResults(result);
  };
};
