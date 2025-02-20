import { createContext } from "react";
import "./App.css";
import UserProfile from "./components/UserProfile";
import { UserProvider } from "./context/UserContext";
import UpdateUser from "./components/UpdateUser";

export const Data1 = createContext();
export const Data2 = createContext();

function App() {
    const name = "Mustafa";
    const age = 25;
    return (
        <div>
            <UserProvider>
                <UserProfile />
                <UpdateUser />
            </UserProvider>
        </div>

        // 3:22:45 kaldik
    );
}

export default App;
