import React from "react";

export default function Nav() {
    function handleNavButtonClick(divId) {
        console.log(divId);
        const elementById = document.getElementById(divId);

        if (elementById) 
    {
        elementById.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
    else 
    {
window.scrollTo({
        top: 0,
        behavior: 'smooth',
        block: 'start'
      });
    }
}
    return (
        <nav className="hidden md:flex gap-4 text-xl font-IBMPlex">
            <button type="button" className="hover:underline" onClick={handleNavButtonClick}>Start</button>
            <button type="button" className="hover:text-blue-600 font-IBMPlex" onClick={() => handleNavButtonClick('about')}>O nas</button>
            <button type="button" className="hover:text-blue-600 font-IBMPlex" onClick={() => handleNavButtonClick('contact')}>Kontakt</button>
          </nav>
    )
    
}