import { createContext, useReducer } from "react";
import "./App.css";
import UserProfile from "./components/UserProfile";
import { UserProvider } from "./context/UserContext";
import UpdateUser from "./components/UpdateUser";
import Counter from "./components/Counter";

const initialState = { count: 0 };

const reducer = (state, action) => {
    switch (action.type) {
        case "increment":
            return { ...state, count: state.count + 1 };
        case "decrement":
            return { ...state, count: state.count - 1 };
        case "reset":
            return { ...state, count: 0 };
        default:
            return state;
    }
};

function App() {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <div>
            <UserProvider>
                {/* <UserProfile />
                <UpdateUser /> */}

                <div
                    className=""
                    style={{ fontSize: "80px", fontFamily: "Segoe UI" }}
                >
                    Count : {state.count}
                    <button onClick={() => dispatch({ type: "increment" })}>
                        +
                    </button>
                    <button onClick={() => dispatch({ type: "decrement" })}>
                        -
                    </button>
                    <button onClick={() => dispatch({ type: "reset" })}>
                        reset
                    </button>
                </div>

                <Counter />
            </UserProvider>
        </div>

        // 3:22:45 kaldik
    );
}

export default App;
