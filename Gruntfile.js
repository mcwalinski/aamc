/* 
 Grunt installation:
-------------------
npm install grunt -g 

To Watch Files: 
---------------
grunt watch
*/

module.exports = function (grunt) {
    grunt.initConfig({
        //Storing package file so we can reference its specific data whenever necessary
        pkg: grunt.file.readJSON('package.json'),
        
        concat: {
            css:{
                
                files:[
                    //concat css
                    {src:['public/stylesheets/dashboard.css','public/stylesheets/style.css'],dest:'public/stylesheets/style.combo.css'},
                    ]                                                   
                }
            },
        cssmin:{
           css:{

              files:[
            //minify  css
            {src:'public/stylesheets/style.combo.css', dest:'public/stylesheets/style.min.css'}
            ]                                           
        }
        },
        ngAnnotate:{
            js:{
            files:[
                {
                    src:[
                        //profile
                        'public/javascripts/controller/contollers.js',
                        'public/javascripts/factories/userServices.js',
                        'public/javascripts/filters/filter.js'
                    ],
                    dest:'public/javascripts/app.annotated.js'
                }
            ]
        }
        },
        uglify: {  
            options:{
                // beautify: true,
                // mangle: false,
                sourceMap: true
            },        
            js:{

              files:[     
                      {
                        src:[
                            'public/javascripts/resources/jquery/jquery.min.js',
                            'public/javascripts/resources/angular/angular.js',
                            'public/javascripts/resources/angular-filter/dist/angular-filter.min.js',
                            'public/javascripts/resources/bootstrap/dist/js/bootstrap.min.js',
                            'public/javascripts/resources/angular-resource/angular-resource.min.js'
                        ],
                        dest:'public/javascripts/vendor.min.js'
                      },

                      {src:'public/javascripts/app.annotated.js', dest:'public/javascripts/app.min.js'},
                   
                    ]
                }
            },
            retire: {
              js: ['public/javascripts/*.js'], /** Which js-files to scan. **/
              node: ['/'] /** Which node directories to scan (containing package.json). **/
            },
             watch:{
               files:['public/stylesheets/*','public/javascripts/controllers/*','public/javascripts/directives/*','public/javascripts/factories/*','public/javascripts/filters/*','public/javascripts/resources/*','public/javascripts/vendor/*'],
               tasks:['concat', 'cssmin', 'ngAnnotate','uglify', 'retire']
            }
            
       });

      // Load the plugins
      grunt.loadNpmTasks('grunt-contrib-watch');
      grunt.loadNpmTasks('grunt-ng-annotate');
      grunt.loadNpmTasks('grunt-contrib-uglify');
      grunt.loadNpmTasks('grunt-contrib-concat');
      grunt.loadNpmTasks('grunt-contrib-cssmin');
      grunt.loadNpmTasks('grunt-contrib-copy');
      grunt.loadNpmTasks('grunt-retire');

      // Default task(s).    
      grunt.registerTask('default', ['concat', 'cssmin','ngAnnotate','uglify', 'retire']);

    };