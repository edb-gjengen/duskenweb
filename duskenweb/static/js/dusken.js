var Dusken = {
    options: {
        base_url: "http://duskendev.neuf.no/",
        api_base_url: "http://duskendev.neuf.no/api/v1/",
        access_token: "",
    },
    
    _auth_header: function() {
        /* http://django-tastypie.readthedocs.org/en/latest/authentication.html#apikeyauthentication */
        return {"Authorization": "Oauth"+ this.access_token };
    },

    init: function(options) {
        $.extend(true, this.options, options);
        return this;
    },
    authenticate: function(username, password, callback) {
        $.post(
            "/authenticate",
            {username: username, password: password},
            callback);
        return this;
    },
    register: function(data, success, error) {
        $.ajax({
            url: this.options.api_base_url + "member/register/",
            type: "POST",
            data: JSON.stringify(data),
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            // FIXME not secure
            headers: this._auth_header(),
            success: success,
            error: error
        });
        return this;
    },
    getMember: function(member_id, callback) {
        $.get(
            this.options.api_base_url + "member/" + member_id,
            null,
            callback);
        return this;
    },
    findMember: function(data, success, error) {
        // FIXME not secure
        // FIXME need to use signed requests via serverside, instead of using username:apikey
        $.ajax({
            url: this.options.api_base_url + "member/",
            type: "GET",
            data: data,
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            headers: this._auth_header(),
            success: success,
            error: error
        });
        return this;
    }
};
