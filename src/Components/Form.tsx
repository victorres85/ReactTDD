import { useState, useRef } from "react";
import { useAddParticipant } from "../state/hooks/useAddParticipant";
import { useErrorMessage } from "../state/hooks/useErrorMessage";

import "./Form.css";

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
      <div className="grup-input-btn">
        <input
          ref={inputRef}
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
          placeholder="Add Paticipants' names"
        />
        <button disabled={!name}>Add</button>
      </div>
      {errorMessage && (
        <p className="alerta erro" role="alert">
          {errorMessage}
        </p>
      )}
    </form>
  );
};

export default Form;
