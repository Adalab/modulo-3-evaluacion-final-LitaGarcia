import { Oval } from 'react-loader-spinner';
function Loader() {
  return (
    <Oval
      height={150}
      width={150}
      color="#4fa94d"
      wrapperStyle={{}}
      wrapperclassName=""
      visible={true}
      ariaLabel="oval-loading"
      secondaryColor="#4fa94d"
      strokeWidth={2}
      strokeWidthSecondary={2}
    />
  );
}
export default Loader;
