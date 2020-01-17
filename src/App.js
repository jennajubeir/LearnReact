import React, { useEffect, useState } from "react";
import "./App.css";
import firebase from "firebase/app";
import "firebase/database";
import ProductGridView from "./components/ProductGridView";
import ProductCard from "./components/ProductCard";
import "./components/ProductCard.css";
const firebaseConfig = {
  apiKey: "AIzaSyBS4qjaorkbIIy3Xxsv6_p9TYotcjs2Mlw",
  authDomain: "learnreact-1d4bc.firebaseapp.com",
  databaseURL: "https://learnreact-1d4bc.firebaseio.com",
  projectId: "learnreact-1d4bc",
  storageBucket: "learnreact-1d4bc.appspot.com",
  messagingSenderId: "303319913712",
  appId: "1:303319913712:web:c50706ebce8652217d9e35"
};

firebase.initializeApp(firebaseConfig);

const App = () => {
  const [data, setData] = useState({});
  const products = Object.values(data);
  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch("./data/products.json");
      const json = await response.json();
      setData(json);
    };
    fetchProducts();
  }, []);

  return <ProductGridView products={products} />;
};

export default App;
