import React from 'react';
import {Route , Switch} from 'react-router-dom';
import Navbarmenu from './Navbarmenu';
import Signin from './Signin';
import Table from './Table';

const App = () => {
    
    const Error =()=>{
        return <h1>OOps!! page not found!</h1>
    }

    return(
        <>
         <Navbarmenu/>
         <Switch>
            <Route exact path='/' component={Signin}/>
            <Route exact path='/Table' component={Table}/>
            <Route component={Error}/>
        </Switch>
        </>
    )
}

export default App;
