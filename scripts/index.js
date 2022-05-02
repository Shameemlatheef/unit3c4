// Ude Import export (MANDATORY)
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page
import navbar from "../navbar.js";

let nav=document.getElementById("navbar");
nav.innerHTML=navbar();;


let qo=document.getElementById("search_input");
 qo.addEventListener('change',cli);

// https://masai-mock-api.herokuapp.com/news?q={query}
async function cli(){
    try{
        let query=document.getElementById("search_input").value;
       let res =await fetch(`https://masai-mock-api.herokuapp.com/news?q=${query}`)
        let data=res.json();
        let mam=await data
        //console.log(mam.articles)
      localStorage.setItem("news",JSON.stringify(mam.articles));
      
      window.location.href="/search.html"

    }
    catch(err){
        console.log(err)
    }
   
}



async function datas(){
    let countrycode="in"
    let res=await fetch(`https://masai-mock-api.herokuapp.com/news/top-headlines?country=${countrycode}`);
    let mas= await res.json();
    let ful=await mas
   let fully=ful.articles
    console.log(fully)
    appendings(fully)

}
datas();
function appendings(fully){
    let j=document.getElementById("new");
    
    fully.forEach((ele)=>{
        let div=document.createElement("div");
        div.style.border="1px solid black"
        let p =document.createElement("p");
        p.innerText=ele.title;
       // p.innerText=title
        let contents=document.createElement("h3");
        contents.innerText=ele.content
        //contents.innerText=content
        console.log(contents)
        let img=document.createElement("img");
        img.src=ele.urlToImage;
        img.style.height="100px"
        div.append(p,contents,img);
        j.append(div)
    })
}




let but1=document.getElementById("in");
but1.addEventListener("click",but);
but1.value=1;
function but(){
    console.log(but1.value)
}