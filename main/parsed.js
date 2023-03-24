"use strict";

const fs = require ("fs")

const { extname } = require ('path')

const encoding = "utf-8"

const LINE_to_PATH = /(?:^|^)\s*(?:export\s+)?([\w.-]+)(?:\s*=\s*?|:\s+?)(\s*'(?:\\'|[^'])*'|\s*"(?:\\"|[^"])*"|\s*`(?:\\`|[^`])*`|[^#\r\n]+)?\s*(?:#.*)?(?:$|$)/mg

const parse = function (file_path) {
	
	if (file_path [0] !== "." && extname (file_path) !== '.parse') {
		file_path = "." + file_path
	}
	
	if (extname (file_path) == '.parse') {
		file_path = "./" + file_path
		.split (extname (file_path))
		.join (".parse")
	}
	
	const encode = fs
    .readFileSync (file_path, "utf-8")
    
    function intige (path_to_line) {
    	
     const object = {
     	// object parse
     }
  
  var lines = path_to_line
   .toString() // formate to string
  
  lines = lines.replaceAll ("(", "")
  .replaceAll (")", "")
  .replaceAll ("$", "") // delete $, ()
  
  lines = lines
  .replace (/\r\n?/mg, '\n')

  var match

  while ( // checker
   (match = LINE_to_PATH.exec (lines)
    ) != null) {
    	
    const join_key = match [1]
    
    var value = (match [2] || '')

    value = value
    .trim() // function trim ()

    const mquote = value[0]

    value = value
    .replace(/^(['"`])([\s\S]*)\1$/mg, '$2')

    if (mquote == '"') {
      value = value.replace(/\\n/g, '\n')
      .replace(/\\r/g, '\r')
    }
    
    object [join_key] = value // add object

  }

  return object
}
    /* Set parse in process */
    
    process.parse = intige (encode)
    process.intige = intige (encode)
    
    return intige (encode)
}

module.exports = parse
