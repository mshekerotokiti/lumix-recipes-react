import Recipes from "./Recipes";
import SingleRecipe from "./SingleRecipe";
import {useEffect, useState} from "react";
import NavBar from "./NavBar";
import Search from "./Search"

const RecipePage = ({postToCart, single, fetchCartItems}) => {
const [search, setSearch] = useState("")
const[recipes,setRecipe]= useState([])
const[dropDown,setDropDown] = useState("All")

    

    const fetchRecipe = async() => {
        let req = await fetch('http://localhost:9292/recipes')
        let res   = await req.json()        
        setRecipe(res)
        
    } 

    useEffect(() =>{
        fetchRecipe()
    },[])

    const filteredRecipes = recipes.filter(recipe => {
        return recipe.name.toLowerCase().includes(search.toLowerCase())
    }
    )

    const dropDownRecipes = filteredRecipes.filter(recipe => { 
        if (dropDown === "All") return true;
        else if (dropDown === "Favorites") return recipe.favorite
        return recipe.category === dropDown;
    });



    return ( 
        <div>
            <div id='recipe-page'>
                <NavBar fetchCartItems = {fetchCartItems}/>
                <Search search={search} setSearch={setSearch} setDropDown={setDropDown} />
                <Recipes recipes = {dropDownRecipes} fetchSingleRecipe={single} postToCart={postToCart}/>
            </div>
        </div>
     );
}
 
export default RecipePage;
