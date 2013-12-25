# Installation

    sudo apt-get install python-virtualenv python-dev
    virtualenv --distribute venv
    . venv/bin/activate
    pip install -r requirements.txt
    cd duskenweb
    cp settings-sample.py settings.py
    cd ..
    ./manage.py syncdb --all
    ./manage.py runserver

    npm install
    grunt watch

# TODO

* Purchase membership-flow
* https
* cookies: secure, httpOnly

## Client: 

* Rewrite client side code in Backbone.js
    * Start here: https://github.com/backbone-boilerplate/backbone-boilerplate
    * Backbone Extensions:
        * https://github.com/amccloud/backbone-tastypie
        * https://github.com/marionettejs
        * https://github.com/tbranyen/backbone.layoutmanager
        * https://github.com/PaulUithol/Backbone-relational
        * https://github.com/jeromegn/Backbone.localStorage
        * http://wyuenho.github.io/backgrid/
    * Chrome Browser Extension: https://chrome.google.com/webstore/detail/backbone-debugger/bhljhndlimiafopmmhjlgfpnnchjjbhd
* Inline validation


# References:

* Backbone tutorial: http://www.codebeerstartups.com/2012/12/12-listening-to-dom-events-in-backbone-js-learning-backbone-js/
