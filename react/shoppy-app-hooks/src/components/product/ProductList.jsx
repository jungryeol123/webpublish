import React from 'react';
import { useEffect,useState,useContext } from 'react';
import { ProductAvatar } from './ProductAvatar.jsx';
import { axiosData,groupByRows } from '../../utils/dataFetch.js'
import { Link } from 'react-router-dom';
import { useProduct } from '../../hooks/useProduct.js';
import { ProductContext } from '../../context/ProductContext.js';

export function ProductList() {
    
    const { productList } = useContext(ProductContext);
    const { createProduct } = useProduct();
    const [rows,setRows] = useState([]);
    const [number,setNumber] = useState(3);

    useEffect(()=> {
      //1. createProduct
      createProduct(number);
      },[number]);

    return (
        <div>
          {productList &&  productList.map((rowArray,idx) =>
            <div className='product-list' key ={idx}>
              {rowArray && rowArray.map(product =>
              <Link to= {`/products/${product.pid}`}>
                <ProductAvatar img={product.image}/>
              </Link>
            )}
        </div>
            )}
        </div>
    );
}