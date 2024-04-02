import React from "react";

const NewsBox = ({ image, title, content }) => {
    return (
        <div className="w-full cursor-pointer">
            <div className="w-full hover:scale-110 duration-150">
                <img
                    src={require("./NewContent/" + image)}
                    alt="ok"
                    className="w-full"
                />
            </div>
            <p className="w-full text-left text-xl font-semibold mt-5 truncate">{title}</p>
        </div>

    );
}

export default NewsBox;