qsa('.profile_menu ul li').forEach(btn => {
    btn.addEventListener('click', ()=>{
        qsa('.profile_menu ul li').forEach(btns => btns.classList.remove('active'));
        btn.classList.add('active');
    });
});
function profileSection(){
    qsa('.user_profile section').forEach(section => {
        section.style.display = 'none';
    });
}

profileSection();
qs('#policyR').style.display = 'block';

function commonProfile(user1,user2){
    user1.addEventListener('click',()=>{
        profileSection();
        user2.style.display = 'block';
    });
};
commonProfile(qs('.policyR'),qs('#policyR'));
commonProfile(qs('.privacyR'),qs('#privacyR'));
commonProfile(qs('.tramsR'),qs('#tramsR'));

qs('.show_catagory').addEventListener('click', ()=>{
    qs('.view_menu').classList.add('active');
    qs('.overlay').style.display = 'block';
    qs('.overlay').style.height = 'calc(100% - 55px)';
});
qs('.overlay').addEventListener('click', ()=> {
    qs('.overlay').style.display = 'none';
    qs('.view_menu').classList.remove('active');
});
