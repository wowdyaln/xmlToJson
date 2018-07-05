// dependency
const parser = require('xml2json')
const fromPath = require('./lib/path.js')
const fs = require('fs')
const path = require('path')

// path variables
fileName = path.basename(fromPath ,'.xml')
dirName = path.dirname(fromPath)
let toDir = dirName + '/JSON'

// read data from a xml file.
let xml = fs.readFileSync(fromPath, 'utf8')


// xml convert to json.
let json = parser.toJson(xml);

if (!fs.existsSync(toDir)) { // if a field named 'JSON' exists.
  fs.mkdirSync(toDir)
} else {
  // write json data to a new file.
  fs.writeFileSync(`${toDir}/${fileName}.json`, json, 'utf8')
  console.log(` 
  convert an xml file : ${dirName}/${fileName}.xml

  to a json file is done.

  here is the json file :
  ${toDir}/${fileName}.json
              `)
}
