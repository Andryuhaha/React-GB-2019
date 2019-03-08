import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Router, Route, browserHistory, IndexRoute} from 'react-router';

import Layout from './Layouts/Layout';
import MainPage from './Pages/Main';
import Post from './Pages/Post';
import Comments from './Pages/Comments';
import PageNotFound from './Pages/PageNotFound';
//последнюю проверку Route ставим  * тогда все верхние сработают

const app = document.querySelector('#root');


ReactDOM.render(
    <Router history={browserHistory}>
        <Route path="/" component={Layout}>
            <IndexRoute component={MainPage} />
            <Route path="post" component={Post} />
            <Route path="comments" component={Comments} />
            <Route path='*' component={PageNotFound} /> 
        </Route>

    </Router>
    ,
app);

