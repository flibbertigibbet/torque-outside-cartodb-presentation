module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        clean: {
            dist: {
                dot: true,
                src: ['!css/**', 'css/*', '!*/syntax.css', 'js/*', 'img/*']
            }
        },
        concat: {
            jquery: {
                files: {
                    'js/jquery.min.js': ['bower_components/jquery/jquery.min.js']
                }
            },
            jquerymap: {
                files: {
                    'js/jquery.min.map': ['bower_components/jquery/jquery.min.map']
                }
            }
        },
        compass: {                  // Task
            dist: {                   // Target
              options: {              // Target options
                config: 'config.rb',
                cssDir: 'css',
                sassDir: '_sass',
                environment: 'production'
              }
            }
        },
        imagemin: {
            dist: {
                files: [{
                    expand: true,
                    cwd: '_img',
                    src: ['*.{png,jpg,gif}'],
                    dest: 'img'
                }]
            }
        },
        watch: {
            css: {
                files: '**/*.scss',
                tasks: ['compass']
            },
            img: {
                files: '_img/**',
                tasks: ['imagemin']
            }
        },
        uglify: {
            dist: {
              files: {
                'js/impress.min.js': ['bower_components/impress.js/js/impress.js'],
                'js/video-fallback.min.js': ['_js/video-fallback.js']
              }
            }
        }
    });
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-newer');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.registerTask('concat-bower', ['concat:jquery', 'concat:jquerymap']);
    grunt.registerTask('default', ['clean:dist', 'compass', 'uglify', 'imagemin', 'concat-bower']);
    grunt.registerTask('update', ['newer:compass', 'newer:uglify', 'newer:imagemin',
                                  'newer:concat-bower']);
};
