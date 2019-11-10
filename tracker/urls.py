from django.urls import path
from tracker import views

urlpatterns = [
    path('', views.home_page, name="home_page"),
    path('contact/', views.contact_page, name="contact_page"),
    path('dashboard/', views.dashboard_page, name="dashboard_page"),
]