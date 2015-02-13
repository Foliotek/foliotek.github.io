module.exports = function (grunt) {

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		connect: {
			dev: {
				options: {
					port: 8000,
					base: './'
				}
			}
		},

		clean: {
			all: ['dist','./*.html', './js', './css']
		},

		assemble: {
			options: {
				engine: 'swig',
				layout: false,
				partials: ['src/layouts/**/*.swig'],
				flatten: true,
				swig: {
					varControls: ["{%=", "%}"],
					cache: false
				},
			},
			dist: {
				files: {
					'./': ["src/pages/**/*.swig" ]
				}
			}
		},

		copy: {
			dist: {
				files: [
					{ expand: true, flatten: true, src: 'src/assets/static/js/**', dest: './js/', filter: 'isFile' },
					{ expand: true, flatten: true, src: 'src/assets/static/*.*', dest: './' }

				]
			},
			js: {
				files: [
					{ expand: true, cwd: 'src/assets/js', src:'**', dest: './js/', filter: 'isFile' }
				]
			},
			images: {
				files: [
					{ expand: true, cwd: 'src/assets/images', src: '**', dest: './images', filter: 'isFile' }
				]
			}
		},

		less: {
			development: {
				options: {
					paths: ['assets/css'],
					cleancss: true
				},
				files: {
					'./css/all.min.css': ['src/assets/css/main.less']
				}
			}
		},

		uglify: {
			dist: {
				files: {
					'./js/all.min.js': ['./js/all.min.js']
				}
			}
		},

		watch: {
			assets: {
				files: ['src/assets/**/*'],
				tasks: ['less']
			},
			src: {
				files: ['src/layouts/**/*', 'src/pages/**/*'],
				tasks: ['assemble']
			}
		}, 

		useminPrepare: {
			html: './**/*.html',
			options: {
				dest: './',
				root: 'src/assets'
			}
		},

		usemin: {
			html: ['./{,*/}*.html'],
			// css: ['dist/css/{,*/}*.css'],
			options: {
				dirs: ['./']
			}
		}
	});

	grunt.loadNpmTasks('grunt-usemin');
	grunt.loadNpmTasks('grunt-contrib-connect');
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('assemble');
	grunt.loadNpmTasks('grunt-newer');

	/* grunt tasks */
	grunt.registerTask('default', [
		'clean', 
		'copy', 
		'less', 
		'assemble', 
		'connect', 
		'watch']);


	grunt.registerTask('prod', [
		'clean', 
		'assemble', 
		'useminPrepare', 
		'concat:generated', 
		'uglify:generated', 
		'less', 
		'usemin',
		'connect::keepalive'
	]);
};