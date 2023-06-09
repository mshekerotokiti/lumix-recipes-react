const Cart = ({ cartItems }) => {
  
  const recipe = cartItems[0]?.map((rec) => (
    <div className="cart-recipe" key={rec.id}>
      <img src={rec.image} alt={rec.name} />
      <p>{rec.name}</p>
    </div>
  ));

  const ingredients = cartItems[1]?.map((ingre) => (
    <li className="cart-list" key={ingre.id}>
      {ingre.name} - {ingre.quantity} - {ingre.aisle}
    </li>
  ));

  return (
    <div id="cart">
      <div id="cart-recipes">{recipe}</div>

      <div id="cart-ingredients">
        <ul>{ingredients}</ul>
      </div>
    </div>
  );
};

export default Cart;

