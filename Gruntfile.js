module.exports=function(grunt){
    //project configuration
    grunt.initConfig({
        pkg: grunt.file.readJSON("package.json"),
        cssmin:{
            css:{
                files:[
                    {
                        src:'src/output.css',
                        dest:'dist/output.css'
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
                        src:"src/img/anubis.jpg",
                        dest:'dist/img/anubis.jpg'
                    },
                    {
                        src:"src/img/comp.jpg",
                        dest:"dist/img/comp.jpg"
                    },
                    {
                        src:"src/img/comp2.jpg",
                        dest:"dist/img/comp2.jpg"
                    },
                    {
                        src:"src/img/desk_top.jpg",
                        dest:"dist/img/desk_top.jpg"
                    },
                    {
                        src:"src/img/mail.png",
                        dest:"dist/img/mail.png"
                    },
                    {
                        src:"src/img/medical.png",
                        dest:"dist/img/medical.png"
                    },
                    {
                        src:"src/img/server.jpg",
                        dest:"dist/img/server.jpg"
                    },
                    {
                        src:"src/img/type.jpeg",
                        dest:"dist/img/type.jpeg"
                    },
                    {
                        src:"src/img/icons/code-72x72.png",
                        dest:'dist/img/icons/code-72x72.png'
                    },
                    {
                        src:"src/img/icons/code-96x96.jpg",
                        dest:'dist/img/icons/code-96x96.jpg'
                    },
                    {
                        src:"src/img/icons/code-128x128.jpg",
                        dest:'dist/img/icons/code-128x128.jpg'
                    },
                    {
                        src:"src/img/icons/code-144x144.png",
                        dest:'dist/img/icons/code-144x144.png'
                    },
                    {
                        src:"src/img/icons/code-152x152.jpg",
                        dest:'dist/img/icons/code-152x152.jpg'
                    },
                    {
                        src:"src/img/icons/code-192x192.jpg",
                        dest:'dist/img/icons/code-192x192.jpg'
                    },
                    {
                        src:"src/img/icons/code-256x256.jpg",
                        dest:'dist/img/icons/code-256x256.jpg'
                    },
                    {
                        src:"src/img/icons/code-384x384.jpg",
                        dest:'dist/img/icons/code-384x384.jpg'
                    },
                    {
                        src:"src/img/icons/code-512x512.png",
                        dest:'dist/img/icons/code-512x512.png'
                    },
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