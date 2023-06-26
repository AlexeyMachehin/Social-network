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
import { userService } from './services/userService';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import './styles/App.css';


ggg()
 function ggg(){

 }
const theme = createTheme();

function App() {
  const user = useAppSelector(selectorUser);
  const isLoaderOn = useAppSelector(selectorIsLoaderOn);

  useAuth();

  const test = async () => {
    // const users = await userService.getUsers<any>();
    // console.log(users);

    // userService.createUser({ id: 'zzz', email: 'zzz' });
    userService.updateUser('645ab8a9facdbdf5629d55c5', {
      id: 'new',
      email: 'new',
    });
  };

  return (
    <ThemeProvider theme={theme}>
      {/* <button onClick={test}>test</button> */}
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
                <Route path={RoutePaths.INDEX} element={<UserPage />}>
                  <Route
                    path={RoutePaths.INDEX + '/:idParam'}
                    element={<UserPage />}
                  />
                </Route>

                <Route path={RoutePaths.NEWS} element={<NewsPage />} />
                <Route path={RoutePaths.FRIENDS} element={<FriendsPage />} />
              </Route>
            </Routes>
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
