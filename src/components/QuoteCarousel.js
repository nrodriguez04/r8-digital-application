import React, { useState } from 'react';


//styles
import '../styles/_quote.scss'

const Quote = () => {

    const quotes = {
        0: {
            client: "-DaMuiLab",
            quote: "The service was excellent. Needless to say we are extremely satisfied with the results. We have tripled our business' growth in less than 6 months."
        },
        1: {
            client: "-Ohana Mortuary Sevices",
            quote: "I am really satisfied with R8 Digital. They really saves me time and effort. R8 Digital has given us exactly what our business has been lacking."
        },
        2: {
            client: "-JDMHiro",
            quote: "Search engine optimiziation is worth much more than I paid. I would be lost without the help of R8 Digital. Search engine optimiziation did exactly what you said it does. Our business has grown exponentially!"
        },
        3: {
            client: "-EState",
            quote: "I'm good to go. Absolutely wonderful! We have no regrets!"
        }
    }

    const [current, setCurrent] = useState(quotes[0]);

    const [setActive] = useState(0);

    const handleSetClick = event => {
        setCurrent(quotes[event.target.getAttribute("data-quote")])
        setActive(event.target.getAttribute("data-quote"))
    }


    return (
        <div className="main">
            <p>{current.quote}</p>
            <p>{current.client}</p>
            <div className="circles">
                {Object.keys(quotes).map(index => (
                    <span 
                    onClick={event => handleSetClick(event)}
                    data-quote={index}
                    key={index} />
                ))}
            </div>
        </div>
    );
};

export default Quote;