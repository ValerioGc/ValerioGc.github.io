const { createApp } = Vue



createApp({
    data() {
        return {
            prj_db: [
                {
                    "name": "Boolflix",
                    "prev": "./previews/boolflix.png",
                    "live": "./projects/vue-boolflix/index.html",
                    "link": "https://github.com/ValerioGc/vue-boolflix"
                },
                {
                    "name": "Boolzapp",
                    "prev": "./previews/boolzapp.png",
                    "live": "./projects/vue-boolzapp/index.html",
                    "link": "https://github.com/ValerioGc/vue-boolzapp"
                },
                {
                    "name": "Playstation",
                    "prev": "./previews/ps.png",
                    "live": "./projects/htmlcss-playstation/index.html",
                    "link": "https://github.com/ValerioGc/htmlcss-playstation"
                },
                {
                    "name": "MaxCoach",
                    "prev": "./previews/mc1.png",
                    "live": "./projects/max-coach/index.html",
                    "link": "https://github.com/ValerioGc/proj-html-vuejs"
                },
                {
                    "name": "Php ajax dischi",
                    "prev": "./previews/php-ajax.png",
                    "live": "./projects/php-ajax-dischi/client_side/index.html",
                    "link": "https://github.com/ValerioGc/php-ajax-dischi"
                },
                {
                    "name": "Spotify web",
                    "prev": "./previews/spot.png",
                    "live": "./projects/html-css-spotifyweb/index.html",
                    "link": "https://github.com/ValerioGc/html-css-spotifyweb"
                },
                {
                    "name": "Google-faq",
                    "prev": "./previews/google-faq.png",
                    "live": "./projects/google-faq/index.html",
                    "link": "https://github.com/ValerioGc/google-faq"
                },
                {
                    "name": "Portfolio",
                    "prev": "./pl.svg",
                    "live": "https://valeriogc.github.io/vue-boolflix",
                    "link": "https://valeriogc.github.io/vue-boolzapp"
                },
                {
                    "name": "DC comics",
                    "prev": "./pl.svg",
                    "live": "./projects/dc-comics/index.html",
                    "link": "https://github.com/ValerioGc/"
                }
            ]
        }
        
    },
    methods: {

    }
}).mount('#app')

