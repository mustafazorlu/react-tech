import { useId } from "react";

const UniqueId = () => {
    const id = useId();
    const id2 = useId();

    return (
        <div>
            <label htmlFor={`${id}`}>Email</label>
            <input type="text" id={`${id}`} />

            <label htmlFor={`${id2}`}>Password</label>
            <input type="text" id={`${id2}`} />
        </div>
    );
};

export default UniqueId;
