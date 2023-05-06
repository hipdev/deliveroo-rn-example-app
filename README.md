# First app, the Deliveroo clone <br>  of [React Native crash course](https://www.youtube.com/watch?v=AkEnidfZnCU) from the amazing Sonny

## Important considerations
* If you don't see the web available in your terminal is because is not installed by default now with Expo, you will need to install another packages:

```javascript
npx expo install react-native-web@~0.18.10 react-dom@18.2.0

```
or whatever seems to date at your time reading this xD.

* At 1:26 Sonny recommends to install sanity cli, that's not needed now in v3
* I'm not using Hero icons, instead I'm using Lucide Icons
* I'm using TypeScript instead too, to generate types I'm using the [sanity-codegen](https://www.sanity.io/plugins/sanity-codegen) package, everything is typed.


### If you get an error at 1:38 trying to get the Sanity data, please

```javascript
yarn add react-native-url-polyfill

```
Then in your root app.js/ts add this import:

```javascript
import 'react-native-url-polyfill/auto';

```
That's it, fixed.

## Steps to reproduce

```javascript
git clone https://github.com/hipdev/delivery-rn-example-app.git your-app-name
yarn install
yarn start 
```

Create an account in Sanity and add the projectId and the dataset inside the sanity.ts client file.<br>
Add some documents as explained by Sonny in the tutorial.


