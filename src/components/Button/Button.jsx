import { ButtonLoadMore } from './Button.styled';

export const Button = ({ handleLoadMore }) => {
  return (
    <ButtonLoadMore type="button" onClick={handleLoadMore}>
      LOAD MORE
    </ButtonLoadMore>
  );
};
