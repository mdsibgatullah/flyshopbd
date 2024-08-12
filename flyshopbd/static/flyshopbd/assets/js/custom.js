const qs = (str) => document.querySelector(str);
const qsa = (str) => document.querySelectorAll(str);

function overlay(){
    qs('.add_product').classList.remove('active');
    qs('.c_address').classList.remove('active');
    qs('.overlay').style.display = 'none';
};