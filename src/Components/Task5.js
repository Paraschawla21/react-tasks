import React, { useRef, useState } from "react";

function Task5() {
    const [date, setDate] = useState("");
    const [age, setAge] = useState(0);
    const dateInputRef = useRef(null);
    const handleChange = (e) => {
        e.preventDefault();
        setDate(e.target.value);
    };
    const calculateAge = () => {
        const currentDate = new Date();
        const selectedDate = new Date(date);

        if (isNaN(selectedDate)) {
            setAge("Invalid date");
        } else {
            const diffInMilliseconds = currentDate - selectedDate;
            const years = Math.floor(
                diffInMilliseconds / (1000 * 60 * 60 * 24 * 365)
            );
            setAge(`Your age is ${years} years`);
        }
    };
    return (
        <div className="container">
            <header
                className="App-header"
                style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <h1> Age Calculator </h1> <h5> Enter your date of birth </h5>{" "}
                <div
                    className="Age-Container"
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    <input
                        type="date"
                        onChange={handleChange}
                        ref={dateInputRef}
                    />{" "}
                    <br />
                    <button
                        className="btn bg-primary text-white"
                        onClick={() => calculateAge(date)}
                    >
                        {" "}
                        Calculate Age{" "}
                    </button>{" "}
                    {age === 0 ? (
                        <h3> Enter Date to calculate your age </h3>
                    ) : (
                        <h3>{age}</h3>
                    )}{" "}
                </div>{" "}
            </header>{" "}
        </div>
    );
}

export default Task5;
