import { ThreeDots } from 'react-loader-spinner';

const Loader = () => {
  return (
    <ThreeDots
      height="80"
      width="60"
      radius="9"
      color="#198287"
      ariaLabel="three-dots-loading"
      wrapperStyle={{
        justifyContent: 'center',
        position: 'absolute',
        top: '-10px',
        right: '50%',
        transform: 'translateX(50%)',
      }}
      visible={true}
    />
  );
};

export default Loader;
