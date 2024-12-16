let words = [];
let spanishWords = [];
let englishWords = [];
let duoLingoWords = [];
let ankiWords = [];
let button = document.querySelector('._2NNqw');
let totalWords = document.querySelector('._2V_FI');
let totalWordsString = totalWords.textContent.replace('words', '');
let counter = 0;

 
let roundedValue = (Number(totalWordsString)%51) + ~~(Number(totalWordsString/51));



alert(roundedValue);


function UpdateWords(){
let liItems = document.querySelectorAll('._2g-qq');

liItems.forEach((item, element)=>{
    let spansihWord = item.querySelector('h3');
    let englishWord = item.querySelector('p');

    spanishWords[element] = spansihWord.textContent;
    englishWords[element] = englishWord.textContent;
    duoLingoWords[element] = spanishWords[element] + ';' + englishWords[element];
    ankiWords[element] = duoLingoWords[element].replace(/"/g, '');
    if(words[element]==null){
        words[element]=item.textContent;
    }

});



return words;


}


function getAllWords()
{


    UpdateWords();

    while(i < 3)//words[words.length-1] === 'Load more')
    {
        loadMore(i);
        i++;
    }

    return words;
}

async function loadMore(i){

    for(let i = 0; i < roundedValue; i++){

        //alert("im at round: "+i);
        button.click();
        counter ++;

        await pause(500);

    }
    /*
        //alert("im at round: "+i);
        button.click();
        window.scrollTo(0, document.body.scrollHeight);
        UpdateWords();

        await pause(200);

        button.click();
        window.scrollTo(0, document.body.scrollHeight);
        UpdateWords();

        await pause(200);

        button.click();
        window.scrollTo(0, document.body.scrollHeight);
        UpdateWords();

        await pause(200);

        button.click();
        window.scrollTo(0, document.body.scrollHeight);
        UpdateWords();

        await pause(200);

        button.click();
        window.scrollTo(0, document.body.scrollHeight);
        UpdateWords();

        await pause(200);

        button.click();
        window.scrollTo(0, document.body.scrollHeight);
        UpdateWords();

        await pause(200);

        button.click();
        window.scrollTo(0, document.body.scrollHeight);
        UpdateWords();

        await pause(200);

        button.click();
        window.scrollTo(0, document.body.scrollHeight);
        UpdateWords();

        await pause(200);

        button.click();
        window.scrollTo(0, document.body.scrollHeight);
        UpdateWords();

        await pause(200);

        button.click();
        window.scrollTo(0, document.body.scrollHeight);
        UpdateWords();

        await pause(200);

        button.click();
        window.scrollTo(0, document.body.scrollHeight);
        UpdateWords();


        await pause(200);

        button.click();
        window.scrollTo(0, document.body.scrollHeight);
        UpdateWords();

        await pause(200);

        button.click();
        window.scrollTo(0, document.body.scrollHeight);
        UpdateWords();

        await pause(200);

        button.click();
        window.scrollTo(0, document.body.scrollHeight);
        UpdateWords();


        await pause(200);

        copyWordsAsync();
        */

        window.scrollTo(0, document.body.scrollHeight);
        UpdateWords();
        
}


function pause(ms) {
return new Promise(resolve => setTimeout(resolve, ms));
}

async function copyWordsAsync() {
try {
  await copy(words);
  aleert('Words Copied successfully!');
} catch (err) {
  alert('Error Copying Words:', err);
}
}


loadMore();