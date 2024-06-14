import { useNavigate } from "react-router-dom";
import { useParticipantsList } from "../state/hooks/useParticipantList";
import { useDraw } from "../state/hooks/useDraw";

import "./Footer.css";

const Footer = () => {
  const participants: string[] = useParticipantsList();

  const navigateTo = useNavigate();
  const drawNames = useDraw();

  const start = () => {
    drawNames();
    navigateTo("/draw");
  };

  return (
    <footer className="home-footer">
      <button
        className="botao"
        disabled={participants.length < 3}
        onClick={start}
      >
        Draw Names
      </button>
      <img src="/img/bags.png" alt="Shooping bags" />
    </footer>
  );
};

export default Footer;
