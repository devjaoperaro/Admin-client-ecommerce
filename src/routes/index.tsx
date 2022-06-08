import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../pages/Home';
import UserList from '../pages/UserList';


const Routes: React.FC = () => {
    return (
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/users" component={UserList}/>
        </Switch>            
    );
};

export default Routes;