module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        compass: {                  // Task
            dist: {                   // Target
              options: {              // Target options
                sassDir: '_sass',
                cssDir: 'css',
                environment: 'production'
              }
            },
            dev: {                    // Another target
              options: {
                sassDir: '_sass',
                cssDir: 'css'
              }
            }
        },
        watch: {
            css: {
                files: '**/*.scss',
                tasks: ['compass']
            }
        },
        uglify: {
            my_target: {
              files: {
                'js/impress.min.js': ['bower_components/impress.js/js/impress.js']
              }
            }
        }
    });
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.registerTask('default', ['compass', 'uglify']);
};
