module.exports = function(grunt) {
	
	var _ = require('lodash');
	var path = require('path');

	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks("grunt-bower-install-simple");

	grunt.registerTask('default', ['compile']);
	grunt.registerTask('test', ['jshint:all']);
	
	grunt.registerTask('compile', ['bower-install-simple','copy:dist']);

	grunt.initConfig({

		// build tokens
		labelBspCarousel: 'bsp-infinite-content',
		labelPluginLabel: 'plugin',
		buildDir: 'build',
		demoDir: 'demo',
		distDir: 'dist',
		srcDir: 'src',

		// task config
		"bower-install-simple": {
			options: {
				directory: "<%= buildDir %>"
			},
			dev: {
				production: true
			}
		},
		jshint: {
			all: ['Gruntfile.js', '<%= srcDir %>/**/*.js', '<%= demoDir %>/**/*.js']
  		},
		copy: {
			dist: {
				files: [
					{
						cwd: '<%= srcDir %>/',
						expand: true,
						src: ['**'],
						dest: '<%= distDir %>/'
					},
					{
						cwd: '<%= buildDir %>/waypoints/lib',
						expand: true,
						src: ['jquery.waypoints.js'],
						dest: '<%= distDir %>/waypoints/'
					},
					{
						cwd: '<%= buildDir %>/waypoints/lib/shortcuts',
						expand: true,
						src: ['infinite.js'],
						dest: '<%= distDir %>/waypoints/'
					},
					{
						cwd: '<%= buildDir %>/history.js/scripts/bundled-uncompressed/html5',
						expand: true,
						src: ['native.history.js'],
						dest: '<%= distDir %>/history.js/'
					}
				]
			}
		},
		clean: ['build','dist']
	});

};