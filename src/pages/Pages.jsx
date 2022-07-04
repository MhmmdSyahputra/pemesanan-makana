import React from "react"
import { BrowserRouter as Router, Route } from "react-router-dom"
import Footer from "../components/Footer"
import Header from "../components/Header"
import Home from "../views/Home"
import Keranjang from "../views/Keranjang"
import Product from "../views/Product"
const Pages = () => {
  return (
    <>
      <Router>
        <Header />

        <Route exact path='/' component={Home} />
        <Route exact path='/keranjang' component={Keranjang} />
        <Route exact path='/productdetail/:id' component={Product} />

      </Router>
      <Footer />
    </>
  )
}

export default Pages
