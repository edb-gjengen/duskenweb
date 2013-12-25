from django.conf import settings
from django.conf.urls import patterns, include, url
from django.contrib.auth.forms import SetPasswordForm
from django.contrib import admin

from longerusername.forms import AuthenticationForm

admin.autodiscover()

urlpatterns = patterns('',
    url(r'^admin/', include(admin.site.urls)),
)
urlpatterns += patterns('duskenweb.views',
    url(r'^$', 'home', name='home'),
    url(r'^profile/$', 'profile', name='profile'),
    url(r'^members/$', 'members_list', name='members_list'),

)

# Authentication views
urlpatterns += patterns('django.contrib.auth.views',
    url(r'^login/$', 'login', {'authentication_form': AuthenticationForm}, name='login'),
    url(r'^logout/$', 'logout', name='logout'),
    url(r'^password/change/$', # skip entering old password
        'password_change',
        {'password_change_form': SetPasswordForm},
        name='password_change'), 
	url(r'^password/change/done/$', 'password_change_done', name='password_change_done'),
	url(r'^password/reset/$', 'password_reset', name='password_reset'),
	url(r'^password/reset/done$', 'password_reset_done', name='password_reset_done'),
    url(r'^password/reset/confirm/(?P<uidb36>[0-9A-Za-z]+)-(?P<token>.+)/$',
        'password_reset_confirm',
        name='password_reset_confirm'),
	url(r'^password/reset/complete/$', 'password_reset_complete', name='password_reset_complete'),
)
