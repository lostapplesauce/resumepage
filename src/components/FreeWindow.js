import React, { useState } from "react";
import quotesList from "../quotes";
import '../stylesheets/FreeWindow.css'

export default function FreeWindow() {
  /**
    This will be changing to a different quote
    so declaring state to this is correct
    */
  const [currentQuote, setCurrentQuote] = React.useState(0) 
  const [allQuotes, setAllQuotes] = React.useState(quotesList);

    /**
    allQuotes contains the object array and this iterates using
    currentQuote object witihn the array
     */
    
  const nextQuote = () => {
      setCurrentQuote(currentQuote + 1)
  };
 
    /**
    17/9/ 22 got prevQuote() to work in going backwards
    It was a simple implementation. Below in the return
    I have currentQuote used as the array index
    which increases and decreases with currentQuote value
    */
    
  const prevQuote =() => {
    setCurrentQuote(currentQuote - 1);
  };

  return (
    <div className="FreeWindow--container">
      <h2 className="FreeWindow--title">Motivational Quotes</h2>

      <h3 className="FreeWindow--quotes">{allQuotes[currentQuote].quote}</h3>
      <h5 className="FreeWindow--author">- {allQuotes[currentQuote].author}</h5>
      {currentQuote > 0 && <button onClick={prevQuote} className="FreeWindow--prevBtn">
        Previous Quote
        </button>}
      <p>
        {allQuotes[currentQuote].id} / {quotesList.length}
      </p>
      {currentQuote < allQuotes.length - 1 && <button onClick={nextQuote} className="FreeWindow--nextBtn">
        Next Quote
      </button>}
    </div>
  );
}
