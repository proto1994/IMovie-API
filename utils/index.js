const fs = require('fs');

const Utils = {
  walkFile: function(pathResolve, cb) {
    let files = fs.readdirSync( pathResolve );
    for (let [i, item] of files.entries()) {
      let content = fs.readFileSync( pathResolve + item, 'utf8' );
      cb && cb(content)
    }
  }
}


module.exports = Utils;
