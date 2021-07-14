# Order Book

## Development

- Use `nvm use` to set your node version correctly.
- Run `yarn` to install dependencies.
- Run `yarn start` to start the app in development mode

## App architecture

The app uses [React Sweet State](https://atlassian.github.io/react-sweet-state/#/) to manage state. React Sweet State works using React Context that it internally optimises such that re-renders are limited. React Sweet State was chosen as it allows for smaller, more composable stores. There is one store for the socket and orderbook data, another for the screen size which powers UI changes that were not possible or were difficult with CSS and the toaster store which handles displaying and removing toasts.

The socket implementation just uses the default javascript `WebSocket`. With the functionality defined in the brief there wasn't a need for an external library.

### Order book store

The order book store stores details about what is being tracked (BTC or ETH), whether data is loading, if there is an error, some socket listeners and the asks and bids. The asks and bids are stored as an object. I chose to store the data as an object as it makes it far easier, and more performant, to perform updates. Instead of constantly adding and removing new elements to an array we can instead instantly access and update the properties of the ask and bid objects. Additionally, storing the asks and bids as objects means we can have more fine grained control over when we re-render. Sweet State works on comparing equality of the store. For now, the ask and bid objects are re-assigned every batch period to trigger a re-render. However, this is not what I would do if the app was going to be productionized. The choice to use objects over arrays makes it easier to do future performance work to only update the store if a key changes rather than comparing arrays. Using objects internally doesn't impact consumers as we can easily transform the object into an ordered array when needed.

All of the orderbook logic works on the premise that the orderbook is mutable. This is because it makes some of the logic simpler (no worrying about what we need to spread to copy the object) and theoretically may be more performant. However, while it may make the logic in each function simpler, mutability can make the overall flow of the application harder to understand. Due to the scope of the app, this did not seem to be a large concern.

## Performance

To ensure that the app runs smoothly, I implemented batching of the updates from the socket. The main motivator behind this was actually UX. With no batching the UI would constantly update. This made it very hard for me to track what was actually happening. To fix this, socket updates are queued and then processed every second. I chose a second as this balanced the need for real time updates with usability. Implementing the batching removes any immediate urge to optimise the rest of the code, although performance is something I would want to look into further if this site was going to production.

One issue with the current batching implementation is that it will only ever process updates on the batching schedule which means that depending on when the initial message comes through there may be a slight delay until it processes it. This can lead to a slightly slower initial load time of the app. In an ideal world I would fix this.

Many parts of the app are tied to the order book store and perform updates on it, such as the spread, the group dropdown and kill and toggle feed buttons. However, not all consumers of the store rely on all of that data. To ensure components only re-render when the state they care about changes, I relied heavily on Sweet State selectors to make hooks that only grab the relevant data from the store.

Where possible, I have strived to use CSS over JS to make the site respond better. For example, the theme is implemented with CSS variables. This way, we can still use CSS-in-JS as we can import the `theme` object, but changes in the theme are purely driven by CSS. When the screen size shrinks, the value of the CSS variables updates. This avoids a costly re-render if I had instead used `useTheme` and `ThemeProvider` from `emotion` if users resized the site. Additionally, if we wanted to implement a light mode, that could be trivially done by just reassigning the CSS variables.

## Future Work

While I tried to make the app as polished as possible, there was only a limited amount of time to work on it which meant some things were missed that would not be if this app was to be actively developed and productionized. The following sections touch on some things I would look to fix and improve upon in a real app.

### Selector optimizations

Sweet State exposes a `createSelector` API much like `reselect`. `createSelector` can be used to break complex selectors down into individual functions which can be composed and memoised. This would be the first avenue for improving performance that I would take if given more time.

### Internationalization

Internationalization would need to be considered if releasing this app to a large audience. Some parts of this to consider would be localising currency (or at least allowing choice of currency), translations for the text in the UI and also the colours representing ask and bids as different countries consider different colours to represent 'good' or 'bad'.

### Test coverage

When implementing this app I mainly focused on producing a well polished site. If I had more time I would add far more tests than there currently are. The tests at the moment mainly just cover the functions that mutate the order book store. However, I would want to add more unit and integration tests for the UI, as well as, tests for all the hooks.

### Platformization

The architecture of this app has taken steps along the path to platformization. Much of the common-ness of the app - components and theme - has been put into a `design-system` folder. This is something that could be extracted out into a separate package in a real code base, especially if many different products were being built and were required to have the same look and feel. However, not everything has been abstracted away as abstraction and reusability takes time which I did not have. However, I believe the current structure of the app gives it plenty of room to scale and grow if more developers were to work on it. But it is obviously not at the level needed of a site being developed at a large company.

### Floating point logic

There are some instances in the code base where numbers are transformed. In the main place, where I group the orderbook, I use `big.js` to ensure that there is no weirdness with floating point logic. However, I would like to spend more time ensuring all currency manipulation uses `big.js` to avoid weirdness or errors when displaying data to users.
