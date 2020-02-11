import React,{Component} from 'react';
import {Provider} from 'react-redux';
import {createStore,applyMiddleware} from 'redux';
import ReduxThunk from 'redux-thunk';
import firebase from 'firebase';
import reducers from './reducers';
import Router from './Router';

class App extends Component {
    UNSAFE_componentWillMount(){
        var firebaseConfig = {
            apiKey: "",
            authDomain: "",
            databaseURL: "",
            projectId: "",
            storageBucket: "",
            messagingSenderId: "",
            appId: "",
            measurementId: ""
          };
          // Initialize Firebase
          firebase.initializeApp(firebaseConfig);
    }
    render() {
        const store =createStore(reducers,{},applyMiddleware(ReduxThunk))
        return (
            <Provider store={store}>
            <Router/>
            </Provider>  
        );
    }
}


export default App;
