import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import './item_display.css'
import { AppContext } from '../../Context/AppContext';


const DisplaySide = ({ tag }) => {
    const { nikeSide, sportSide } = useContext(AppContext)
    const navigate = useNavigate()

    const linkSide = {
        fontWeight: 500,
        fontSize: 20,
    }


    function choseType(event) {
        const liText = event.currentTarget.querySelector('p').textContent
        const liBtn = event.currentTarget.querySelector('p');

        const allPElements = document.querySelectorAll('p');
        allPElements.forEach((p) => {
            p.style = {}; // Reset styles for all p elements
        });

        // Apply styles directly to the p element
        Object.assign(liBtn.style, linkSide);

        if (tag === 'Explore Nike') navigate(`/d/nikes/${liText}`)
        if (tag === 'sport') navigate(`/d/sport/${liText}`)
        if (tag === 'jordan') navigate(`/d/jordan/${liText}`)
    }
    return (
        <ul className="display-side">
            {tag === 'Explore Nike' && (
                <>
                    {nikeSide.map((value, index) => (
                        <li key={index} onClick={choseType}>
                            <p>{value}</p>
                        </li>
                    ))}
                </>
            )}

            {tag === 'sport' && (
                <>
                    {sportSide.map((value, index) => (
                        <li key={index} onClick={choseType}>
                            <p>{value}</p>
                        </li>
                    ))}
                </>
            )}

            {tag === 'jordan' && (
                <>
                    <li onClick={choseType}><p>Low Top</p></li>
                    <li onClick={choseType}><p>Mid Top</p></li>
                    <li onClick={choseType}><p>High Top</p></li>
                </>
            )}
        </ul>
    );
}

export default DisplaySide;