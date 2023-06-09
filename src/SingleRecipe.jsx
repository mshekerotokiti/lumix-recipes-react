import Figure from 'react-bootstrap/Figure'
import Table from 'react-bootstrap/Table';

const SingleRecipe = ({ singleRecipe }) => {
  return (
    <>
      <Figure className="single-recipe">
        <Figure.Image src={singleRecipe[0].image} alt="" width={250} height={180} />
        <Figure.Caption>{singleRecipe[0].name}</Figure.Caption>
      </Figure>
      <div id="instructions">
        <h4>Cooking Instructions:</h4>
        <br />
        <p>{singleRecipe[0].instruction}</p>
      </div>
      
    </>
  );
};

export default SingleRecipe;
