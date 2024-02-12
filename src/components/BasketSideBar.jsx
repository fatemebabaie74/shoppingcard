import styles from "./BasketSideBar.module.css";
import {TbChecklist} from "react-icons/tb"
import {FaHashtag} from "react-icons/fa6"
import {BsPatchCheck} from "react-icons/bs"
const BasketSideBar = ({state , clickHandler}) => {
  return (
    <div className={styles.sidebar}>
      <div>
        <TbChecklist/>
        <p>Total:</p>
        <span>{state.total} $</span>
      </div>
      <div>
        <FaHashtag/>
        <p>Quantity:</p>
        <span>{state.itemsCounter}</span>
      </div>
      <div>
        <BsPatchCheck/>
        <p>Status:</p>
        <span>{!state.checkout && "Pendding..." }</span>
        
      </div>
      <button onClick={()=> clickHandler("CHECKOUT")}>Checkout</button>
    </div>
  );
}

export default BasketSideBar
