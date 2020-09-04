# san-copy-to-clipboard [npm](https://www.npmjs.com/package/san-copy-to-clipboard)

Copy to clipboard React component

Based on [copy-to-clipboard](https://npm.im/copy-to-clipboard)

## Installation

### NPM

```sh
npm install --save san-copy-to-clipboard
```

Don't forget to manually install peer dependencies (`san`) if you use npm@3.


### 1998 Script Tag:
```html
<script src="https://unpkg.com/san@3.0.1/dist/san.js"></script>
<script src="https://unpkg.com/san-copy-to-clipboard@0.0.1/build/san-copy-to-clipboard.js"></script>
(Module exposed as `CopyToClipboard`)
```


## Demo reference

[san-copy-to-clipboard/example](https://github.com/zttonly/san-copy-to-clipboard/tree/master/example)


## Usage
```js
import san from 'san';
import {CopyToClipboard} from 'san-copy-to-clipboard';

const AppComponent = san.defineComponent({
    components: {
        's-clipboard': CopyToClipboard
    },
    initData() {
        return {
            value: 'some\ntext',
            copied: false
        };
    },

    handleChange(e) {
        console.log('handleChange', e);
        this.data.set('value', e.target.value);
        this.data.set('copied', false);
    },
    handleCopy(e) {
        console.log('handleCopy', e);
        e.result && this.data.set('copied', true);
    },
    template: `
        <div class="app">
            <h1>san-copy-to-clipboard</h1>
            <section class="section">
                <h3>set the copy text at this area</h3>
                <textarea on-change="handleChange" rows="2" cols="40" value="{{value}}"></textarea>
                <div style="font-size: 14px;color:red">{{copied ? 'Copied' : ''}}</div>
            </section>

            <section class="section">
                <h2>Copy to clipboard with button</h2>
                <s-clipboard on-copy="handleCopy" text="{{value}}">
                    <button>click me</button>
                </s-clipboard>
            </section>
        </div>
    `
});

const app = new AppComponent();
app.attach(document.getElementById('app'));
```

## Options


#### `text`: PropTypes.string.isRequired

Text to be copied to clipboard


#### `onCopy`: PropTypes.func

Optional callback, will be called when text is copied

```
onCopy(text, result)
```
`result (bool)`: Returns `true` if copied successfully, else `false`.


#### `options`: PropTypes.shape({debug: bool, message: string})

Optional [copy-to-clipboard](https://npm.im/copy-to-clipboard) options.

See [API docs](https://npm.im/copy-to-clipboard#api) for details

#### `slot`

CopyToClipboard is a simple wrapping component, you can render any component with slot, which will be used to capture clicks.

```js
<copy-to-clipboard text="Hello!">
    <button>Copy to clipboard</button>
</copy-to-clipboard>
```

## Development and testing

Currently is being developed and tested with the latest stable `Node 8` on `OSX`.

To run example covering all `CopyToClipboard` features, use `yarn start`, which will compile `example/Example.js`

```bash
git clone git@github.com:zttonly/san-copy-to-clipboard.git
cd san-copy-to-clipboard
yarn install
yarn start

# then
open http://localhost:8822
```

## Tests

```bash
# to run ESLint check
yarn lint

```

## License

MIT
