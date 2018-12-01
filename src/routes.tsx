import * as React from 'react'
import {Route, Switch} from 'react-router'
import {BrowserRouter as Router} from 'react-router-dom'
import ScheduleScene from "./scenes/Schedule"
import DefaultScene from "./scenes/Default";

const AppRouter = () => {
    return (
        <Router>
            <Switch>
                <Route path={'/'} component={ScheduleScene} exact />
                <Route path={'/schedule'} component={ScheduleScene}/>
                <Route path={'*'} component={DefaultScene}/>
            </Switch>
        </Router>
    )
}

export default AppRouter