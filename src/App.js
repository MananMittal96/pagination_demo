import React, { Component } from 'react';
// import { Provider } from 'react-redux'
// import { createStore } from 'redux'
// import rootReducer from './reducers/index'
import CardsList from './components/cardsList/cardsList';

// const store = createStore(rootReducer, window.devToolsExtension ? window.devToolsExtension() : f => f)
class App extends Component {
  render() {
    return (
      // <Provider store={store}>
        <div className="App">
          <CardsList />
        </div>
        // {/* </Provider> */}
    );
  }
}

export default App;