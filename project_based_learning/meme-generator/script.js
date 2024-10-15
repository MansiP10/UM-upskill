async function generateMeme(){
    const meme = await fetch("https://meme-api.com/gimme/wholesomememes");
    const data = await meme.json();
    let img = document.querySelector("#img");
    img.setAttribute("src",data.url);
    img.setAttribute('alt',data.title);
    img.style.display ="block";
}