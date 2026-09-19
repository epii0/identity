# @epii0/identity

Official machine-readable identity metadata for **eπi0**. This small ESM package
exports a frozen object with the brand's public name, homepage, GitHub
organization, and primary Maven namespace. It has no runtime dependencies.

## Usage

```sh
npm install @epii0/identity
```

```js
import { identity } from '@epii0/identity';

console.log(identity.name);           // eπi0
console.log(identity.asciiName);      // epii0 (ends with the digit zero)
console.log(identity.homepage);       // https://epii0.com
console.log(identity.github);         // https://github.com/epii0
console.log(identity.mavenNamespace); // org.epii0
```

`org.epii0` is the primary Maven namespace. `com.epii0` is reserved defensively
and is not the namespace for regular artifact releases.

The name eπi0 is derived from Euler's identity: e^(πi) + 1 = 0.
This package provides metadata only; it does not authenticate a website,
repository, package, or publisher.

## Development

Run `npm test` using a Node.js version that supports the built-in test runner.

## License

MIT. See [LICENSE](LICENSE).
