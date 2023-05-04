## Important considerations

* At 1:26 Sonny recommends to install sanity cli, that's not needed now in v3
* I'm not using Hero icons, instead I'm using Lucide Icons
* I'm using TypeScript instead too


### If you get an error at 1:38 trying to get the Sanity data, please

```javascript
yarn add react-native-url-polyfill

```
Then in your root app.js/ts add this import:

```javascript
import 'react-native-url-polyfill/auto';

```
That'is, is fixed.

