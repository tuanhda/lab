import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './MenuComponent';
import DishDetail from './DishdetailComponent';
import { DISHES } from '../shared/dishes';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import { Routes, Route, Navigate } from 'react-router-dom';
import ReactDOM from "react-dom/client";

class Main extends Component {

  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES,
      selectedDish: null
    };
  }

  onDishSelect(dishId) {
    this.setState({ selectedDish: dishId });
  }

  render() {
    const HomePage = () => {
      return (
        <Home />
      );
    }
    return (
      <div>
        <Header />
        <Routes>
          <Route path='/home' element={<Home />} />
          <Route exact path='/menu' element={<Menu dishes={this.state.dishes} />} />
          <Route path="*" element={<Navigate to="/home" replace />} />
        </Routes>
        <Footer />
      </div>
    );
  }
}

export default Main;