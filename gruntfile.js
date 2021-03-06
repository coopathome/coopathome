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
                    'css/autoprefixed.css': 'css/global.css'
                }
            }
        },
        imagemin: {
            dynamic: {
            	options: {
            		progressive: true
            	},
                files: [{
                    expand: true,
                    cwd: 'img/',
                    src: ['**/*.{png,jpg,gif,jpeg,svg}'],
                    dest: 'build/img/',
                }],
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
		        removeCommentsFromCDATA: true,
		        collapseWhitespace: true,
		        minifyJS: true,
		        minifyCSS: true,
//		        ignoreCustomComments: true
		      },
		      files: {                                   // Dictionary of files
		        'build/403.html': '403.html',
	            'build/404.html': '404.html',
	            'build/about.html': 'about.html',
	            'build/appliances.html': 'appliances.html',
	            'build/av.html': 'av.html',
	            'build/blackfriday.html': 'blackfriday.html',
	            'build/computers.html': 'computers.html',
	            'build/consult.html': 'consult.html',
	            'build/contact.html': 'contact.html',
			    'build/delivery.html': 'delivery.html',
	            'build/design.html': 'design.html',
	            'build/ehf.html': 'ehf.html',
	            'build/index.html': 'index.html',     // 'destination': 'source'
			    'build/living.html': 'living.html',
	            'build/photography.html': 'photography.html',
	            'build/returns.html': 'returns.html',
	            'build/repair.html': 'repair.html',
	            'build/sdnet/index.html': 'sdnet/index.html',
			    'build/sdnet.html': 'sdnet.html',
			    'build/financing.html': 'financing.html',
	            'build/specials.html': 'specials.html',
	            'build/help/index.html': 'help/index.html',
	            'build/boxingweeksale.html': 'boxingweeksale.html',
	            'build/signup.html': 'signup.html',
		      }
//		      files: [{
//                  expand: true,
//                  cwd: '',
//                  src: '{,*/}*.html',
//                  dest: 'build/'
//              }]
		    },

		  },
		  sass: {                              // Task
		      dist: {                            // Target
		        options: {                       // Target options
		          style: 'expanded'
		        },
		        files: {                         // Dictionary of files
		          'css/global.css': 'scss/global.scss',       // 'destination': 'source'
		        }
		      }
		    },
		    
		  cssmin: {
		    minify: {
		      expand: true,
		      cwd: 'css/',
		      src: ['*.css', '!*.min.css'],
		      dest: 'build/css/',
		      ext: '.min.css'
		    }
		  },
		  svgmin: {
		          options: {
		              plugins: [
		                  {
		                      removeViewBox: false
		                  },
		              ]
		          },
		          dist: {
		              files: {
		                  'img/logo.svg': 'build/img/logo.svg',
		                  'img/banner/slider20.svg': 'build/img/banner/slider20.svg'
		              }
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
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-svgmin');

    // 4. Where we tell Grunt what to do when we type "grunt" into the terminal.
    grunt.registerTask('default', ['htmlmin', 'uglify', 'sass', 'autoprefixer', 'cssmin', 'imagemin', 'svgmin']);

};
