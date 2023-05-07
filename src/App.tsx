import { Route, Routes } from 'react-router-dom';
import { RoutePaths } from './consts/routes';
import AuthorizationPage from './pages/authorizationPage/AuthorizationPage';
import FriendsPage from './pages/friendsPage/FriendsPage';
import NewsPage from './pages/newsPage/NewsPage';
import UserPage from './pages/userPage/UserPage';
import Navigation from './components/navigation/Navigation';
import { useAuth } from './hooks/useAuth';
import { useAppSelector } from './hooks/reduxHooks';
import UnAuthGuard from './components/unAuthGuard/UnAuthGuard';
import AuthGuard from './components/authGuard/AuthGuard';
import './styles/App.css';

function App() {
  const user = useAppSelector(state => state.userReducer.user);
  useAuth();

  return (
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
  );
}

export default App;
