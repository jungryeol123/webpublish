import React from 'react';
import { useEffect,useState } from 'react';
import { ProductAvatar } from './ProductAvatar.jsx';
import { axiosData,groupByRows } from '../../utils/dataFetch.js'
import { Link } from 'react-router-dom';

export function ProductList() {
    
    const [rows,setRows] = useState([]);
    const [number,setNumber] = useState(3);

    useEffect(()=> {
      const load = async () => {
        const jsonData = await axiosData('/data/products.json')
        const rows = groupByRows(jsonData,number);
        setRows(rows);
          }
        load();
      },[number]);

      

    return (
        <div>
          {rows && rows.map((rowArray,idx) =>
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