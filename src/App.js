import './App.css';
import React from 'react';
import { ToastContainer } from 'react-toastify'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from './Components/footer/Footer';
import SignIn from './Components/login/signIn';
import SignUp from './Components/login/signUp';
import Navbar from './Components/navbar/navbar';
import Cart from './Components/shopping cart/cart';
import Favourite from './Components/favourite/favourite';
import Home from './Components/home page/home';
import ItemDisplay from './Components/display/item_display';
import ItemView from './Components/display/item view/item_view';
import CheckOut from './Components/checkout/checkout';
import User from './Components/user/user';
import { AppProvider } from './Context/AppContext';
import 'react-toastify/dist/ReactToastify.css';
import SearchDisplay from './Components/display/searchDisplay';

function App() {
  return (
    <div className="App">
      <AppProvider>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route>
              <Route path="/" element={<Home />} />
              <Route path="i/:id/:name" element={<ItemView />} />
              <Route path="d/:id" element={<ItemDisplay />} />
              <Route path="d/:id/:cate" element={<ItemDisplay />} />
              <Route path="s/:content" element={<SearchDisplay />} />
              <Route path="Checkout" element={<CheckOut />} />
              <Route path="User" element={<User />} />
              <Route path="Cart" element={<Cart />} />
              <Route path="Home" element={<Home />} />
              <Route path="Favourite" element={<Favourite />} />
              <Route path="SignIn" element={<SignIn />} />
              <Route path="SignUp" element={<SignUp />} />
            </Route>
          </Routes>
          <Footer />
        </BrowserRouter>
      </AppProvider>
      <ToastContainer hideProgressBar />
    </div>
  );
}

export default App;
