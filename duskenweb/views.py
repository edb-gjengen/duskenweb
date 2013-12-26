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
    # TODO put these two lines somewhere else, on authenticate?
    if not user_api_conn.is_authenticated() and request.user.duskenaccesstoken:
        user_api_conn.set_access_token(request.user.duskenaccesstoken.access_token)

    me = user_api_conn.members.me()['objects'][0]
    # TODO remove debug
    import pprint
    pprint.pprint(me)
    return render(request, template_name, locals())

@login_required
def account(request, template_name='account.html'):
    # TODO put these two lines somewhere else, on authenticate?
    if not user_api_conn.is_authenticated() and request.user.duskenaccesstoken:
        user_api_conn.set_access_token(request.user.duskenaccesstoken.access_token)

    me = user_api_conn.members.me()
    return render(request, template_name)

@login_required
def members_list(request, template_name='members_index.html'):
    # TODO put these two lines somewhere else, on authenticate?
    if not user_api_conn.is_authenticated() and request.user.duskenaccesstoken:
        user_api_conn.set_access_token(request.user.duskenaccesstoken.access_token)

    members_list = user_api_conn.members.get_list()
    return render(request, template_name, locals())

@login_required
def memberships_list(request, template_name='memberships_index.html'):
    # TODO put these two lines somewhere else, on authenticate?
    if not user_api_conn.is_authenticated() and request.user.duskenaccesstoken:
        user_api_conn.set_access_token(request.user.duskenaccesstoken.access_token)

    # group by year, active, not active
    # show graph
    memberships_list = user_api_conn.memberships.get_list()
    return render(request, template_name, locals())

@login_required
def membership_purchase(request, template_name='membership_purchase.html'):
    # TODO put these two lines somewhere else, on authenticate?
    if not user_api_conn.is_authenticated() and request.user.duskenaccesstoken:
        user_api_conn.set_access_token(request.user.duskenaccesstoken.access_token)

    return render(request, template_name, locals())
