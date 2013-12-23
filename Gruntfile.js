module.exports = function(grunt) {
    // load all grunt tasks
    require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

    grunt.initConfig({
        duskenweb: {
            // potential config here
        },
        compass: {
            dev: {
                options: {
                    config: 'duskenweb/static/config.rb',
                    basePath: 'duskenweb/static/'
                }
            }
        },
        watch: {
            sass: {
                files: ['duskenweb/static/sass/*.scss'],
                tasks: ['compass:dev'],
            },
            livereload: {
                files: ['duskenweb/templates/**/*.html', 'duskenweb/static/**/*.css', 'duskenweb/static/**/*.js'],
                options: {
                    livereload: true
                }
            }
        }
    });

    grunt.registerTask('default', 'watch');
};
