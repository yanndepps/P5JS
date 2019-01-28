// Promises Part6 : step06
let wordnikAPI = "https://api.wordnik.com/v4/words.json/randomWord?&api_key=48dd829661f515d5abc0d03197a00582e888cc7da2484d5c7";
let giphyAPI = "https://api.giphy.com/v1/gifs/search?rating=PG&api_key=dc6zaTOxFJmzC&q=";

function setup() {
    noCanvas();
    let promises = [];

    for (let j = 0; j < 5; j++) {
        let rn = Math.floor(random(3, 8));
        promises.push(wordGIF(rn));
    }

    Promise.all(promises)
        .then(results => {
            for (let i = 0; i < results.length; i++) {
                createP(results[i].word);
                if(results[i].img !== null){
                    createImg(results[i].img);
                }
            }
        })
        .catch(err => console.error(err));
}
 
async function wordGIF(num) {
    let response1 = await fetch(wordnikAPI + `&minLength=${num}&maxLength=${num}`);
    let json1 = await response1.json();
    let response2 = await fetch(giphyAPI + json1.word);
    let json2 = await response2.json();
    let img_url = null;

    try{
        img_url = json2.data[0].images['fixed_height_small'].url;
    } catch(err) {
        console.log('no image found for ' + json1.word);
        console.log(err);
    }

    return {
        word: json1.word,
        img: img_url
    }
}
