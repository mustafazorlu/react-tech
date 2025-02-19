import React, { useContext } from "react";
import { Data1, Data2 } from "../App";

const ComponentC = () => {
    const userName = useContext(Data1);
    const age = useContext(Data2);

    return (
        <div>
            <h1>
                My name is {userName} and I'm {age}{" "}
            </h1>

            {/*
            using with consumer
            <Data1.Consumer>
                {(name) => {
                    return (
                        <Data2.Consumer>
                            {(age) => {
                                return (
                                    <h1>
                                        My name is {name} and I'm {age} years
                                        old.{" "}
                                    </h1>
                                );
                            }}
                        </Data2.Consumer>
                    );
                }}
            </Data1.Consumer> */}
        </div>
    );
};

export default ComponentC;
