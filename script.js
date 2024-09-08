
const quote=document.getElementById('quote')


const author=document.getElementById('author')




async function getquote(url) {
   
   
   
   try{ const response=await fetch('https://dummyjson.com/quotes/random');
    const data= await response.json();
    quote.innerHTML=data.quote
    author.innerHTML=data.author
   }

   catch{
    console.log("error")
   }
}

getquote()

const random= document.getElementById('random');
random.addEventListener('click',getquote )
