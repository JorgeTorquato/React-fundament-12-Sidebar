import { useGlobalContext } from './context';
import { FaBars } from 'react-icons/fa';
const Home = () => {
  const { openModal, openSidebar } = useGlobalContext();
  return (
    <main>
      <button className='sidebar-toggle' onClick={openSidebar}>
        <FaBars />
      </button>
      <button onClick={openModal} className='btn'>
        show modal
      </button>
    </main>
  );
};
export default Home;
