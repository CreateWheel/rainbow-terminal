#! /usr/bin/env node

const rainbow = require('./rainbow')

const [string, ...argv] = process.argv.slice(2)

const options = {}

// Does not modify the original array
const last = argv.slice(-1)[0]
if (last === 'bg') {
  // Delete the last one of the original array
  argv.pop()
  options.bg = true
}

// eslint-disable-next-line
console.log(rainbow(argv)(string, options))
