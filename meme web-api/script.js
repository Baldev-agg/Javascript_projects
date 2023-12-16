const getMemeBtn = document.querySelector(".container #get-meme-btn");

const memeImage = document.querySelector(".container img");
const memeTitle = document.querySelector(".container .meme-title");
const memeAuthor = document.querySelector(".container .meme-author");

const updateDetails= (url, title, author)=>{
  memeImage.setAttribute("src", url);
  memeTitle.innerHTML=title;
  memeAuthor.innerHTML=`meme by: ${author}`;
}

// const generateMeme= ()=>{
//   fetch("https://meme-api.com/gimme/wholesomememes")
//   .then((response)=>response.json())
//   .then((data)=>{
//     updateDetails(data.url,data.title,data.author);
//   });
// };

const getmeme = async()=>
{
  var url= "https://meme-api.com/gimme/wholesomememes";
  // try{
  //   const response= await fetch(url);
  //   const meme = await response.json();
  //   updateDetails(meme.url, meme.title,meme.author)
  // }catch(error){
  //   console.error("error",error);
  // }
const response = await fetch(url);
const meme = await response.json();
updateDetails(meme.url,meme.title,meme.author)
  
};

// getMemeBtn.addEventListener("click", generateMeme);
getMemeBtn.addEventListener("click",getmeme);