React Hooks API for quickly displaying customizable full-screen backdrops/overlays.

Think of use-backdrop as `alert()`, but native to React, and endlessly customizable!

[![NPM](https://img.shields.io/npm/v/use-backdrop.svg)](https://www.npmjs.com/package/use-backdrop) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

### use-backdrop is ready for production apps 😘

![gif of use-backdrop](https://raw.githubusercontent.com/lyulka/use-backdrop/master/use-backdrop-demo-compressed.gif)

## Install

```bash
npm install --save use-backdrop
```

## Usage

🎉 A no-fuss example that uses `use-backdrop` to display a modal is available on [GitHub](https://github.com/lyulka/use-backdrop). 🎉

### Step 1: Wrap BackdropProvider around your root (App) component

```jsx
import { BackdropProvider } from 'use-backdrop';
 
return (
  <BackdropProvider>
    <div className="App">
      { /* The rest of your app. */ }
    </div>
  </BackdropProvider>
)
```

### Step 2: Import and call the useBackdrop hook

```jsx
import { useBackdrop } from 'use-backdrop';
 
export default function MyComponent() {
  const { displayBackdrop, closeBackdrop } = useBackdrop();
}
```


### Step 3: Call displayBackdrop, passing in a render function
```jsx
export default function MyComponent() {
  const { displayBackdrop } = useBackdrop();
 
  const handleClick = () => displayBackdrop((closeBackdrop) => (
    <div>
      <button onClick={closeBackdrop}>
        Click me to close the backdrop.
      </button>
    </div>
  ));
 
  return (
    <div>
      <button onClick={handleClick}>
        Click me to display a backdrop.
      </button>
    </div>
  )
}
```

### BackdropProvider props & options

```js
BackdropProvider.propTypes = {
  children: PropTypes.element,

  // zIndex of the backdrop surface. Unused if backdropSurface is
  // overridden.
  zIndex: PropTypes.number,

  // If true, backdrop background is transparent.
  disableDarken: PropTypes.bool,

  // A render function: (children) => (/* React Component */)
  // that returns a Component that overrides (takes the place of)
  // the default darkened div background.
  //
  // See /example/src/ExampleApp.jsx for proper use.
  backdropSurface: PropTypes.func
}

BackdropProvider.defaultProps = {
  children: null,
  disableBackdrop: false,
  zIndex: 10,
  backdropSurface: null
}
```

## License

MIT © [lyulka](https://github.com/lyulka)
