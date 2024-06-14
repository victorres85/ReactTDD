import { useState } from "react";
import { useParticipantsList } from "../../state/hooks/useParticipantList";
import { useDrawResults } from "../../state/hooks/useDrawResults";
import Card from "../Components/Card";
import "./Draw.css";

const Draw = () => {
  const participants = useParticipantsList();
  const [currentParticipant, setCurrentParticipant] = useState("");
  const [secretSanta, setSecretSanta] = useState("");

  const result = useDrawResults();

  const drawSanta = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (result.has(currentParticipant)) {
      setSecretSanta(result.get(currentParticipant)!);
    }
  };
  return (
    <Card>
      <section>
        <h2>Who is gonna draw a name?</h2>
        <form onSubmit={drawSanta}>
          <select
            required
            data-testid="select-multiple"
            name="currentParticipant"
            id="currentParticipant"
            value={currentParticipant}
            onChange={(e) => setCurrentParticipant(e.target.value)}
          >
            <option>Select your name</option>
            {participants.map((participant) => (
              <option key={participant}>{participant}</option>
            ))}
          </select>
          <p>Click below to find out who your Secret Santa is!</p>
          <button>Find out now</button>
        </form>
        {secretSanta && <p role="alert">{secretSanta}</p>}
        <footer className="draw-santa">
          <img
            src="/img/airplane.png"
            className="airplane"
            alt="Paper Airplane"
          />
        </footer>
      </section>
    </Card>
  );
};

export default Draw;
