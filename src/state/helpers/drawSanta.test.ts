import { drawSanta } from "./drawSanta";

describe("once the draw has been executed", () => {
  test("participants do not get their own name as Secret Santa", () => {
    const participants = [
      "Cintia",
      "Pedro",
      "Lina",
      "Cristina",
      "Daniel",
      "Lucas",
      "Rafael",
      "Victor",
    ];

    const draw = drawSanta(participants);
    participants.forEach((participant) => {
      const santa = draw.get(participant);
      expect(santa).not.toEqual(participant);
    });
  });
});
