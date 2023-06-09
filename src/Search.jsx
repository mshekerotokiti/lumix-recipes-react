import InputGroup from 'react-bootstrap/InputGroup'

function Search ({search,setSearch,setDropDown}){
    
  
    return( 

     <div id = "searchbar" >
        <nav class="navbar navbar-light bg-light">
            <div class="container-fluid">
                <form class="d-flex">
                    <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" value = {search} onChange = {(e) => {setSearch(e.target.value)}}/>
                        <button class="btn btn-outline-success" type="submit">Search</button>
                </form>
           </div>              
        </nav>
                        <br/>
                    <select name="filter" onChange={(e) => setDropDown(e.target.value)}>
                        <option value="All">Filter by category</option>
                        <option>Favorites</option>
                        <option value="Beef">Beef</option>
                        <option value="Breakfast">Breakfast</option>
                        <option value="Chicken">Chicken</option>
                        <option value="Dessert">Dessert</option>
                        <option value="Goat">Goat</option>
                        <option value="Lamb">Lamb</option>
                        <option value="Miscellaneous">Miscellaneous</option>
                        <option value="Pasta">Pasta</option>
                        <option value="Pork">Pork</option>
                        <option value="Seafood">Seafood</option>
                        <option value="Side">Side</option>
                        <option value="Starter">Starter</option>
                        <option value="Vegan">Vegan</option>
                        <option value="Vegetarian">Vegetarian</option>
                        </select>
    </div>

    )
}

export default Search
