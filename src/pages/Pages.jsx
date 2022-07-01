import React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Footer from "../components/Footer"
import Header from "../components/Header"
import Home from "../views/Home"
import Menu from "../views/Menu"
const Pages = () => {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/menu' component={Menu} />
        </Switch>
      </Router>
      <Footer />
    </>
  )
}

export default Pages
