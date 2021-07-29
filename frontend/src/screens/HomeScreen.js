import React, { useEffect } from 'react';

import {
  Col,
  Row,
} from 'react-bootstrap';
import {
  useDispatch,
  useSelector,
} from 'react-redux';

import { listProducts } from '../actions/productActions';
import Product from '../components/Product';

const HomeScreen = () => {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;
  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  return (
    <>
      <h1>Latest Products</h1>
      {loading ? (
        <h1>Loading...</h1>
      ) : error ? (
        <h2>Error occurres {error}</h2>
      ) : (
        <Row>
          {products.map((product) => (
            <Col sm={12} md={6} lg={4} xl={3} key={product._id}>
              <Product product={product} />
            </Col>
          ))}
        </Row>
      )}
    </>
  );
};

export default HomeScreen;
