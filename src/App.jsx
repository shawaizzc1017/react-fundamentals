import './App.css'
import {Welcome} from "./components/Welcome.jsx";
import {Button} from "./components/Button.jsx";
import {User} from "./components/User.jsx";
import {NewUser} from "./components/NewUser.jsx";

function App() {

  return (
    <>
        <Welcome />
        <Button />
        <User />
        <NewUser />
    </>
  )
}

export default App
