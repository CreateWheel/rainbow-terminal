export = initRainbow;
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
declare function initRainbow(...args: string[]): (string: any, options: any) => string;
declare namespace initRainbow {
    export { chalk };
    export { initRainbow as rainbow };
}
import chalk = require("chalk");
