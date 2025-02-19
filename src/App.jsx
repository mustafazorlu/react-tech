import { createContext } from "react";
import "./App.css";
import ComponentA from "./components/ComponentA";
import ComponentC from "./components/ComponentC";
import UserProfile from "./components/UserProfile";
import { UserProvider } from "./context/UserContext";

export const Data1 = createContext();
export const Data2 = createContext();

function App() {
    const name = "Mustafa";
    const age = 25;
    return (
        <div>
            <UserProvider value={name}>
                <UserProfile />
            </UserProvider>
        </div>

        // 3:22:45 kaldik
    );
}

export default App;
