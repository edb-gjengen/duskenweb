import pydusken
from django.conf import settings

# Init DuskenAPI
system_api_conn = pydusken.DuskenApi(settings.DUSKEN_CLIENT_ID, settings.DUSKEN_CLIENT_SECRET)
if not system_api_conn.is_authenticated():
    system_api_conn.authenticate(settings.DUSKEN_USERNAME, settings.DUSKEN_PASSWORD)

user_api_conn = pydusken.DuskenApi(settings.DUSKEN_CLIENT_ID, settings.DUSKEN_CLIENT_SECRET)
