import  { createContext, useContext, useEffect, useState } from 'react'
import api from "../services/config"


const ProductContext = createContext();


const ProductsProvider = ({children}) => {


const [products , setProducts] = useState([]);

useEffect(()=>{
    const fetchProducts = async () =>{
    try {
     const response = await api.get("/products");
        setProducts(response);
        console.log(response)
} catch (error) {
    console.log(error.message);
}
};
    fetchProducts();
},[]);

  return (
    <div>
      <ProductContext.Provider value={products}>
        {children}
      </ProductContext.Provider>
    </div>
  )
};

const useProducts = () =>{
  const products =  useContext(ProductContext);
  return products;
}


const useProductsDetail = (id)=>{
  const products =  useContext(ProductContext);
  const resault = products.find((product) => product.id === id);
  return resault;
}


export default ProductsProvider;
export{useProducts , useProductsDetail};
