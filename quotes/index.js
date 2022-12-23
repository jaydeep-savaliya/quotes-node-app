        const quotes = document.getElementById("quotes");
        const author = document.getElementById("author");
        const newQuotes = document.getElementById("newQuotes");
        const twitme = document.getElementById("twitme");
        let realdata = " ";
        let quotesdata=" ";
        const tweetnow = ()=>{
            let tweetpost = `https://twitter.com/intent/tweet?text=${quotesdata.text}`;
            window.open(tweetpost);
        }
       const getNewquotes = ()=>{
        let rnum = Math.floor(Math.random()*100);
        quotesdata = realdata[rnum];
        quotes.innerHTML = ` ${quotesdata.text}`;
        quotesdata.author ==null
            ? (author.innerHTML = "unKnown")
            : (author.innerHTML = quotesdata.author)
       }; 
        const getQuotes = async()=>{
            const api = "https://type.fit/api/quotes";
            try {
                let data = await fetch(api);
                realdata = await data.json();
                getNewquotes();
            } catch (error) {}
        };
        twitme.addEventListener("click",tweetnow);
        newQuotes.addEventListener("click", getNewquotes);
        getQuotes();