## Login with localStorage

The trick to using `localStorage` to store and retrieve data, which I found [here](https://www.smashingmagazine.com/2010/10/local-storage-and-how-to-use-it/), is to `JSON.stringify` your `setItem`, and `JSON.parse` your `getItem`.
