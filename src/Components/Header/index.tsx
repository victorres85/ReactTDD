import "./styles.css";

const Header = () => {
  return (
    <header className="header">
      <div
        className="image-logo"
        role="img"
        aria-label="Logo do Sorteador"
      ></div>
      <img
        className="participant"
        src="/img/participant.png"
        alt="Participant holding gift"
      />
    </header>
  );
};

export default Header;
