import './App.css'
import {Welcome} from "./components/Welcome.jsx";
import {Button} from "./components/Button.jsx";
import {User} from "./components/User.jsx";
import {NewUser} from "./components/NewUser.jsx";
import {UserDetails} from "./components/UserDetails.jsx";

function App() {

  return (
    <>
        <Welcome />
        <Button />
        <User />
        <NewUser />
        <UserDetails />
    </>
  )
}

export default App
