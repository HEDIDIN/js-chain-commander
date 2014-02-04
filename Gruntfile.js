module.exports = function(grunt) {
  grunt.initConfig({
    'mocha_istanbul': {
      coverage: {
        src: 'test',
        options: {
          quiet: true
        }
      },
      coveralls: {
        src: 'test',
        options: {
          coverage: true,
          quiet: true
        }
      }
    }
  });

  grunt.event.on('coverage', function(data){
    process.env.NODE_COVERALLS_DEBUG = 1;
    
    var coveralls = require('coveralls');

    coveralls.handleInput(data, function(err){
      if (err) {
        throw err;
      }
    });
  });

  grunt.loadNpmTasks('grunt-mocha-istanbul');

  grunt.registerTask('coveralls', ['mocha_istanbul:coveralls']);
  grunt.registerTask('coverage', ['mocha_istanbul:coverage']);

};