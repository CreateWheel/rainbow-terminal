const chalk = require('chalk')
const tinygradient = require('tinygradient')

/**
 *
 * @param { string } string String to be colored
 * @param  { ...string } args The color parameter, or the gradient color if it is multiple color parameters
 * will be generated. If you need a gradient background, you can fill in the last parameter options { bg: true }
 * ```
 * const rainbow = require('rainbow-terminal')
 *
 * const RGB = ['red', 'green', 'blue']
 *
 * // rainbow font
 * console.log(rainbow(RGB)('Hello world!'))
 *
 * // rainbow background
 * console.log(rainbow(RGB)('Hello world!', { bg: true }))
 * ```
 * @returns
 */
function initRainbow(...args) {
  if (args.length < 1) throw new Error('Lack of color')
  if (args.length === 1 && Array.isArray(args[0])) args = args[0]
  if (args.length === 1) args.push(args[0])

  const grad = tinygradient.apply(this, args)
  return (string, options) => rainbow(string.toString(), grad, options || {})
}

/**
 * @param { string } string
 * @param { tinygradient.Instance } grad
 * @param { {bg:boolean} } options
 */
function rainbow(string, grad, options) {
  const strings = []
  const lines = string.split('\n')
  const lengths = [...lines.map((item) => item.length), grad.stops.length]
  const colors = grad.rgb(Math.max(...lengths))
  for (const line of lines) {
    const lineColors = colors.slice(0)
    let str = ''
    for (const l of line) {
      const color = lineColors.shift().toHex()
      str += (options.bg ? chalk.bgHex(color) : chalk.hex(color))(l)
    }
    strings.push(str)
  }
  return strings.join('\n')
}

initRainbow.chalk = chalk
initRainbow.rainbow = initRainbow
module.exports = initRainbow
