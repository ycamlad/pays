import React, {Component} from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import PaysManager from "./container/PaysManager/PaysManager";
import Erreur from "./components/Erreur/Erreur";
import Erreur404 from "./components/Erreur/Erreur404/Erreur404";
import NavBar from "./components/NavBar/NavBar";
import NavBar2 from "./components/NavBar/NavBar2";
import "./App.css"
import UnPays from "./container/UnPays/UnPays";
import "bootswatch/dist/cerulean/bootstrap.min.css";
import LePays from "./container/PaysManager/LePays/LePays";

class App extends Component {

    render() {
        return (
            <BrowserRouter>
              <NavBar2/>
              <Switch>
                  <Route path={"/"} exact render={()=><h1>Page d'acceuil</h1>}/>
                  <Route path={"/pays"} exact component={PaysManager}/>
                  <Route path={"/pays/:id"}  render={(props)=>{
                      console.log(props)
                        return <UnPays nomPays={props.match.params.id} {...props}/>}
                    }/>
                  <Route render={()=><Erreur>
                     <Erreur404/>
                  </Erreur>}/>
              </Switch>
            </BrowserRouter>
        );
    }
}

export default App;