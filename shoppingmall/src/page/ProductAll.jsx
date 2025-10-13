import React from 'react'
import { useEffect, useState } from 'react';
import ProductCard from '../component/ProductCard';

const ProductAll = () => {
    const [productList, setProductList] = useState([]);

    const getProducts = async ()=>{
        let url = new URL('http://localhost:4000/products');
        let response = await fetch(url);
        let data = await response.json();
        setProductList(data);
        console.log(data);
    }

    useEffect(()=>{
        getProducts()
    },[])
    
  return (
    <div>
      <ProductCard/>
    </div>
  )
}

export default ProductAll

// api호출은 useEffect를 이용해서 한다!!
// 데이터를 ui에 보여주기 위해서는 useState에 저장해야 한다.
