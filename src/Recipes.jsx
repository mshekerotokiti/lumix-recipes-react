import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

function Recipes({ recipes, postToCart, fetchSingleRecipe }) {
  let navigate = useNavigate();
  const [isFavorite, setIsFavorite] = useState(false);

  function favoriteRecipe(id) {
    console.log(isFavorite);
    setIsFavorite(!isFavorite);
    console.log(id);
    fetch(`http://localhost:9292/recipes/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        favorite: isFavorite,
      }),
    })};



  return (
    <Row>
      {recipes.map((recipe) => (
        <Col key={recipe.id}>
          <Card style={{ height: "430px", width: '17rem' }} id={recipe.id} >
          <Button type="button" class="btn-close btn-close-white" disabled aria-label="Close">x</Button>
            <Card.Img variant="top" src={recipe.image}/>
            <Card.Body>
              <Card.Title>{recipe.name}</Card.Title>
              <Button onClick={() => {postToCart(recipe)}}>Cart</Button>
              <Button
                variant="primary"
                onClick={() => {
                  console.log("HelloWorld!");
                  favoriteRecipe(recipe.id);
                }}
              >
                Favorite
              </Button>
              <Button className= "buttons" onClick={(e) => {
                fetchSingleRecipe(recipe.id)
                navigate('/singlerecipe')}}>Info</Button>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
}

export default Recipes
