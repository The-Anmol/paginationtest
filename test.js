let articleTag = document.getElementsByTagName("article");
let totalArticleTag = articleTag.length ;
console.log(totalArticleTag);


const pgnButtons = document.querySelectorAll(".pgn__num");
for ( clickedButton of pgnButtons ) {
    clickedButton.addEventListener("click", function(e){
        
        let text = e.target.textContent ;
        console.log(text);
        console.log(articleTag[text]);
        articleTag[text].classList.add("change");
    })
}