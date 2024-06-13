import { useState, useRef } from "react";
import { useAddParticipant } from "../state/hooks/useAddParticipant";
import { useErrorMessage } from "../state/hooks/useErrorMessage";

const Form = () => {
  const [name, setName] = useState("");
  const addOnList = useAddParticipant();
  const errorMessage = useErrorMessage();

  const inputRef = useRef<HTMLInputElement>(null);
  const addParticipant = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addOnList(name);
    setName("");
    inputRef.current?.focus();
  };

  return (
    <form onSubmit={addParticipant}>
      <input
        ref={inputRef}
        value={name}
        onChange={(e) => setName(e.target.value)}
        type="text"
        placeholder="Add Paticipants' names"
      />
      <button disabled={!name}>Add</button>
      {errorMessage && <p role="alert">{errorMessage}</p>}
    </form>
  );
};

export default Form;
