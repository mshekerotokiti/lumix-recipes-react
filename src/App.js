import React, { useState, useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RecipePage from "./RecipePage";
import Cart from "./Cart";
import NavBar from "./NavBar";
import SingleRecipe from "./SingleRecipe";
import { Auth } from "./Auth";

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [singleRecipe, setSingleRecipe] = useState([]);

  const postToCart = async (recipe) => {
    console.log(recipe.id);
    let req = await fetch("http://localhost:9292/cart_items", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        recipe_id: recipe.id,
      }),
    });
    let res = await req.json();
    setCartItems(res);
    console.log(res);
  };

  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        const response = await fetch("http://localhost:9292/recipes");
        const data = await response.json();
        const recipe = data[0]; // Assuming you want the first recipe from the response
        postToCart(recipe); // Pass the fetched recipe object to postToCart
      } catch (error) {
        console.log("Error fetching recipe:", error);
      }
    };

    fetchRecipe(); // Call fetchRecipe to fetch the recipe object
  }, []);

  const fetchSingleRecipe = (id) => {
    console.log(id);
    fetch(`http://localhost:9292/recipes/${id}`)
      .then((res) => res.json())
      .then((res) => setSingleRecipe(res));
    console.log(singleRecipe);
  };

  const fetchCartItems = async () => {
    let req = await fetch("http://localhost:9292/cart_items");
    let res = await req.json();
    setCartItems(res);
    console.log(cartItems);
  };

  useEffect(() => {
    fetchCartItems();
  }, []);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Auth />,
    },
    {
      path: "/recipe",
      element: (
        <>
          <RecipePage
            singleRecipe={singleRecipe}
            postToCart={postToCart}
            fetchCartItems={fetchCartItems}
          />
        </>
      ),
    },
    {
      path: "/singlerecipe",
      element: (
        <>
          <NavBar fetchCartItems={fetchCartItems} />
          <SingleRecipe singleRecipe={singleRecipe} />
        </>
      ),
    },
    {
      path: "/cart",
      element: (
        <>
          <NavBar fetchCartItems={fetchCartItems} />
          <Cart
            cartItems={cartItems}
            setCartItems={setCartItems}
            addToCart={postToCart}
          />
        </>
      ),
    },
    {
      path: "*",
      element: <h1>404 not found!</h1>,
    },
  ]);

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
