import { describe, expect, it } from 'vitest'

import rainbow from '../src/rainbow'

describe('Error Handling', () => {
  it('No parameters', () => {
    let error
    try {
      rainbow()
    } catch (e) {
      error = e.message
    }
    expect(error).eq('Lack of color')
  })

  it('Lack of color', () => {
    let error
    try {
      rainbow()('123')
    } catch (e) {
      error = e.message
    }
    expect(error).eq('Lack of color')
  })
})

describe('Tests hex color', () => {
  const RGB = ['#f00', '#0f0', '#00f']
  it('Single line text', () => {
    const result1 = rainbow(...RGB)(123)
    const result2 = rainbow(...RGB)('Hello World')
    const _ = '\x1B[38;2;255;0;0m1\x1B[39m\x1B[38;2;0;255;0m2\x1B[39m\x1B[38;2;0;0;255m3\x1B[39m'
    const __ =
      // eslint-disable-next-line max-len
      '\x1B[38;2;255;0;0mH\x1B[39m\x1B[38;2;204;51;0me\x1B[39m\x1B[38;2;153;102;0ml\x1B[39m\x1B[38;2;102;153;0ml\x1B[39m\x1B[38;2;51;204;0mo\x1B[39m\x1B[38;2;0;255;0m \x1B[39m\x1B[38;2;0;204;51mW\x1B[39m\x1B[38;2;0;153;102mo\x1B[39m\x1B[38;2;0;102;153mr\x1B[39m\x1B[38;2;0;51;204ml\x1B[39m\x1B[38;2;0;0;255md\x1B[39m'

    expect(result1).eq(_)
    expect(result2).eq(__)
  })
})

describe('Tests font color', () => {
  const RGB = ['red', 'green', 'blue']
  it('Single line text', () => {
    const result1 = rainbow(...RGB)(123)
    const result2 = rainbow(...RGB)('Hello World')
    const _ = '\x1B[38;2;255;0;0m1\x1B[39m\x1B[38;2;0;128;0m2\x1B[39m\x1B[38;2;0;0;255m3\x1B[39m'
    const __ =
      // eslint-disable-next-line max-len
      '\x1B[38;2;255;0;0mH\x1B[39m\x1B[38;2;204;26;0me\x1B[39m\x1B[38;2;153;51;0ml\x1B[39m\x1B[38;2;102;77;0ml\x1B[39m\x1B[38;2;51;102;0mo\x1B[39m\x1B[38;2;0;128;0m \x1B[39m\x1B[38;2;0;102;51mW\x1B[39m\x1B[38;2;0;77;102mo\x1B[39m\x1B[38;2;0;51;153mr\x1B[39m\x1B[38;2;0;26;204ml\x1B[39m\x1B[38;2;0;0;255md\x1B[39m'

    expect(result1).eq(_)
    expect(result2).eq(__)
  })

  it('multi line text', () => {
    const result1 = rainbow(...RGB)('Hello \n World')
    const result2 = rainbow(...RGB)('Hello \n\n\n World')
    const _ =
      // eslint-disable-next-line max-len
      '\x1B[38;2;255;0;0mH\x1B[39m\x1B[38;2;128;64;0me\x1B[39m\x1B[38;2;0;128;0ml\x1B[39m\x1B[38;2;0;85;85ml\x1B[39m\x1B[38;2;0;43;170mo\x1B[39m\x1B[38;2;0;0;255m \x1B[39m\n\x1B[38;2;255;0;0m \x1B[39m\x1B[38;2;128;64;0mW\x1B[39m\x1B[38;2;0;128;0mo\x1B[39m\x1B[38;2;0;85;85mr\x1B[39m\x1B[38;2;0;43;170ml\x1B[39m\x1B[38;2;0;0;255md\x1B[39m'
    const __ =
      // eslint-disable-next-line max-len
      '\x1B[38;2;255;0;0mH\x1B[39m\x1B[38;2;128;64;0me\x1B[39m\x1B[38;2;0;128;0ml\x1B[39m\x1B[38;2;0;85;85ml\x1B[39m\x1B[38;2;0;43;170mo\x1B[39m\x1B[38;2;0;0;255m \x1B[39m\n\n\n\x1B[38;2;255;0;0m \x1B[39m\x1B[38;2;128;64;0mW\x1B[39m\x1B[38;2;0;128;0mo\x1B[39m\x1B[38;2;0;85;85mr\x1B[39m\x1B[38;2;0;43;170ml\x1B[39m\x1B[38;2;0;0;255md\x1B[39m'

    expect(result1).eq(_)
    expect(result2).eq(__)
  })
})

describe('Tests background color', () => {
  const RGB = ['red', 'green', 'blue']
  const options = { bg: true }
  it('Single line text', () => {
    const result1 = rainbow(...RGB)(123, options)
    const result2 = rainbow(...RGB)('Hello World', options)
    const _ = '\x1B[48;2;255;0;0m1\x1B[49m\x1B[48;2;0;128;0m2\x1B[49m\x1B[48;2;0;0;255m3\x1B[49m'
    const __ =
      // eslint-disable-next-line max-len
      '\x1B[48;2;255;0;0mH\x1B[49m\x1B[48;2;204;26;0me\x1B[49m\x1B[48;2;153;51;0ml\x1B[49m\x1B[48;2;102;77;0ml\x1B[49m\x1B[48;2;51;102;0mo\x1B[49m\x1B[48;2;0;128;0m \x1B[49m\x1B[48;2;0;102;51mW\x1B[49m\x1B[48;2;0;77;102mo\x1B[49m\x1B[48;2;0;51;153mr\x1B[49m\x1B[48;2;0;26;204ml\x1B[49m\x1B[48;2;0;0;255md\x1B[49m'

    expect(result1).eq(_)
    expect(result2).eq(__)
  })

  it('multi line text', () => {
    const result1 = rainbow(...RGB)('Hello \n World', options)
    const result2 = rainbow(...RGB)('Hello \n\n\n World', options)
    const _ =
      // eslint-disable-next-line max-len
      '\x1B[48;2;255;0;0mH\x1B[49m\x1B[48;2;128;64;0me\x1B[49m\x1B[48;2;0;128;0ml\x1B[49m\x1B[48;2;0;85;85ml\x1B[49m\x1B[48;2;0;43;170mo\x1B[49m\x1B[48;2;0;0;255m \x1B[49m\n\x1B[48;2;255;0;0m \x1B[49m\x1B[48;2;128;64;0mW\x1B[49m\x1B[48;2;0;128;0mo\x1B[49m\x1B[48;2;0;85;85mr\x1B[49m\x1B[48;2;0;43;170ml\x1B[49m\x1B[48;2;0;0;255md\x1B[49m'
    const __ =
      // eslint-disable-next-line max-len
      '\x1B[48;2;255;0;0mH\x1B[49m\x1B[48;2;128;64;0me\x1B[49m\x1B[48;2;0;128;0ml\x1B[49m\x1B[48;2;0;85;85ml\x1B[49m\x1B[48;2;0;43;170mo\x1B[49m\x1B[48;2;0;0;255m \x1B[49m\n\n\n\x1B[48;2;255;0;0m \x1B[49m\x1B[48;2;128;64;0mW\x1B[49m\x1B[48;2;0;128;0mo\x1B[49m\x1B[48;2;0;85;85mr\x1B[49m\x1B[48;2;0;43;170ml\x1B[49m\x1B[48;2;0;0;255md\x1B[49m'

    expect(result1).eq(_)
    expect(result2).eq(__)
  })
})
