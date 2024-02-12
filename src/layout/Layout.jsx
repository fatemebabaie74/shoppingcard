import { Link } from "react-router-dom"
 import { FaCartShopping } from "react-icons/fa6";
import { useCart } from "../context/CartContext";
import styles from "./Layout.module.css";



const Layout = ({children}) => {

const [state] = useCart();
console.log(state.itemsCounter)



  return (
<>
<header  className={styles.header}>
  <Link to="/products">ShoppingCart</Link>
  <Link to="/checkout">
    <div> 
      <FaCartShopping/>
    {!!state.itemsCounter && <span>{state.itemsCounter}</span>}
    </div>
   
  </Link>
</header>


{children}


<footer className={styles.footer}>
  <p>Developed By Fateme</p>
</footer>
</>
  )
}

export default Layout
