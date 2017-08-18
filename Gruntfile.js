module.exports = function(grunt){
    
    [
        'grunt-cafe-mocha',
        'grunt-contrib-jshint',
        'grunt-exec'
    ].forEach((task) => grunt.loadNpmTasks(task));

    grunt.initConfig({
        cafemocha: {
            all: {
                src: 'qa/tests-*.js', 
                options: {
                    ui: 'tdd',
                    timeout: 10000
                },
            }
        },
        jshint: {
            app: ['server.js', 'public/js/**/*.js', 'lib/**/*.js'],
            qa: ['Gruntfile.js', 'public/qa/**/*.js', 'qa/**/*.js'],
            options: {
                'esversion': 6,
                "lastsemic": false
            }
        },
        exec: {
            linkchecker: {
            }
        }
    });

    grunt.registerTask('default', ['cafemocha', 'jshint']);
};