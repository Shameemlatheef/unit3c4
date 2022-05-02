// Ude Import export (MANDATORY)
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page
import navbar from "../navbar.js";

let nav=document.getElementById("navbar");
nav.innerHTML=navbar();


let news=JSON.parse(localStorage.getItem("news"));
let da=news.articles;
console.log(news)




    function appending(news){
        let con=document.getElementById("container");
        news.forEach((ele)=>{
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
        con.append(div)
    })
    }

appending(news);