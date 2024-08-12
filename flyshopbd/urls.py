from django.urls import path
from . import views

urlpatterns = [
    path('',views.Home.as_view(),name='home'),
    path('contact',views.Contact.as_view(),name='contact'),
    path('policy',views.Policy.as_view(),name='policy'),
    path('login',views.Login.as_view(),name='login'),
    path('singUp',views.SingUp.as_view(),name='singUp'),
    path('profile',views.Profile.as_view(),name='profile'),
]
