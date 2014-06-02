module.exports = function(grunt) {

    // 1. All configuration goes here 
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        concat: {   
            dist: {
                src: [
                    'js/*.js' // All JS in the libs folder
                ],
                dest: 'build/js/production.js',
            }
        },
//        uglify: {
//            build: {
//                src: 'build/js/production.js',
//                dest: 'build/js/production.min.js'
//            }
//        },
		uglify: {
		    my_target: {
		      files: [{
		          expand: true,
		          cwd: 'js',
		          src: '**/*.js',
		          dest: 'build/js'
		      }]
		    }
		  },
        autoprefixer: {
                    dist: {
                        files: {
                            'build/css/style.css': 'css/style.css'
                        }
                    }
                },
        imagemin: {
            dynamic: {
                files: [{
                    expand: true,
                    cwd: 'img/',
                    src: ['**/*.{png,jpg,gif}'],
                    dest: 'build/img/'
                }]
            }
        },
//        cssmin: {
//          minify: {
//            expand: true,
//            cwd: 'release/css/',
//            src: ['*.css', '!*.min.css'],
//            dest: 'release/css/',
//            ext: '.min.css'
//          }
//        },
		  htmlmin: {                                     // Task
		    dist: {                                      // Target
		      options: {                                 // Target options
		        removeComments: true,
		        collapseWhitespace: true,
		        minifyJS: true,
		        minifyCSS: true
		      },
		      files: {                                   // Dictionary of files
		        'build/index.html': 'index.html',     // 'destination': 'source'
		      }
		    },

		  },
		  cssmin: {
		    minify: {
		      expand: true,
		      cwd: 'css/',
		      src: ['*.css', '!*.min.css'],
		      dest: 'build/css/',
		      ext: '.min.css'
		    }
		  }

    });

    // 3. Where we tell Grunt we plan to use this plug-in.
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-autoprefixer');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.loadNpmTasks('grunt-contrib-cssmin');

    // 4. Where we tell Grunt what to do when we type "grunt" into the terminal.
    grunt.registerTask('default', ['htmlmin', 'uglify', 'autoprefixer', 'cssmin', 'imagemin']);

};