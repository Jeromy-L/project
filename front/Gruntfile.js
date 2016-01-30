module.exports = function(grunt) {

  // 配置Grunt各种模块的参数
  grunt.initConfig({
    cssmin: {
      minify: {
        expand: true,
        cwd: 'src/style/',
        src: ['*.css', '!*.min.css'],
        dest: 'dist/style',
        ext: '.css'
      },
    },

    jshint: {
      options: {
        eqeqeq: true,
        trailing: true
      },
      files: ['Gruntfile.js', 'src/**/*.js']
    },
  
    htmlhint: {
      build: {
        options: {
            'tag-pair': true,
            'tagname-lowercase': true,
            'attr-lowercase': true,
            'attr-value-double-quotes': true,
            'spec-char-escape': true,
            'id-unique': true,
            'head-script-disabled': true,
        },
        src: ['src/**/*.html']
      },
   },

    uglify: {
      target : {
        expand: true,
        cwd: 'src/script',
        src : '*.js',
        dest : 'dist/script',
        ext: '.js'
      },
    },

    htmlmin: {                                     
      dist: {                                      
        options: {                                 
          removeComments: true,
          collapseWhitespace: true
        },
        files: {                                   
        //unfinished!!!!
        }
      },
    },
  });

  // 从node_modules目录加载模块文件
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-htmlmin');
  grunt.loadNpmTasks('grunt-htmlhint');

  // 每行registerTask定义一个任务
  grunt.registerTask('dist', ['jshint', 'htmlhint', 'cssmin', 'uglify', 'htmlmin']);
  grunt.registerTask('default', ['jshint', 'htmlhint']);

};