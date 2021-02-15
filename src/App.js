import React from 'react';
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import styled from 'styled-components'

// -- Components
import ErrorBoundary from "./components/ErrorBoundary/ErrorBoundary";

// -- Views
import HomeView from './views/HomeView';
import NoMatchView from './views/NoMatchView';

const Wrapper = styled.div`
  margin: 40px auto;
  width: 1000px;
`

const App = () => (

    <Router>

        <div className="App">

            <Switch>

                <Route exact path="/">
                    <ErrorBoundary>
                        <Wrapper>
                            Hi !
                            {/*<HomeView/>*/}
                        </Wrapper>
                    </ErrorBoundary>
                </Route>

                <Route path="*">
                    <ErrorBoundary>
                        <NoMatchView/>
                    </ErrorBoundary>
                </Route>

            </Switch>

        </div>

    </Router>
)

export default App;
