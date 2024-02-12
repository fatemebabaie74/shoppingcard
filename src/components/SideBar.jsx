import React from 'react'
import{FaListUl} from "react-icons/fa"
import { createQueryObject } from '../helpers/helper';
import styles from "./SideBar.module.css";


const SideBar = ({query , setQuery}) => {

const categories=[
 {id :"1" , type: "All"},
 {id :"2" , type: "Electronics"},
 {id :"3" , type: "Jewelery"},
 {id :"4" , type: "Men's Clothing"},
 {id :"5" , type: "Women's Clothing"},
]

    const categoryHandler = (event) =>{
        const {tagName} = event.target;
        const category = event.target.innerText.toLowerCase()
      
        if(tagName !== "LI") return;
        setQuery(query => createQueryObject(query , {category}))
        };


        
  return (
    <div className={styles.sidebar}>
  <div>
    <FaListUl/>
  <p>categories</p>
  </div>
  
   <ul onClick={categoryHandler}>
 {
  categories.map(item=>(<li className={item.type.toLowerCase()===query.category ? styles.selected : null} key={item.id}>{item.type}</li>
  ))}
 </ul>
 </div>
   
  )
}

export default SideBar

