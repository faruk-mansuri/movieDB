import { Outlet } from 'react-router-dom';
const SharedPage = () => {
  return (
    <>
      <h1 className='title'>Movie DB</h1>
      <Outlet />
    </>
  );
};

export default SharedPage;
