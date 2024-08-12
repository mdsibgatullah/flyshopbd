let index = 0;
function next(){
    qsa('.slider li')[index].classList.remove('active');
    index = (index + 1) % qsa('.slider li').length;
    qsa('.slider li')[index].classList.add('active')
}
function prv(){
    qsa('.slider li')[index].classList.remove('active');
    index = (index - 1 + qsa('.slider li').length) % qsa('.slider li').length;
    qsa('.slider li')[index].classList.add('active')
}
setInterval(next,3000);

qs('.slider_area ul').addEventListener("mouseover", ()=> {
    
})