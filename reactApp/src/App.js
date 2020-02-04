import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

// import ScanDashboard from './containers/scanDashboard';
import MainPage from './components/MainPage/mainPage';
import PostDetail from './components/PostDetail/postDetail';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <Router>
                <div className="container">
                    <Switch>
                        <Route exact path="/" component={MainPage} />
                        <Route path="/post/:postID" component={PostDetail} />
                    </Switch>
                </div>
            </Router>
        );
    }
}

export default App;
