// Promises Part4 : step04
let wordnikAPI = "https://api.wordnik.com/v4/words.json/randomWord?&minLength=5&maxLength=-1&api_key=48dd829661f515d5abc0d03197a00582e888cc7da2484d5c7";
let giphyAPI = "https://api.giphy.com/v1/gifs/search?rating=PG&api_key=dc6zaTOxFJmzC&q=";

function setup() {
    noCanvas();
    wordGIF()
        .then(results => {
            createP(results.word);
            createImg(results.img);
        })
        .catch(err => console.error(err));
}
 
async function wordGIF() {
    let response1 = await fetch(wordnikAPI);
    let json1 = await response1.json();
    let response2 = await fetch(giphyAPI + json1.word);
    let json2 = await response2.json();
    let img_url = json2.data[0].images['fixed_height_small'].url;
    return {
        word: json1.word,
        img: img_url
    }
}
