import React, { useContext } from "react";
import { Link } from "react-router-dom";
import okimg from './NewContent/test/test.jpg'
import news from './news.json'
import NewsBox from "./NewBox";
import { AppContext } from "../../Context/AppContext";

const News = () => {
    const { setNewInfo } = useContext(AppContext)
    return (
        <div className="news-container flex flex-col items-center">
            <h1 className="mt-20 text-5xl font-black">TIN TỨC</h1>
            <div className="grid grid-cols-4 gap-10 w-11/12 mt-10">
                {news.map((value, index) =>
                    <Link key={index} className="noo-decoration" to={`/tin-tuc/${value.title}`} onClick={() => setNewInfo(value)}>
                        <NewsBox
                            image={value.image}
                            title={value.title}
                            content={value.content}
                        />
                    </Link>
                )}
            </div>
        </div>
    );
}

export default News;