import { useNavigate } from "react-router-dom";
import { useParticipantsList } from "../state/hooks/useParticipantList";
import { useDraw } from "../state/hooks/useDraw";

const Footer = () => {
  const participants: string[] = useParticipantsList();

  const navigateTo = useNavigate();
  const drawNames = useDraw();

  const start = () => {
    drawNames();
    navigateTo("/draw");
  };

  return (
    <footer>
      <button disabled={participants.length < 3} onClick={start}>
        Draw Names
      </button>
    </footer>
  );
};

export default Footer;
