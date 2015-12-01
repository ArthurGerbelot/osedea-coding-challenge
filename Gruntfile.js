'use strict';

var _   = require('underscore');

module.exports = function(grunt) {

  // load all grunt tasks automatically, but exclude grunt-cli because it is not a grunt task
  _( require('matchdep').filterAll('grunt-*') ).without('grunt-cli').forEach( grunt.loadNpmTasks );

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    // clean our public files
    clean: {
      build: ['public'],
      js: ['public/js'],
      css: ['public/css'],
      img: ['public/img']
    },

    copy: {
      css: {
        expand: true,
        cwd: 'assets/css',
        src: '**',
        dest: 'public/stylesheets'
      },
      img: {
        expand: true,
        cwd: 'assets/img',
        src: '**',
        dest: 'public/images'
      },
      vendors: {
        expand: true,
        cwd: 'assets/vendors',
        src: '**',
        dest: 'public/vendors'
      }
    },

    concurrent: {
      dev: {
        tasks: ['nodemon', 'watch'],
        options: {
          logConcurrentOutput: true
        }
      }
    },

    nodemon: {
      dev: {
        script: './bin/www'
      }
    },

    sass: {
      dist: {
        files: [{
          expand: true,
          cwd: 'assets/scss',
          src: ['*.scss'],
          dest: 'assets/css',
          ext: '.css'
        }]
      }
    },

    browserify: {
      vendor: {
        src: [],
        dest: 'public/javascripts/vendor-bundle.js',
        options: {
          require: ['react']
        }
      },
      react: {
        src: 'assets/js/app.js',
        dest: 'public/javascripts/react-bundle.js',
        options: {
          external: ['react'],
          transform: ['reactify']
        }
      },
    },

    watch: {
      scss: {
        files: ['assets/scss/*.scss'],
        tasks: ['clean:css', 'sass', 'copy:css']
      },
      options: {
        nospawn: true
      }
    }
  });


  grunt.registerTask('copy-assets', ['copy:css','copy:img', 'copy:vendors']);

  grunt.registerTask('build-common', ['clean:build', 'sass', 'copy-assets', 'browserify']);
  grunt.registerTask('build-dev', ['build-common']);

  grunt.registerTask('dev', ['build-dev', 'concurrent:dev']);
};