import logo from "./logo.svg";
import "./App.css";
import Profil from "./Component/Profile/ProfilPhoto";
import Name from "./Component/Profile/FullName";
import Address from "./Component/Profile/Address";
import Contenu from "./Component/Contenu/Contenu";
function App() {
    return (
        <div className="App">
            {/*  <Profil />
            <Name />
        <Address />*/}
            <Contenu />
        </div>
    );
}

export default App;
