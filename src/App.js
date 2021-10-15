import './App.css';
import React, {lazy, Suspense, useEffect, useState} from "react";
import AppHeader from "./components/header/appHeader";
import {Redirect, Route, Switch} from "react-router-dom";
import Preloader from "./components/common/preloader/Preloader";
import ThemeProvider from "@mui/material/styles/ThemeProvider";
import appTheme from "./utils/theme/appTheme";
import AppFooter from "./components/footer/Footer";
import Button from "@mui/material/Button";

const Cocktails = lazy( () =>
    import(/* webpackChunkName: "SearchByCocktail" */"./components/searchByCocktail/SearchByCocktail") )
const SpecificCocktail = lazy( () =>
    import(/* webpackChunkName: "SpecificCocktail" */"./components/specificCocktail/SpecificCocktail") )
const Ingredients = lazy( () =>
    import(/* webpackChunkName: "SearchByIngredient" */"./components/searchByIngredient/SearchByIngredient") )
const ErrorPage = lazy( () =>
    import(/* webpackChunkName: "Error" */"./components/common/errorPage/ErrorPage") )

const App = () => {

    const [showButton, setShowButton] = useState(false)

    useEffect(() => {
        window.addEventListener(`scroll`, () => {
            if (window.pageYOffset > 800) {
                setShowButton(true);
            } else {
                setShowButton(false);
            }
        });
    }, []);

  return (
      <ThemeProvider theme={appTheme}>
        <AppHeader/>
        <div className='content'>
            <Suspense fallback={<Preloader/>}>
                <Switch>
                    <Route exact path='/cocktails'
                           render={() => <Cocktails/>}/>
                    <Route exact path='/cocktails/cocktail/:id'
                           render={(props) => <SpecificCocktail {...props}/>}/>
                    <Route path='/ingredients'
                           render={() => <Ingredients/>}/>
                    <Route exact path='/'
                           render={() => <Redirect to='/cocktails'/>}/>
                    <Route exact path='*'
                           render={(props) => <ErrorPage {...props}/>}/>
                </Switch>
            </Suspense>
        </div>
          <AppFooter/>

          {showButton &&
          <Button
              sx={{position: `fixed`, bottom: `100px`, right: `100px`, opacity: 0.7}}
              variant="contained"
              color={'button'}
              onClick={ () => {window.scrollTo({top: 0, behavior: "smooth"})} }
          >To top
          </Button>}

      </ThemeProvider>
  )
}

export default App;
