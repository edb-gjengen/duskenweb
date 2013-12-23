from django.shortcuts import render, redirect
from django.contrib.auth.decorators import login_required

# Create your views here.
def home(request):
    if request.user.is_authenticated():
        return redirect('profile')

    return render(request, 'index.html')

@login_required
def profile(request):
    return render(request, 'profile.html')
