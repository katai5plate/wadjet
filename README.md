[![tested with jest](https://img.shields.io/badge/tested_with-jest-99424f.svg)](https://github.com/facebook/jest)
[![Coverage Status](https://coveralls.io/repos/github/danmaq/wadjet/badge.svg?branch=master)](https://coveralls.io/github/danmaq/wadjet?branch=master)
[![wercker status](https://app.wercker.com/status/ad70bac2941458a3fd3f1ed329ff05ee/s/master "wercker status")](https://app.wercker.com/project/byKey/ad70bac2941458a3fd3f1ed329ff05ee)
[![npm version](https://badge.fury.io/js/wadjet.svg)](https://badge.fury.io/js/wadjet)
[![npm download](https://img.shields.io/npm/dm/wadjet.svg?style=flat-square)](https://npmjs.org/package/wadjet)

# ![👁️‍🗨️ Wadjet](https://raw.githubusercontent.com/danmaq/wadjet/images/wadjet.svg?sanitize=true)

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

const personality = wadjet.personality('2007-08-31');
console.log(typeof personality); // object
console.log(JSON.stringify(personality, null, 4)); // See: Result 1

const inner = wadjet.detail(result.inner);
console.log(typeof inner); // object
console.log(JSON.stringify(inner, null, 4)); // See: Result 2
```

### Result

#### 1

```JSON
{
    "cycle": 4,
    "inner": "E919",
    "lifeBase": "Investment",
    "outer": "A888",
    "potential": "Io-Ei",
    "workstyle": "E001"
}
```

#### 2

```JSON
{
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
}
```

## Dependencies

* nodejs >= 4.8.3
* yarn (Optional, but recommended)

The Wadjet consists pure JS only, it's not dependent on a architecture.

## APIs

### Import

```JavaScript
import wadjet from 'wadjet';
```

If you want the CommonJS style notation:

```JavaScript
const wadjet = require('wadjet').default;
```

### `wadjet.affinity`

Evaluation function used for sorting in affinity order.

```JavaScript
wadjet.detail(a: String, b: String) -> Number
```

* `a`: Personality type.
* `b`: Personality type.

### `wadjet.detail`

Get the details corresponding to the specified nature.

```JavaScript
wadjet.detail(key: String) -> Object
```

* `key`: Nature type.

### `wadjet.personality`

Get personality from birthday.

```JavaScript
wadjet.personality(birth: Date | String) -> {
    cycle: Number,
    inner: String,
    lifeBase: String,
    outer: String,
    potential: String,
    workstyle: String
}
```

### `wadjet.types`

Personality types list.

```JavaScript
wadjet.types -> ReadonlyArray.<String>
```

* `birth`: Birthday. It can be set _from 1873-02-01 to 2050-12-31_.

### `wadjet.calc` [DEPRECATED]

__This function is DEPRECATED since version 3.2.0. And will no longer since version 4.0.0.__  
Should use `personality` function.

Get personality from birthday.

```JavaScript
wadjet.calc(birth: Date | String) -> {
    cycle: Number,
    inner: Object,
    lifeBase: String,
    outer: Object,
    potential: String,
    workstyle: String
}
```

* `birth`: Birthday. It can be set _from 1873-02-01 to 2050-12-31_.

## Migrate

### from 1.x.x

1. `s/wadjet\(/wadjet.calc(/g`
2. `s/require\('wadjet'\);/require('wadjet').default;/g`

### from 2.x.x

1. `s/require\('wadjet'\);/require('wadjet').default;/g`

### from 3.0.x-3.1.x

Although `wadjet.calc` function was deprecated, it can be replaced with the following code:

```JavaScript
const calc =
    birth =>
        (({ inner, outer, ...result }) => ({
            inner: wadjet.detail(inner),
            outer: wadjet.detail(outer),
            ...result
        }))(wadjet.personality(birth));
```

## See also

* [Release history](https://github.com/danmaq/wadjet/releases)
* [Implemented it for command line interface](https://github.com/danmaq/wadjet-cli)
* [F# Version (Obsolete)](https://github.com/danmaq/birth.fs)
