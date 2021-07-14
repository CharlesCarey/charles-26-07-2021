import ReactDOM from 'react-dom';
import { defaults } from 'react-sweet-state';
import { App } from './app';

defaults.batchUpdates = true;

ReactDOM.render(<App />, document.getElementById('root'));
