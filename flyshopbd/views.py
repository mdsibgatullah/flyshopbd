from django.shortcuts import render
from django.views.generic.base import TemplateView
# Create your views here.

class Home(TemplateView):
    template_name = 'flyshopbd/home.html'

class Contact(TemplateView):
    template_name = 'flyshopbd/contact.html'

class Login(TemplateView):
    template_name = 'flyshopbd/login.html'

class SingUp(TemplateView):
    template_name = 'flyshopbd/singUp.html'

class Policy(TemplateView):
    template_name = 'flyshopbd/policy.html'

class Profile(TemplateView):
    template_name = 'flyshopbd/profile.html'