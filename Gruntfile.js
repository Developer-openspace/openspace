module.exports=function(grunt){
    //project configuration
    grunt.initConfig({
        pkg: grunt.file.readJSON("package.json"),
        // uglify:{
        //     js:{
        //         files:[
        //             {
        //                 src:'dist/*.js',
        //                 dest:'build'
        //             },
        //             {
        //                 src:'dist/components/*.js',
        //                 dest:'build/components/'
        //             }
        //         ]
        //     }
        // },
        cssmin:{
            css:{
                files:[
                    {
                        src:'src/index.css',
                        dest:'dist/index.css'
                    }
                ]
            }
        },
        copy:{
            copyfiles:{
                files:[
                    {
                        src:"src/index.html",
                        dest:'dist/index.html'
                    }
                ]
            }
        }
    });

    //load plugins
    grunt.loadNpmTasks("grunt-contrib-uglify");
    grunt.loadNpmTasks("grunt-contrib-cssmin");
    grunt.loadNpmTasks("grunt-contrib-copy");

    //register
    grunt.registerTask("run",["cssmin:css","copy"]);
}