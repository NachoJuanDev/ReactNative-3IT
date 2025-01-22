This is a new [**React Native**](https://reactnative.dev) project, bootstrapped using [`@react-native-community/cli`](https://github.com/react-native-community/cli).

**Author**: @NachoJuanDev - [nachojuan.dev](https://nachojuan.dev/)

# Getting Started

> **Note**: Make sure you have completed the [React Native - Environment Setup](https://reactnative.dev/docs/environment-setup) instructions till "Creating a new application" step, before proceeding.

## Step 1: Install Dependencies

```bash
yarn install

# and for ios
cd ios
pod install
```

## Step 2: Config env

Create env.json with the content

```json
{
  "apiKey": "api-key"
}
```

Get your api key from: [api.cmfchile.cl](https://api.cmfchile.cl/index.html)

## Step 3: Start metro server and launch app

```bash
yarn start
```

In the metro dev server

- press "a" for Android
- press "i" for iOS

or, in another terminal:

```bash
# For Android
yarn android

# For iOS
yarn ios
```

# Additional features

- DarkMode
- Refresh query with ScrollView

# Troubleshooting

If you can't get this to work, see the [Troubleshooting](https://reactnative.dev/docs/troubleshooting) page.

# Learn More

To learn more about React Native, take a look at the following resources:

- [React Native Website](https://reactnative.dev) - learn more about React Native.
- [Getting Started](https://reactnative.dev/docs/environment-setup) - an **overview** of React Native and how setup your environment.
- [Learn the Basics](https://reactnative.dev/docs/getting-started) - a **guided tour** of the React Native **basics**.
- [Blog](https://reactnative.dev/blog) - read the latest official React Native **Blog** posts.
- [`@facebook/react-native`](https://github.com/facebook/react-native) - the Open Source; GitHub **repository** for React Native.
