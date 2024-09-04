//  ***********************************************************************
//  **********  /08-http-app/src/breakingbad/breakingbad-app.js  **********
//  ***********************************************************************



/**
 * -----  Function fetchQuote()  -----
 * @returns {Promise<Object>}  quote information
 */
const fetchQuote = async () => {

    const res = await fetch('https://api.breakingbadquotes.xyz/v1/quotes/10');
    console.log("res: ", res);

    const data = await res.json();
    console.log("\ndata: ", data);
    console.log("\ndata[0]: ", data[0]);

    return data[0];
}


/**  
 * -----  BreakingbadApp()  -----
 * @param {HTMLDivElement} element 
 */
export const BreakingbadApp = async (element) => {

    //console.log('Hola Mundo');
    //console.log(element);
    element.innerHTML = '<span> Loading... </span> <br> <br>';

    //  -----  Referencias a l HTML  -----
    const $quoteLabel = document.createElement('blockquote');
    const $authorLabel = document.createElement('h3');

    const $nextQuoteButton = document.createElement('button');
    $nextQuoteButton.innerText = 'Next Quote';
    $nextQuoteButton.classList.add('btnQuote');

    //  -----  Renderizado  -----
    const renderQuote = (data) => {
               
        setTimeout(() => {
            $quoteLabel.innerHTML += data.quote;
            $authorLabel.innerHTML += data.author;
            element.replaceChildren($quoteLabel, $authorLabel, $nextQuoteButton);
        }, 1000);
    }


    //  -----  click  -----
    $nextQuoteButton.addEventListener('click', async () => {

        element.innerHTML = '<span> Loading... </span> <br> <br>';
        const quote = await fetchQuote();
        renderQuote( quote);

    });

    fetchQuote()
        //.then( data => renderQuote(data))  -----  igual a la linea de abajo  -----
        .then(renderQuote)

}


