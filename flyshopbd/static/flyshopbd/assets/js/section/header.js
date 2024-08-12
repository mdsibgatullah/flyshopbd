qs('.search_bar i').addEventListener('click' , () => {
    qs('.search').classList.toggle('active');
});

// Add card icon click and show added product 
qs('.card_add').addEventListener('click',()=>{
    qs('.add_product').classList.add('active');
    qs('.overlay').style.display = 'block';
});

qs('.close').addEventListener('click',()=>{
    qs('.add_product').classList.remove('active');
    qs('.c_address').classList.remove('active');
    qs('.overlay').style.display = 'none';
});


// Customer Address/Checkout Address
function cAddress(){
    qs('.c_address').classList.add('active');
};
qsa('.close_cAddress').forEach(clgBtn => {
    clgBtn.addEventListener('click', () => {
        qs('.c_address').classList.remove('active');
        qs('.checkout').classList.remove('active');
    });
});
function checkOut(){
    qs('.checkout').classList.add('active');
}

