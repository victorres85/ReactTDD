import shuffle from "just-shuffle";

export function drawSanta(participants: string[]) {
  const numberOfParticipants = participants.length;
  const shuffled = shuffle(participants);

  const result = new Map<string, string>();
  for (let index = 0; index < numberOfParticipants; index++) {
    const santaIndex = index === numberOfParticipants - 1 ? 0 : index + 1;
    result.set(shuffled[index], shuffled[santaIndex]);
  }
  return result;
}
