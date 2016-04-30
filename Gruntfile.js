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
            {src:'public/stylesheets/style.combo.css', dest:'public/stylesheets/style.min.css'},
            ]                                           
        }
        },
        ngAnnotate:{
            js:{
            files:[
                {
                    src:[
                        //profile
                        'public/javascripts/applications/ProfileApp.js',
                        'public/javascripts/controllers/ProfileControllers.js',
                        'public/javascripts/directives/ProfileDirectives.js',

                        //sorting
                        'public/javascripts/factories/UuidFactories.js',
                        'public/javascripts/vendors/jquery-ui/jquery-ui.min.js',
                        'public/javascripts/vendors/sortable/sortable.js',

                        // Logging
                        'public/javascripts/factories/loggingServices.js',

                        //vendor resource
                        'public/javascripts/vendors/angular-img-edit/angular-imgEditor.js'
                    ],
                    dest:'public/javascripts/vendor.annotated.js'
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
                          'public/javascripts/vendors/es5-shim/2.3.0/es5-shim.min.js',
                          'public/javascripts/resources/jquery/jquery.min.js',
                          'public/javascripts/resources/bootstrap/dist/js/bootstrap.min.js',
                          'public/javascripts/resources/angular/angular.min.js',
                          'public/javascripts/resources/jcrop/js/jquery.Jcrop.min.js',
                          'public/javascripts/vendors/angular-ui/ui-bootstrap-tpls-0.12.0.min.js',
                          'public/javascripts/resources/angular-resource/angular-resource.js'
                        ],
                        dest:'public/javascripts/vendor.min.js'
                      }
                   
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