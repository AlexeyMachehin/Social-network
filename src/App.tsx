import { Route, Routes } from 'react-router-dom';
import { RoutePaths } from './consts/routes';
import AuthorizationPage from './pages/authorizationPage/AuthorizationPage';
import FriendsPage from './pages/friendsPage/FriendsPage';
import NewsPage from './pages/newsPage/NewsPage';
import UserPage from './pages/userPage/UserPage';
import './styles/App.css';
import AsidePanel from './components/navigation/Navigation';

function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <div className="mainContainer">
        <AsidePanel />
          <Routes>
            <Route path={RoutePaths.INDEX} element={<UserPage />} />
            <Route
              path={RoutePaths.AUTHORIZATION}
              element={<AuthorizationPage />}
            />
            <Route path={RoutePaths.NEWS} element={<NewsPage />} />
            <Route path={RoutePaths.FRIENDS} element={<FriendsPage />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
