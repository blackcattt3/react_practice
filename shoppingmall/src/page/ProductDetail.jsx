import React from 'react'
import {useNavigate} from 'react-router-dom'
import { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'
import {Container, Row, Col, Dropdown} from 'react-bootstrap'

const ProductDetail = () => {
    let {id} = useParams()
    const [product, setProduct] = useState(null)
    const getProductDetail = async ()=>{
        let url = `http://localhost:4000/products/${id}`
        let response = await fetch(url);
        let data = await response.json();
        console.log("id", id)
        console.log(data)
        setProduct(data);
    }

    useEffect(()=>{
        getProductDetail()
    },[])

  return (
    <Container>
        <Row>
            <Col className='product-detail'>
                <img className="product-detail-img" src={product?.img}/>
            </Col>
            <Col>
                <div>{product?.title}</div>
                <div>₩{product?.price}</div>
                <div>{product?.choice?"Conscious Choice":""}</div>
                <Dropdown className='drop-down'>
                    <Dropdown.Toggle variant="outline-dark" id="dropdown-basic">
                        사이즈 선택
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        {product?.size.length > 0 &&
                        product.size.map((item)=>(
                            <Dropdown.Item href="#/action-1">{item}</Dropdown.Item>
                        ))}
                    </Dropdown.Menu>
                </Dropdown>
                <button>추가</button>
            </Col>
        </Row>
    </Container>
  )
}

export default ProductDetail
 


{/* <Dropdown className="drop-down">
              <Dropdown.Toggle variant="outline-dark" id="dropdown-basic">
                사이즈 선택
              </Dropdown.Toggle>

              <Dropdown.Menu>
                {product?.size.length > 0 &&
                  product.size.map((item) => (
                    <Dropdown.Item href="#/action-1">{item}</Dropdown.Item>
                  ))}
              </Dropdown.Menu>
            </Dropdown> */}