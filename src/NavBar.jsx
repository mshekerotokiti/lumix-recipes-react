import {useNavigate} from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import ButtonGroup from 'react-bootstrap/Button'
import Navbar from 'react-bootstrap/Navbar';


function NavBar ({search , setSearch, fetchCartItems}){
    let navigate = useNavigate();
    const handleSearch = (event) => {
        setSearch(event.target.value)
    }
    return(
        <Navbar bg="dark"  className="justify-content-end">
        <img onClick={() => {navigate('/')}} src="" alt="QuickCartLogo" href="/" style={{disply:'flex', justifyContent:'left'}}/> 
        <ButtonGroup aria-label="Basic example" >
            <Button onClick={(e) => {
                console.log("hello!")
                fetch("http://localhost:9292/cart_items", {
                    method: "DELETE",
                })
            }}>
                 New Cart
                 </Button>
            <Button onClick={() => {fetchCartItems()
            navigate('/Cart')}} className = "Cart">
                 Cart
            </Button>
        </ButtonGroup>
      </Navbar>
    )
}

export default NavBar


