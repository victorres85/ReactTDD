import { useNavigate } from "react-router-dom";
import { useParticipantsList } from "../state/hooks/useParticipantList";

const Footer = () => {
  const participants: string[] = useParticipantsList();

  const navigateTo = useNavigate();

  const start = () => {
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
