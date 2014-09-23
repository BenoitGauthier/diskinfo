diskinfo
========

nodejs module to get disk information, will call system command to get drive info. 
Parse result and load info in array.  

usage
=====

    var d = require('diskinfo');

    d.getDrives(function(err, aDrives) {
  
          for (var i = 0; i < aDrives.length; i++) {
                console.log('Drive ' + aDrives[i].filesystem);
                console.log('blocks ' + aDrives[i].blocks);
                console.log('used ' + aDrives[i].used);
                console.log('available ' + aDrives[i].available);
                console.log('capacity ' + aDrives[i].capacity);
                console.log('mounted ' + aDrives[i].mounted);
                console.log('-----------------------------------------');
          }
  
    });
