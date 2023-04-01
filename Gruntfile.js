module.exports=function(grunt){
    //project configuration
    grunt.initConfig({
        pkg: grunt.file.readJSON("package.json"),
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
                    },
                    {
                        src:"src/pages/Fallback.html",
                        dest:'dist/pages/Fallback.html'
                    },
                    {
                        src:"src/manifest.json",
                        dest:'dist/manifest.json'
                    },
                    {
                        src:"src/img",
                        dest:'dist/img'
                    },
                    {
                        src:"src/img/icons",
                        dest:'dist/img/icons'
                    }
                ]
            }
        }
    });

    //load plugins
    grunt.loadNpmTasks("grunt-contrib-cssmin");
    grunt.loadNpmTasks("grunt-contrib-copy");
    //register
    grunt.registerTask("run",["cssmin:css","copy"]);
}