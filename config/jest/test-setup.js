import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { JSDOM } from 'jsdom';
import localStorage from 'mock-local-storage';

// Setup enzyme's react adapter
configure({
  adapter: new Adapter(),
  disableLifecycleMethods: true
});

const jsdom = new JSDOM('<!doctype html><html><body></body></html>');
const { window } = jsdom;

function copyProps(src, target) {
  const props = Object.getOwnPropertyNames(src)
    .filter(prop => typeof target[prop] === 'undefined')
    .reduce((result, prop) => ({
      ...result,
      [prop]: Object.getOwnPropertyDescriptor(src, prop),
    }), {});
  Object.defineProperties(target, props);
}

global.localStorage = localStorage;
global.window = window;
global.document = window.document;
global.navigator = {
  userAgent: 'node.js',
};
copyProps(window, global);

jasmine.DEFAULT_TIMEOUT_INTERVAL = 5000;

module.exports = {
  verbose: true,
};
