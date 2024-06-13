import { useParticipantsList } from "../state/hooks/useParticipantList";

const ParticipantsList = () => {
  const participants: string[] = useParticipantsList();
  return (
    <ul>
      {participants.map((participant) => (
        <li key={participant}>{participant}</li>
      ))}
    </ul>
  );
};

export default ParticipantsList;
