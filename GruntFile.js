export default function(grunt){
    //configuration
    grunt.initConfig({
        //options to plugins, reference to files
        uglify:{
            js:{
                src:['./js/app.js','./js/init.js','js/materialize.min.js'],
                dest:'build/js'
            }
        }
    });

    //load plugins
    grunt.loadNpmTasks('grunt-contrib-uglify');

    //registering
    grunt.registerTask('js', ['uglify:js']);
}