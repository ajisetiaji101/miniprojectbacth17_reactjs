import Routes from './Routes';
import { useSelector } from 'react-redux';
import { useRoutes } from 'react-router-dom';

function App() {
  const { isLoggedIn } = useSelector((state) => state.userState);

  return (
      Routes(isLoggedIn)
  );
}

export default App;
