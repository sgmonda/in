var stdin = process.openStdin();

// Parse command line arguments
module.exports.opts = (function(argv){
    
    // Options map
    var opts = {};
    
    // Arguments parsing
    
    //argv[0] == 'node' && argv.shift();
    argv.shift() && argv.shift();
    
    for(var i = 0, len = argv.length; i < len; i++){
        if(argv[i].charAt(0) == '-'){
            argv[i] = argv[i].replace(/-/g, '');
            opts[argv[i]] = true;
        }
    }

    
    console.log(argv);    
    console.log(opts);
    return opts;
    
})(process.argv);


// Reads from standard input
module.exports.readInput = function(callback){
    
    if(!callback) throw new Error('no callback provided to readInput() call');
    
    var inputdata = '';
    stdin.on('data', function(text){
        inputdata += String(text);
    });
    stdin.on('end', function(){
        callback && callback(null, inputdata);
    });

};