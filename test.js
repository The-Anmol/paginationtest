const pgnButtons = document.querySelectorAll(".pgn__num");
let articleTag = document.getElementsByTagName("article");
let totalArticleTag = articleTag.length ;
const maxPosts = 5 ; 

for (var i = 0 ; i <maxPosts ; i++) {
        articleTag[i].classList.add("show")
    }
    
for ( clickedButton of pgnButtons ) {
    clickedButton.addEventListener("click", function(e){
        let text = e.target.textContent ;
        if (clickedButton.clicked == true ) {
            for (var i = text*maxPosts-maxPosts ; i <text*maxPosts-1 ; i++) {
            articleTag[i].classList.add("show")
            }
        }
    })
}
function clicked(){
    let text = this.textContent ;
    for (var i = text*maxPosts-maxPosts ; i <text*maxPosts-1 ; i++) {
        articleTag[i].classList.add("show")
    }
}