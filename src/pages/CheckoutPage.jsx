import Basket from "../components/Basket";
import BasketSideBar from "../components/BasketSideBar";
import {useCart} from "../context/CartContext"
import styles from "./CheckoutPage.module.css"


const CheckoutPage = () => {


  const [state , dispatch ] = useCart();
  // console.log(state)
  const clickHandler = (type , payload )=>{
    dispatch({type , payload})
  }

  // if(!state.itemsCounter){
  //   return (
  //     <div>
  //       <p>Empty</p>
  //     </div>
  //   )
  // }
  return (
    <div className={styles.container}>
      <BasketSideBar state={state} clickHandler={clickHandler}/>
       <div className={styles.products}>
        {
          state.selectedItems.map(product=> <Basket key={product.id} data={product} clickHandler={clickHandler}/>)
        }
       </div>
    
    </div>
  )
}

export default CheckoutPage
