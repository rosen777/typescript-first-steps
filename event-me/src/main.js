import './style.css'

// Importing explicit .js files should Just Work,
// even if we've renamed them to .ts (it's all .js at runtime)
import Header, { setupThemeToggle } from './components/Header.js';
import Main from './components/Main.js';
import Footer from './components/Footer.js';

// Importing explicit .ts files requires
// tsconfig setting  "allowImportingTsExtensions": true
import { setupModals } from './components/Modal.ts';

// Importing without an explicit extension should Just Work
import { setupForms } from './components/Forms';

const { VITE_API_URL } = import.meta.env;
if (!VITE_API_URL) throw new Error('Missing env var VITE_API_URL');

const render = (html) => {
  console.log('rendering');
  document.querySelector('#app').innerHTML = html;
  setupThemeToggle();
  setupModals();
  setupForms();
};


render(`
  ${Header}
  ${Main}
  ${Footer}
`);



