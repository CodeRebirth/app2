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
            apiKey: "AIzaSyAQFJc6znzZw2B1s56FZnEUHwijPcubEzM",
            authDomain: "app2-be84b.firebaseapp.com",
            databaseURL: "https://app2-be84b.firebaseio.com",
            projectId: "app2-be84b",
            storageBucket: "app2-be84b.appspot.com",
            messagingSenderId: "144257139796",
            appId: "1:144257139796:web:3b0a0e7c444ca4981459c1",
            measurementId: "G-4B885JLEQR"
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