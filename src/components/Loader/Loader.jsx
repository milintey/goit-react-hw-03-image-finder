import { Circles } from 'react-loader-spinner';
import { LoaderDiv } from './Loader.styled';

export const Loader = () => {
  return (
    <LoaderDiv>
      <Circles
        height="80"
        width="80"
        color="#3f51b5"
        ariaLabel="circles-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </LoaderDiv>
  );
};
