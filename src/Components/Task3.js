import React, { useState } from "react";

const Task3 = ({ colors }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedColor, setSelectedColor] = useState(null);

    const toggleColorList = () => {
        setIsOpen(!isOpen);
    };

    const handleColorSelection = (color) => {
        setSelectedColor(color);
        setIsOpen(false);
    };

    return (
        <div className="m-5">
            <button
                className="btn text-white bg-primary"
                onClick={toggleColorList}
            >
                {" "}
                Pick a color{" "}
            </button>{" "}
            {isOpen && (
                <ul className="mt-5">
                    {" "}
                    {colors.map((color) => (
                        <li
                            key={color}
                            style={{
                                backgroundColor: color,
                                width: "30px",
                                height: "30px",
                                display: "inline-block",
                                marginRight: "5px",
                                cursor: "pointer",
                            }}
                            onClick={() => handleColorSelection(color)}
                        ></li>
                    ))}{" "}
                </ul>
            )}{" "}
            {selectedColor && (
                <h6 className="mt-2"> Selected Color: {selectedColor} </h6>
            )}{" "}
        </div>
    );
};

export default Task3;
