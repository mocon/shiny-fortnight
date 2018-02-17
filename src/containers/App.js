import React from "react"
import { Switch, Route, Redirect } from "react-router"
import { Provider } from "react-redux"
import { BrowserRouter as Router } from "react-router-dom"
import { ThemeProvider } from "styled-components"
import styled from "styled-components"
import { Helmet } from "react-helmet"

import { store, history } from "../redux"
import theme from "../theme"
import Header from "../components/Header"
import ArtworksList from "./ArtworksList"
import Info from "../components/Info"

const Wrapper = styled.div`
  background: ${props => props.theme.colors.background};
  color: ${props => props.theme.colors.default};
  display: flex;
  flex-direction: column;
  height: 100%;
  min-height: 100vh;
`

const View = styled.div`
  margin: 30px;
`

export default (props = {}) => (
  <Provider store={store}>
    <Router history={history}>
      <ThemeProvider theme={theme}>
        <Wrapper>
          <Helmet>
            <meta charSet="utf-8" />
            <title>Saatchi Sample</title>
            <meta httpEquiv="x-ua-compatible" content="ie=edge" />
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
            />
            <link
              rel="stylesheet"
              href="//maxcdn.bootstrapcdn.com/font-awesome/4.6.3/css/font-awesome.min.css"
            />
            <link
              rel="stylesheet"
              href="https://fonts.googleapis.com/css?family=Crimson+Text:400,600,400italic,600italic"
            />
          </Helmet>

          <Header />

          <View>
            <Switch>
              <Route exact path="/artworks" render={() => <ArtworksList />} />
              <Route exact path="/instructions" render={() => <Info />} />
              <Route
                exact
                path="/"
                render={() => <Redirect to="/artworks" push />}
              />
              <Route component={() => <p>No Matching Routes</p>} />
            </Switch>
          </View>
        </Wrapper>
      </ThemeProvider>
    </Router>
  </Provider>
)
