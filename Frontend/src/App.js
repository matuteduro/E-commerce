import './App.css';
import Header from "./components/layout/Header/Header"
import {BrowserRouter, BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import React from "react";
import WebFont from 'webfontloader';
import Footer from "./components/layout/Footer/Footer"
import Home from "./components/Home/Home";
import ProductDetails from "./components/Product/ProductDetails"
import Products from "./components/Product/Products"
import Search from "./components/Product/Search"
import LoginSignUp from './components/User/LoginSignUp';
import store from "./store"
import { loadUser } from './actions/userAction';
import UserOptions from "./components/layout/Header/UserOptions"
import { useSelector } from 'react-redux';
import Profile from "./components/User/Profile"
import ProtectedRoute from './components/Route/ProtectedRoute';

function App() {

  const {isAuthenticated, user} = useSelector(state=>state.user)
  React.useEffect(() => {

    WebFont.load({
      google:{
        families: [ "Droid Sans", "Chilanka"],
      },
    });

    store.dispatch(loadUser())
  }, []);
  
  return (
    <Router>
      <Header/>
      {isAuthenticated && <UserOptions user={user} />}
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/product/:id" element={<ProductDetails/>}/>
        <Route path="/products" element={<Products/>}/>
        <Route path="/products/:keyword" element={<Products/>}/>
        <Route path="/search" element={<Search/>}/>
        <Route element={<ProtectedRoute/>}/>
          <Route path="/account" element={<Profile/>}/>
        <Route path="/login" element={<LoginSignUp/>}/>
      </Routes>
    <Footer/>
    </Router>
  );
}

export default App;
