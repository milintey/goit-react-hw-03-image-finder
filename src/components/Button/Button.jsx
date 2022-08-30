import { ButtonLoadMore } from './Button.styled';

export const Button = ({ handleLoadMore, isDisabled }) => {
  return (
    <ButtonLoadMore
      disabled={isDisabled}
      type="button"
      onClick={handleLoadMore}
    >
      LOAD MORE
    </ButtonLoadMore>
  );
};
