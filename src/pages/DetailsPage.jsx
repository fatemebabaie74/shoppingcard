import { Link, useParams } from 'react-router-dom';
import { useProductsDetail } from '../context/ProductContext';
import {SiOpenproject} from "react-icons/si";
import {IoMdPricetag} from "react-icons/io";
import {FaArrowLeft} from "react-icons/fa";
import Loder from "../components/Loader";
import styles from "./DetailsPage.module.css";



const DetailsPage = () =>{

  const {id} = useParams();

  const productDetail = useProductsDetail(+id);
  console.log(productDetail)
   if(!productDetail) return <Loder/>
  return <>
     <div className={styles.container}>
      <img src={productDetail.image} alt={productDetail.title} />

      <div className={styles.information}>
         <h3 className={styles.title}>{productDetail.title}</h3>
         <p className={styles.description}>{productDetail.description}</p>
         <p className={styles.category}> <SiOpenproject/> {productDetail.category}</p>
      
     
      
      
      <div>
        <span className={styles.price}> <IoMdPricetag/>{productDetail.price} $</span>
      <Link to="/products"><FaArrowLeft/><span>Back To Shop</span></Link>  
      
          </div>
      </div> 
     </div>
  </>
}

export default DetailsPage
