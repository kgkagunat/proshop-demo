import React from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { Row, Col, Image, ListGroup, Card, Button} from 'react-bootstrap'
import Rating from '../components/Rating'
import Loader from '../components/Loader'
import Message from '../components/Message'
import { useGetProductDetailsQuery } from '../slices/productsApiSlice'

const ProductScreen = () => {
  const { id: productId } = useParams();

  const { data: product, isLoading, error } = useGetProductDetailsQuery(productId);

  return (
    <>
      <Link className='btn btn-light my-3' to='/'>Go Back</Link>

      { isLoading ? (<Loader />) : error ? (<Message variant='danger'> {error?.data?.message || error.error}</Message>) : 
      (<>
      <Row>
        {/* Image */}
        <Col md={5}> 
          <Image src={product.image} alt={product.name} fluid/>
        </Col>

        {/* Name, Rating, Price, Description */}
        <Col md={4}> 
          <ListGroup.Item variant='flush'><h3>{product.name}</h3></ListGroup.Item>
          <hr/>
          <ListGroup.Item><Rating value={product.rating} text={`${product.numReviews} reviews`} /></ListGroup.Item>
          <hr/>
          <ListGroup.Item>Price: ${product.price}</ListGroup.Item>
          <hr/>
          <ListGroup.Item>Description: {product.description}</ListGroup.Item>
        </Col>

        {/* Price, Status, Add to Cart */}
        <Col md={3}> 
          <Card>
            <ListGroup variant='flush'>

              <ListGroup.Item>
                <Row>
                  <Col>Price:</Col>
                  <Col><strong>${product.price}</strong></Col>
                </Row>
              </ListGroup.Item>

              <ListGroup.Item>
                <Row>
                  <Col>Status:</Col>
                  <Col><strong>{product.countInStock > 0 ? 'In Stock' : 'Out of Stock'}</strong></Col>
                </Row>
              </ListGroup.Item>

              <ListGroup.Item>
                <Button 
                className="btn-block" 
                type='button' 
                disabled={product.countInStock === 0}
                >
                  Add to Cart
                </Button>
              </ListGroup.Item>

            </ListGroup>
          </Card>
        </Col>
      </Row>
      </>) }
    </>
  )
}

export default ProductScreen