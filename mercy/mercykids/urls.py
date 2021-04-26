from django.urls import path

from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('auth/register', views.register_user, name='register_user'),
    path('auth/verify', views.auth_verify_email, name='auth_verify_email'),
    path('auth/activate', views.auth_activate, name='auth_activate')
]
