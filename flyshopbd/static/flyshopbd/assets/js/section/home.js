// All product
qsa('.meta_text').forEach(element => {
    element.addEventListener('click', ()=>{
        qs('.product_area').classList.add('active');
        qs('.overlay').style.display = 'block';
    });
});

qs('.pdShow_dtl').addEventListener('click', ()=>{
    qs('.pdDtl_more').style.display = 'block';
});

qs('.close_pdDtl').addEventListener('click',()=>{
    qs('.product_area').classList.remove('active');
    qs('.overlay').style.display = 'none';
    qs('.pdDtl_more').style.display = 'none';
});

// sholw Catagory
qs('.show_catagory').addEventListener('click', ()=>{
    qs('.view_menu').classList.add('active');
    qs('.overlay').style.display = 'block';
    qs('.overlay').style.height = 'calc(100% - 55px)';
});


qs('.overlay').addEventListener('click', ()=> {
    qs('.product_area').classList.remove('active');
    qs('.product_area').classList.remove('active');
    qs('.view_menu').classList.remove('active');
    qs('.pdDtl_more').style.display = 'none';
    qs('.overlay').style.display = 'none';
});