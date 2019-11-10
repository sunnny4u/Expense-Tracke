from django.shortcuts import render

# Create your views here.
def home_page(request):
    return  render(request, 'home.html')

def contact_page(request):
    return render(request, 'contact.html')

def dashboard_page(request):
    return render(request, 'dashboard.html')