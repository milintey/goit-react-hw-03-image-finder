import { BsSearch } from 'react-icons/bs';
import {
  SearchbarHeader,
  SearcForm,
  SearchFormButton,
  SearchFormInput,
} from './Searchbar.styled';

export const Searcbar = ({ formSubmit, isDisabled }) => {
  return (
    <SearchbarHeader className="searchbar">
      <SearcForm className="form" onSubmit={formSubmit}>
        <SearchFormButton disabled={isDisabled} type="submit">
          <BsSearch size={20} />
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
