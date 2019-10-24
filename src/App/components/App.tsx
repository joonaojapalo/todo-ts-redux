import React from 'react';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import './App.css';
import reducer from '../store/ducks/todo';
import List from './List';

export interface AppProps {
  name: string;
};

const App: React.FunctionComponent<AppProps> = (props: AppProps) => {
  return (
    <div className="App">
      Hello, {props.name}
      <List/>
    </div>
  );
}

const store = createStore(reducer);

export default (props: AppProps) => (
  <Provider store={store}>
    <App name={props.name}/>
  </Provider>
);
