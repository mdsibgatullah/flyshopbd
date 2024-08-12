function openProfileEdit(){
    qs('.profileText_area').classList.add('active');
}
function closeProfileEdit(){
    qs('.profileText_area').classList.remove('active');
}



qsa('.profile_menu ul li').forEach(btn => {
    btn.addEventListener('click', ()=>{
        qsa('.profile_menu ul li').forEach(btns => btns.classList.remove('active'));
        btn.classList.add('active');
    });
});

function commonProfile(user1,user2){
    user1.addEventListener('click',()=>{
        profileSection();
        user2.style.display = 'block';
    });
};
commonProfile(qs('.pMenu_Profile'),qs('#userProfile'));
commonProfile(qs('.pMenu_Address'),qs('#userAddress'));
commonProfile(qs('.pMenu_Order'),qs('#userOrder'));
// commonProfile(qs('.pMenu_Track'),qs('#userTrack'));
commonProfile(qs('.pMenu_Favourite'),qs('#userFavourite'));
commonProfile(qs('.pMenu_Review'),qs('#userReview'));


function profileSection(){
    qsa('.user_profile section').forEach(btn => {
        btn.style.display = 'none';
    });
}
profileSection();
qs('#userProfile').style.display = 'block';

qs('.show_catagory').addEventListener('click', ()=>{
    qs('.view_menu').classList.add('active');
    qs('.overlay').style.display = 'block';
    qs('.overlay').style.height = 'calc(100% - 55px)';
});


qs('.overlay').addEventListener('click', ()=> {
    qs('.overlay').style.display = 'none';
    qs('.view_menu').classList.remove('active');
});