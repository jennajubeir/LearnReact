import React, { useEffect, useState } from "react";
import "./App.css";
import "./components/Cart.css";
import firebase from "firebase/app";
import "firebase/database";
import ProductGridView from "./components/ProductGridView";
import ProductCard from "./components/ProductCard";
import "./components/ProductCard.css";
import CartDisplay from "./components/Cart";
import Button from "@material-ui/core/Button";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import "rbx/index.css";
import { Title, Message } from "rbx";

const firebaseConfig = {
  apiKey: "AIzaSyBS4qjaorkbIIy3Xxsv6_p9TYotcjs2Mlw",
  authDomain: "learnreact-1d4bc.firebaseapp.com",
  databaseURL: "https://learnreact-1d4bc.firebaseio.com",
  projectId: "learnreact-1d4bc",
  storageBucket: "learnreact-1d4bc.appspot.com",
  messagingSenderId: "303319913712",
  appId: "1:303319913712:web:c50706ebce8652217d9e35"
};

require("firebase/auth");
require("firebase/firestore");

const uiConfig = {
  signInFlow: "popup",
  signInOptions: [firebase.auth.GoogleAuthProvider.PROVIDER_ID],
  callbacks: {
    signInSuccessWithAuthResult: () => false
  }
};

const SignIn = () => (
  <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
);

const Welcome = ({ user }) => (
  <Message color="info">
    <Message.Header>
      Welcome, {user.displayName}
      <Button primary onClick={() => firebase.auth().signOut()}>
        Log out
      </Button>
    </Message.Header>
  </Message>
);

const Banner = ({ user, title }) => (
  <React.Fragment>{user ? <Welcome user={user} /> : <SignIn />}</React.Fragment>
);

firebase.initializeApp(firebaseConfig);

const App = () => {
  const [data, setData] = useState({});
  const products = Object.values(data);
  const [itemsInCart, setCartProducts] = useState({});
  const [cartPrice, setCartPrice] = useState(0);
  const [inventory, setInventory] = useState({});
  const [user, setUser] = useState(null);

  useEffect(() => {
    firebase.auth().onAuthStateChanged(setUser);
  }, []);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch("./data/products.json");
      const json = await response.json();
      setData(json);
    };
    fetchProducts();

    const fetchInventory = async () => {
      const inventoryResponse = await fetch("./data/inventory.json");
      const inventoryJson = await inventoryResponse.json();
      setInventory(inventoryJson);
    };
    fetchInventory();
  }, []);

  return (
    <div>
      <p className="title-page"> JENNA'S CLOTHING COMPANY</p>
      <Banner user={user}> </Banner>
      <ProductGridView
        products={products}
        itemsInCart={itemsInCart}
        setCartProducts={setCartProducts}
        cartPrice={cartPrice}
        setCartPrice={setCartPrice}
        inventory={inventory}
        setInventory={setInventory}
      />
      <div id="cart-display">
        <CartDisplay
          products={products}
          itemsInCart={itemsInCart}
          setCartProducts={setCartProducts}
          cartPrice={cartPrice}
          setCartPrice={setCartPrice}
          inventory={inventory}
          setInventory={setInventory}
        />
      </div>
    </div>
  );
};

export default App;
