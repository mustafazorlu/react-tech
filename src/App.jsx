// import { createContext, useReducer } from "react";
import "./App.css";
import Timer from "./components/Timer";
import { UserProvider } from "./context/UserContext";
// import UserProfile from "./components/UserProfile";
// import UpdateUser from "./components/UpdateUser";
// import Counter from "./components/Counter";
import { useRef } from "react";
import useFetch from "./hooks/useFetch";
import UniqueId from "./components/UniqueId";

const initialState = { count: 0 };

// const reducer = (state, action) => {
//     switch (action.type) {
//         case "increment":
//             return { ...state, count: state.count + 1 };
//         case "decrement":
//             return { ...state, count: state.count - 1 };
//         case "reset":
//             return { ...state, count: 0 };
//         default:
//             return state;
//     }
// };

function App() {
    // const [state, dispatch] = useReducer(reducer, initialState);

    // const inputElement = useRef();

    // const focusInput = () => {
    //     inputElement.current.focus();
    //     inputElement.current.value = "asddas";
    // };

    // const [data] = useFetch("https://jsonplaceholder.typicode.com/todos");

    return (
        <div>
            <UserProvider>
                {/* <UserProfile />
                <UpdateUser /> */}

                <UniqueId />

                {/* {data &&
                    data.map((item) => {
                        return <p key={item.id}>{item.title}</p>;
                    })} */}

                {/* <div 
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

                <Counter /> */}

                {/* <input type="text" ref={inputElement} />

                <button onClick={() => focusInput()}>
                    focus input element
                </button> */}
                {/* <Timer />
                
                */}
            </UserProvider>
        </div>

        // 3:22:45 kaldik
    );
}

export default App;
