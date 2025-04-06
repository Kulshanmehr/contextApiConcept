import "./App.css";
import UserContextProvider from "./context/UserContextProvider";
import Login from "./components/Login/Login.jsx";
import Profile from "./components/Profile/Profile.jsx";

function App() {
  return (
    <UserContextProvider>
      <h1>Welcome To Learning Context in React Application</h1>
      <Login />
      <Profile />
    </UserContextProvider>
  );
}

export default App;
