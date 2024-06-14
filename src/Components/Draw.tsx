import { useParticipantsList } from "../state/hooks/useParticipantList";

const Draw = () => {
  const participants = useParticipantsList();

  return (
    <section>
      <form>
        <select name="currentParticipant" id="currentParticipant">
          {participants.map((participant) => (
            <option key={participant}>{participant}</option>
          ))}
        </select>
      </form>
    </section>
  );
};

export default Draw;
