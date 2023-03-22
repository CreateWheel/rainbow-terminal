# rainbow-terminal

🌈 Beautiful rainbow terminal

![](./screenhots.png)

## Install

```bash
npm install rainbow-terminal --save
```

## Usage

```js
const rainbow = require('rainbow-terminal')

const RGB = ['red', 'green', 'blue']

// rainbow font
console.log(rainbow(RGB)('Hello world!'))

// rainbow background
console.log(rainbow(RGB)('Hello world!', { bg: true }))
```

Cli

```bash
# rainbow font
rainbow "Hello world!" red green blue

# rainbow background
rainbow "Hello world!" red green blue bg
```

> The usage is almost identical to [gradient-string](https://github.com/bokub/gradient-string), with the following differences

- `gradient-string` single-line string will clear all spaces in the string
- `gradient-string` does not support background colors
- `gradient-string` does not support solid colors, only gradients
- `gradient-string` did not export `chalk`
- `gradient-string` Multiline call required `multiline()`
