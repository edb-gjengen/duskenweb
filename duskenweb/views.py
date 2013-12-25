from django.shortcuts import render, redirect
from django.contrib.auth.decorators import login_required

from django.views import generic

from . import user_api_conn # Note: initialized in __init__.py

def home(request, template_name='index.html'):
    if request.user.is_authenticated():
        return redirect('profile')

    return render(request, template_name)

@login_required
def profile(request, template_name='profile.html'):
    return render(request, template_name)

@login_required
def members_list(request, template_name='members_index.html'):
    # TODO put these two lines somewhere else, on authenticate?
    if not user_api_conn.is_authenticated() and request.user.duskenaccesstoken:
        user_api_conn.set_access_token(request.user.duskenaccesstoken.access_token)

    members_list = user_api_conn.members.get_list()
    return render(request, template_name, locals())
