type TermSelectorProps = {
  term: string;
  setTerm: (term: string) => void;
};

function TermSelector({ term, setTerm }: TermSelectorProps) {
  return (
    <div className="term-selector">
      <button
        className={term === "Fall" ? "selected" : ""}
        onClick={() => setTerm("Fall")}
      >
        Fall
      </button>
      <button
        className={term === "Winter" ? "selected" : ""}
        onClick={() => setTerm("Winter")}
      >
        Winter
      </button>
      <button
        className={term === "Spring" ? "selected" : ""}
        onClick={() => setTerm("Spring")}
      >
        Spring
      </button>
    </div>
  );
}

export default TermSelector;