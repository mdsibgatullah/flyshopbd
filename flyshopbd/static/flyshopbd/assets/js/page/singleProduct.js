let x = qs('#demo_show img');
let y = qsa('#demo_imgs li');


y.forEach(list => {
    list.addEventListener('click',(e)=>{
        let a = e.srcElement.src;
        x.src = a;
    });
});
