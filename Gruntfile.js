/* 
* @Author: anchen
* @Date:   2016-12-09 20:17:41
* @Last Modified by:   anchen
* @Last Modified time: 2016-12-15 13:41:40
*/
//包装函数
module.exports = function(grunt){

    //任务配置，所有插件的配置信息
    grunt.initConfig({

        //获取 package.json的信息
        pkg:grunt.file.readJSON('package.json'),

        //uglify插件的配置信息
        uglify: {
          my_target: {
            files: [{
              expand: true,
              cwd: 'src',
              src: '**/*.js',
              dest: 'build'
            }]
          },
          options: {
          banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
        }
        },

        //cssmin 配置信息
        cssmin:{
          my_target: {
            files: [{
              expand: true,
              cwd: 'src',
              src: '**/*.css',
              dest: 'build'
            }]
          },
          options: {
          banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'

        }
        },

        //jshint插件的配置信息
        jshint:{
          build:['Gruntfile.js','src/*.js'],
          options:{
              jshintrc:'.jshintrc'
          }
        },

        //watch插件的配置信息
        watch:{
          files:['src/*.js','src/*.css'],
          tasks:['jshint','uglify'],
          options:{ spawn:false}
        }

    });

    //告诉grunt我们将使用插件
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch');

    //告诉grunt当我们在终端中输入grunt时需要做些什么（注意先后顺序）
    grunt.registerTask('default',['jshint','uglify','cssmin','watch']);
};
