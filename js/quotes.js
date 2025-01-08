const quotes = [
    {
        quote: "유명한 사람이 말한 명언01",
        author: "유명한 사람01"
    },
    {
        quote: "유명한 사람이 말한 명언02",
        author: "유명한 사람02"
    },
    {
        quote: "유명한 사람이 말한 명언03",
        author: "유명한 사람03"
    },
    {
        quote: "유명한 사람이 말한 명언04",
        author: "유명한 사람04"
    },
    {
        quote: "유명한 사람이 말한 명언05",
        author: "유명한 사람05"
    },
    {
        quote: "유명한 사람이 말한 명언06",
        author: "유명한 사람06"
    },
    {
        quote: "유명한 사람이 말한 명언07",
        author: "유명한 사람07"
    },
    {
        quote: "유명한 사람이 말한 명언08",
        author: "유명한 사람08"
    },
    {
        quote: "유명한 사람이 말한 명언09",
        author: "유명한 사람09"
    },
    {
        quote: "유명한 사람이 말한 명언10",
        author: "유명한 사람10"
    }
    ,
    {
        quote: "유명한 사람이 말한 명언11",
        author: "유명한 사람11"
    }
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;