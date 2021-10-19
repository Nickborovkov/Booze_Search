import './App.css';
import React, {lazy, Suspense, useEffect, useState} from "react";
import AppHeader from "./components/header/appHeader";
import {Route, Switch} from "react-router-dom";
import Preloader from "./components/common/preloader/Preloader";
import ThemeProvider from "@mui/material/styles/ThemeProvider";
import appTheme from "./utils/theme/appTheme";
import AppFooter from "./components/footer/Footer";
import Button from "@mui/material/Button";
import HomePage from "./components/homePage/HomePage";
import Ingredients from "./components/ingredients/Ingredients";
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';

//Lazy loading
const Cocktails = lazy( () =>
    import(/* webpackChunkName: "SearchBooze" */"./components/searchBooze/SearchBooze") )
const SpecificCocktail = lazy( () =>
    import(/* webpackChunkName: "SpecificBooze" */"./components/specificBooze/SpecificBooze") )
const ErrorPage = lazy( () =>
    import(/* webpackChunkName: "Error" */"./components/common/errorPage/ErrorPage") )

const App = () => {

    //Back ti top button listener
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
                    <Route exact path='/cocktails/ByName'
                           render={() => <Cocktails searchType={`byName`}/>}/>
                    <Route exact path='/cocktails/ByIngredient'
                           render={() => <Cocktails searchType={`byIngredient`}/>}/>
                    <Route exact path='/cocktails/cocktail/:id'
                           render={(props) => <SpecificCocktail {...props}/>}/>
                    <Route exact path='/ingredient/:name'
                           render={(props) => <Ingredients {...props}/>}/>
                    <Route exact path='/'
                           render={(props) => <HomePage {...props}/>}/>
                    <Route exact path='*'
                           render={(props) => <ErrorPage {...props}/>}/>
                </Switch>
            </Suspense>
        </div>
          <AppFooter/>

          {/*Back to top button*/}
          {showButton &&
          <Button
              sx={{position: `fixed`, bottom: `100px`, right: `10px`, opacity: 0.6}}
              variant="contained"
              color={'button'}
              size='small'
              onClick={ () => {window.scrollTo({top: 0, behavior: "smooth"})} }
          >
              <ArrowDropUpIcon/>top
          </Button>}

      </ThemeProvider>
  )
}

export default App;
