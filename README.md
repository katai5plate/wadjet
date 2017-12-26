[![wercker status](https://app.wercker.com/status/ad70bac2941458a3fd3f1ed329ff05ee/s/master "wercker status")](https://app.wercker.com/project/byKey/ad70bac2941458a3fd3f1ed329ff05ee)
[![Coverage Status](https://coveralls.io/repos/github/danmaq/wadjet/badge.svg?branch=dev)](https://coveralls.io/github/danmaq/wadjet?branch=dev)
[![tested with jest](https://img.shields.io/badge/tested_with-jest-99424f.svg)](https://github.com/facebook/jest)
[![npm version](https://badge.fury.io/js/wadjet.svg)](https://badge.fury.io/js/wadjet)

# 👁️‍🗨️ Wadjet

🔮🎂 The __your birth date__ is based on statistical psychology and will __expose your personality__.
This package as a module does its calculations.

## Install

### Using yarn

```SH
$ yarn add wadjet
```

### Using npm

```SH
$ npm install --save wadjet
```

## Usage

```JavaScript
import wadjet from 'wadjet';

const result = wadjet.calc('2007-08-31');
console.log(typeof result); // object
console.log(JSON.stringify(result, null, 4)); // See: Result
const outer = wadjet.detail('A888'); // Equals to `result.outer`
const inner = wadjet.detail(result.inner.nature); // Equals to `result.inner`
```

### Result

```JSON
{
    "inner": {
        "communication": "Fix",
        "management": "Hope",
        "response": "Action",
        "position": "Quick",
        "motivation": "Competition",
        "nature": "E919",
        "romance": {
            "A000": 2,
            "A024": 0,
            "A100": 0,
            "A888": 1,
            "E001": 1,
            "E125": 2,
            "E555": 0,
            "E919": 3,
            "H012": 3,
            "H025": 1,
            "H108": 2,
            "H789": 1
        },
        "business": {
            "A000": 2,
            "A024": 0,
            "A100": 0,
            "A888": 3,
            "E001": 2,
            "E125": 2,
            "E555": 2,
            "E919": 0,
            "H012": 1,
            "H025": 0,
            "H108": 3,
            "H789": 3
        }
    },
    "outer": {
        "communication": "Flex",
        "management": "Hope",
        "response": "Action",
        "position": "Quick",
        "motivation": "Power",
        "nature": "A888",
        "romance": {
            "A000": 1,
            "A024": 3,
            "A100": 1,
            "A888": 0,
            "E001": 0,
            "E125": 0,
            "E555": 0,
            "E919": 1,
            "H012": 0,
            "H025": 0,
            "H108": 3,
            "H789": 2
        },
        "business": {
            "A000": 0,
            "A024": 1,
            "A100": 2,
            "A888": 2,
            "E001": 1,
            "E125": 1,
            "E555": 0,
            "E919": 0,
            "H012": 3,
            "H025": 1,
            "H108": 2,
            "H789": 0
        }
    },
    "cycle": 4,
    "lifeBase": "Investment",
    "potential": "Io-Ei",
    "workstyle": "E001"
}
```

## Dependencies

* nodejs >= 4.8.3
* yarn (Optional)

The Wadjet consists pure JS only, it's not dependent on a architecture.

## Migrate

### from 1.x.x

1. `s/wadjet\(/wadjet.calc(/g`
2. `s/require\('wadjet'\);/require('wadjet').default;/g`

### from 2.x.x

1. `s/require\('wadjet'\);/require('wadjet').default;/g`

## APIs

### Import

```JavaScript
import wadjet from 'wadjet';
```

If you want the CommonJS style notation:

```JavaScript
const wadjet = require('wadjet').default;
```

### `wadjet.calc`

```JavaScript
wadjet.calc(birth: Date | String) -> Object
```

* `birth`: Birthday. It can be set _from 1873-02-01 to 2050-12-31_.

### `wadjet.detail`

```JavaScript
wadjet.detail(key: String) -> Object
```

* `key`: Nature type.

## See also

* [Release history](https://github.com/danmaq/wadjet/releases)
* [Implemented it for command line interface](https://github.com/danmaq/wadjet-cli)
* [F# Version (Obsolete)](https://github.com/danmaq/birth.fs)
