import {
  SearchbarHeader,
  SearcForm,
  SearchFormButton,
  SearchFormInput,
  SearchFormButtonLabel,
} from './Searchbar.styled';

export const Searcbar = ({ formSubmit }) => {
  return (
    <SearchbarHeader className="searchbar">
      <SearcForm className="form" onSubmit={formSubmit}>
        <SearchFormButton type="submit" className="button">
          <SearchFormButtonLabel>Search</SearchFormButtonLabel>
        </SearchFormButton>

        <SearchFormInput
          autocomplete="off"
          className="input"
          type="text"
          name="query"
          placeholder="Search images and photos"
        />
      </SearcForm>
    </SearchbarHeader>
  );
};
