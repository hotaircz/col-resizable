"use strict";

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    terser: {
      dist: {
          files: [
                {
                    src: ["col-resizable.js"],
                    dest: "col-resizable.min.js"
                }
          ]
      },
    }
  });

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks("grunt-terser");

  // Default task.
  grunt.registerTask("default", ["terser"]);

};
