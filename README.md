<p align="center">
    <img alt="React Native Redux Boilerplate" src="assets/logo.png"    width="1050"/>
</p>

[![Battle Tested ✅](https://img.shields.io/badge/-Battle--Tested%20%E2%9C%85-03666e?style=for-the-badge)](https://github.com/WrathChaos/react-native-redux-boilerplate)

[![React Native redux BoilerPlate](https://img.shields.io/badge/-React%20Native%20redux%20Boilerplate-lightgrey?style=for-the-badge)](https://github.com/WrathChaos/react-native-redux-boilerplate)

[![npm version](https://img.shields.io/npm/v/react-native-redux-boilerplate.svg?style=for-the-badge)](https://www.npmjs.com/package/@freakycoder/react-native-redux-boilerplate)
[![npm](https://img.shields.io/npm/dt/react-native-redux-boilerplate.svg?style=for-the-badge)](https://www.npmjs.com/package/@freakycoder/react-native-redux-boilerplate)
![Platform - Android and iOS](https://img.shields.io/badge/platform-Android%20%7C%20iOS-blue.svg?style=for-the-badge)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)
[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg?style=for-the-badge)](https://github.com/prettier/prettier)

## Installation

You can simply clone the project and start with your barebone project

```ruby
git clone git@github.com:WrathChaos/react-native-redux-boilerplate.git
```

## Step By Step Guide

### Rename the project: (Thanks to [react-native-name](https://github.com/junedomingo/react-native-rename))

```bash
npx react-native-rename <your-project-name>
```

> With custom Bundle Identifier (Android only. For iOS, please use Xcode)

```bash
npx react-native-rename <your-project-name> -b <bundleIdentifier>
```

### Install Pods (iOS Only)

- npm i
- cd ios && pod install
- cd .. && react-native run-ios/android

### Android local.properties (Android Only)

- npm i
- cd android && mkdir local.properties
- nano local.properties

#### Example of MacOS Android SDK Path

Make sure that set your right path of Android SDK

```bash
ndk.dir=/Users/your-name/Library/Android/sdk/ndk-bundle
sdk.dir=/Users/your-name/Library/Android/sdk
```

- cd .. & react-native run-ios/android

<hr>

# What's Included?

- Redux
- Redux Services
- NavigationService
- API Usage Service
- Ready to use Styles
- React Navigation v4
- React Navigation Helpers
- HTTP Network Management (Axios)
- Built-in EventEmitter (EventBus)
- Generic React Hooks API Request Service
- Babel Plugin Module Resolver to fix the relative path problem (visit .babelrc)

<hr>

# Components

## NavigationService (Already set it up)

## Styles

- colors
- fonts
- spacing
- theme
- font-size

## Imports

```jsx
import colors from "colors";
```

```jsx
import fonts from "fonts";
```

```jsx
import fontSize from "font-size";
```

```jsx
import spacing from "spacing";
```

```jsx
import theme from "theme";
```

if you want to call them all at once

```jsx
import { theme, fonts, colors, spacing, fontSize } from "shared-styles/index";
```

### Future Plans

- [x] ~~LICENSE~~
- [ ] Write an article about the lib on Medium

## Author

FreakyCoder, kurayogun@gmail.com

## License

React Native Redux Boilerplate is available under the MIT license. See the LICENSE file for more info.
