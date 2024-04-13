import React, { useContext, useState, useEffect } from "react";
import text from './NewContent/test/text.txt'
import textimg from './NewContent/test/test.jpg'
import './news.css'
import { AppContext } from "../../Context/AppContext";

const NewsDisplay = () => {
    const { newInfo } = useContext(AppContext)
    const [content, setContent] = useState("")
    console.log(newInfo)
    fetch(require("" + newInfo.content))
        .then(r => r.text())
        .then(raw => {
            setContent(raw)
        });
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div className="w-full pl-10 text-left mt-10 pb-20">
            <h1 className="text-5xl font-black">{newInfo.title}</h1>
            <div dangerouslySetInnerHTML={{ __html: content }} className="post" />
            <img
                src={require("./NewContent/" + newInfo.image)}
                className="w-9/12"
            />
        </div>

    );
}

export default NewsDisplay;