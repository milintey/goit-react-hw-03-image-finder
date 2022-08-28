export const Searcbar = ({ formSubmit }) => {
  return (
    <header className="searchbar">
      <form className="form" onSubmit={formSubmit}>
        <button type="submit" className="button">
          <span className="button-label">Search</span>
        </button>

        <input
          autocomplete="off"
          className="input"
          type="text"
          name="query"
          placeholder="Search images and photos"
        />
      </form>
    </header>
  );
};
