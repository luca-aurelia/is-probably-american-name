# Is Probably American Name
> Check a string against a database of American first names.

⚠️ Be careful about using this package in the browser. The database it checks against is a 67 MB JSON file.

# Install
```
$ npm install is-probably-american-name --save
```

# Usage

```js
const isName = require('is-probably-american-name')

isName('ada') // => true
isName('analytical engine') // => false
```

# Limitations

## First names only

This package only works for first names.
```js
const isName = require('is-probably-american-name')
isName('ada lovelace') // => false
```

## International names
This packages uses a database of American names from 1880 to 2016. As such, it includes a number of names from around the world, but it's far from perfect. Here's how it performs against a small sample of actual names:

| Name      | Recognized? |
| --------- | ----------- |
| Fela      | ✅ |
| Vineet    | ✅ |
| Khaled    | ✅ |
| Yuriko    | ✅ |
| Lingman   | ❌ |
| Azami     | ❌ |
| Weiwen    | ❌ |
| Rajeswari | ❌ |

# Created By

- [Thomas Bailey](https://github.com/noise-machines)
