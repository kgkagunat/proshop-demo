import React from 'react'
import { useEffect, useState } from 'react'
import { Row, Col } from 'react-bootstrap'
import Product from '../components/Product'
import axios from 'axios'

const HomeScreen = () => {
  const [products, setProducts] = useState([]); // State for Products

  useEffect(() => {
    const fetchProducts = async () => {
      const { data } = await axios.get('/api/products'); // Fetch Products from backend
      setProducts(data); // Set Products in state
    }
    fetchProducts(); // Fetch Products
  }, []);

  return (
    <>
        <h1>Latest Products</h1> {/* Map through Products */}
        <Row>
            {products.map((product) => (
                <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                    <Product product={product} />
                </Col>
            ))}
        </Row>
    </>
  )
}

export default HomeScreen