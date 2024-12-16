let words = [];
let button = document.querySelector('._2NNqw');

function UpdateWords(){
let liItems = document.querySelectorAll('._2g-qq');

liItems.forEach((item, element)=>{

    if(words[element]==null){
        words[element]=item.textContent;
    }

});

//copy(words);

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