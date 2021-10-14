import './App.css';
import React, {lazy, Suspense} from "react";
import AppHeader from "./components/header/appHeader";
import {Route, Switch} from "react-router-dom";
import Preloader from "./components/common/preloader/Preloader";
import HomePage from "./components/homePage/HomePage";

const Cocktails = lazy( () =>
    import(/* webpackChunkName: "Cocktails" */"./components/cocktailsList/Cocktails") )
const SpecificCocktail = lazy( () =>
    import(/* webpackChunkName: "SpecificCocktail" */"./components/cocktailsList/specificCocktail/SpecificCocktail") )
const Ingredients = lazy( () =>
    import(/* webpackChunkName: "Ingredients" */"./components/ingredientsList/Ingredients") )
const ErrorPage = lazy( () =>
    import(/* webpackChunkName: "Error" */"./components/common/errorPage/ErrorPage") )

const App = () => {
  return (
      <div>
        <AppHeader/>
          <Suspense fallback={<Preloader/>}>
              <Switch>
                  <Route exact path='/cocktails'
                         render={() => <Cocktails/>}/>
                  <Route exact path='/cocktails/cocktail/:id'
                         render={(props) => <SpecificCocktail {...props}/>}/>
                  <Route path='/ingredients'
                         render={() => <Ingredients/>}/>
                  <Route exact path='/'
                         render={() => <HomePage/>}/>
                  <Route exact path='*'
                         render={() => <ErrorPage/>}/>
              </Switch>
          </Suspense>
      </div>
  )
}

export default App;
