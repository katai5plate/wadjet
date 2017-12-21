# 👁️‍🗨️ Wadjet

🔮🎂 The __your birth date__ is based on statistical psychology and will __expose your personality__.
This package as a module does its calculations.

## Install

```SH
$ npm install --save wadjet
```

## Usage

```JavaScript
const wadjet = require('wadjet');
const result = wadjet('2007-08-31');
console.log(typeof result); // object
console.log(JSON.stringify(result, null, 4)); // See: Result
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
        "nature": "E919"
    },
    "outer": {
        "communication": "Flex",
        "management": "Hope",
        "response": "Action",
        "position": "Quick",
        "motivation": "Power",
        "nature": "A888"
    },
    "cycle": 4,
    "lifeBase": "Investment",
    "potential": "Io-Ei",
    "workstyle": "E001"
}
```

## See also

* [Implemented it for command line interface](https://github.com/danmaq/wadjet-cli)
* [F# Version (Obsolete)](https://github.com/danmaq/birth.fs)
