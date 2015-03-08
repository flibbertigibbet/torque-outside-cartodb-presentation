module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        clean: {
            dist: {
                dot: true,
                src: ['!css/**', 'css/*', '!*/syntax.css', 'js/*', 'img/*']
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
            }
        },
        uglify: {
            dist: {
              files: {
                'js/impress.min.js': ['bower_components/impress.js/js/impress.js'],
                'js/video-fallback.min.js': ['_js/video-fallback.js']
              }
            }
        },
        modernizr: {
            dist: {
                'devFile' : 'remote',
                'outputFile' : 'js/modernizr-custom.js',

                'extra' : {
                    'shiv' : true,
                    'printshiv' : false,
                    'load' : true,
                    'mq' : false,
                    'cssclasses' : true
                },

                'extensibility' : {
                    'addtest' : false,
                    'prefixed' : false,
                    'teststyles' : false,
                    'testprop' : false,
                    'testallprops' : false,
                    'hasevents' : false,
                    'prefixes' : false,
                    'domprefixes' : false,
                    'cssclassprefix': ''
                },
                'uglify' : true,
                // Define any tests you want to implicitly include.
                'tests' : ['video'],
                // By default, this task will crawl your project for references to Modernizr tests.
                // Set to false to disable.
                'parseFiles' : false,

                // When parseFiles = true, this task will crawl all *.js, *.css, *.scss and *.sass files,
                // except files that are in node_modules/.
                // You can override this by defining a 'files' array below.
                // 'files' : {
                    // 'src': []
                // },
            }
        }
    });
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-newer');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-modernizr');
    grunt.registerTask('default', ['clean:dist', 'compass', 'modernizr:dist', 'uglify', 'imagemin']);
    grunt.registerTask('update', ['newer:compass', 'newer:modernizr:dist', 'newer:uglify', 'newer:imagemin']);
};
