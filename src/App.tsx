import { useAppSelector } from './hooks/reduxHooks';
import { useAuth } from './hooks/useAuth';
import { selectorIsLoaderOn, selectorUser } from './store/selectors';
import { Route, Routes } from 'react-router-dom';
import Navigation from './components/navigation/Navigation';
import UnAuthGuard from './components/unAuthGuard/UnAuthGuard';
import AuthorizationPage from './pages/authorizationPage/AuthorizationPage';
import AuthGuard from './components/authGuard/AuthGuard';
import UserPage from './pages/userPage/UserPage';
import NewsPage from './pages/newsPage/NewsPage';
import FriendsPage from './pages/friendsPage/FriendsPage';
import { RoutePaths } from './consts/routes';
import Loader from './components/loader/Loader';
import axios from 'axios';
import './styles/App.css';

function App() {
  const user = useAppSelector(selectorUser);
  const isLoaderOn = useAppSelector(selectorIsLoaderOn);

  useAuth();

  const getProducts = async () => {
    const products = await axios.get<any>('/api/products', {
      baseURL: 'http://localhost:5000',
    });

    console.log(products.data);
  };
  
  getProducts();

  return (
    <>
      {isLoaderOn && <Loader />}
      <div className="App">
        <div className="wrapper">
          <div className="mainContainer">
            {user && <Navigation />}

            <Routes>
              <Route element={<UnAuthGuard />}>
                <Route
                  path={RoutePaths.AUTHORIZATION}
                  element={<AuthorizationPage />}
                />
              </Route>

              <Route element={<AuthGuard />}>
                <Route path={RoutePaths.INDEX} element={<UserPage />} />
                <Route path={RoutePaths.NEWS} element={<NewsPage />} />
                <Route path={RoutePaths.FRIENDS} element={<FriendsPage />} />
              </Route>
            </Routes>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
