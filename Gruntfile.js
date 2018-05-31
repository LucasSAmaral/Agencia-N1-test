module.exports = function(grunt) {

    "use strict"

    grunt.initConfig({

        connect: {
            server: {
                options: {
                    port: 9001,
                    hostname: "localhost",
                    livereload: true,
                    open: true
                }
            }
        },

        watch: {
            options: {
                livereload: true
            },
            concat: {
                files: "src/js/*.js",
                tasks: "concat"
            },
            js: {
                files: "build/js/VagaDev-042018.js",
                tasks: "uglify"
            },
            sass: {
                files: "**/*.scss",
                tasks: "sass"
            },
            html: {
                files: "**/*.html"
            },
            cssmin: {
                files: "build/css/*.css",
                tasks: "cssmin"
            }
        },

        concat: {
            options: {
                separator: '\n\n',
            },
            dist: {
                src: ['src/js/script.js', 'src/js/lightbox.js','src/js/vue-script.js'],
                dest: 'build/js/VagaDev-042018.js'
            }
        },

        sass: {
            dist: {
                files: {
                    "build/css/VagaDev-042018.css": "src/scss/style.scss"
                }
            }
        },

        uglify: {
            dist: {
                files: {
                    "build/js/min/VagaDev-042018.min.js": "build/js/VagaDev-042018.js"
                }
            }
        },

        cssmin: {
            dist: {
                files: {
                    "build/css/min/VagaDev-042018.min.css": "build/css/VagaDev-042018.css"
                }
            }
        }

    });

    grunt.loadNpmTasks("grunt-contrib-watch");
    grunt.loadNpmTasks("grunt-contrib-sass");
    grunt.loadNpmTasks("grunt-contrib-uglify");
    grunt.loadNpmTasks("grunt-contrib-connect");
    grunt.loadNpmTasks("grunt-contrib-cssmin");
    grunt.loadNpmTasks('grunt-contrib-concat');

    grunt.registerTask("dev", ["connect", "watch"]);

};