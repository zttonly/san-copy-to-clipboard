/**
 * @file config
 *  @author
 */

import san from 'san';
import {CopyToClipboard} from '../src';
import './index.css';

/* eslint-disable no-console */
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
    attached() {
        console.log('init');
    },
    handleChange(e) {
        console.log('example:handleChange', e);
        this.data.set('value', e.target.value);
        this.data.set('copied', false);
    },
    handleCopy(e) {
        console.log('example:handleCopy', e);
        e.result && this.data.set('copied', true);
    },
    handleClick(e) {
        console.log('example:handleClick', e);
        console.log(`Clicked on "${e.target.innerHTML}"!`);
    },
    template: /* html */`
        <div class="app">
            <h1>san-copy-to-clipboard</h1>
            <section class="section">
                <h3>set the copy text at this area</h3>
                <textarea on-change="handleChange" rows="2" cols="40" value="{{value}}"></textarea>
                <div style="font-size: 14px;color:red">{{copied ? 'Copied' : ''}}</div>
            </section>

            <section class="section">
                <h2>1. Copy to clipboard with button</h2>
                <s-clipboard on-copy="handleCopy" text="{{value}}">
                    <button>click me</button>
                </s-clipboard>
            </section>
            <section class="section">
                <h3>2. Copy to clipboard with span</h3>
                <s-clipboard on-copy="handleCopy" text="{{value}}">
                    <span>click me</span>
                </s-clipboard>
            </section>

            <section class="section">
                <h3>3. Copy to clipboard with inneritem onClick</h3>
                <s-clipboard
                    on-copy="handleCopy"
                    options="{{{message: 'Whoa!'}}}"
                    text="{{value}}"
                >
                    <button on-click="handleClick">Copy to clipboard with onClick prop</button>
                </s-clipboard>
            </section>

            <section class="section">
                <textarea cols="22" rows="3" style="margin-top: '1em'"></textarea>
            </section>
        </div>
    `
});

const app = new AppComponent();
app.attach(document.getElementById('app'));
