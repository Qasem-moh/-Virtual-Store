import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from './store/actions';
import { Modal, Button } from 'react-bootstrap';

function Products(props) {
  const { productList, category } = useSelector((state) => ({
    productList: state.productsReducer,
    category: state.categoriesReducer
  }));

  const dispatch = useDispatch();

  const [show, setShow] = useState(false);
  const [viewProduct, setViewProduct] = useState({})

  const handleClose = () => setShow(false);
  const handleShow = (product) => {
    setViewProduct(product)
    setShow(true);
  } 

  return (
    <div className="productSection">
      <div className="productSectionHeading">
        <h2>{category.activeCategory.displayName}</h2>
        <p>{category.activeCategory.description}</p>
      </div>
      <div className="productContainer">
        {productList.products.map((product, idx) => (
          <div key={idx} className="product">
            <img src={product.imgUrl} alt="" className="productImg" />
            <p className="productName">{product.name}</p>
            <p className="productDescription">{product.description}</p>
            <p className="productInventory">IN STOCK ({product.inventory})</p>
            <div className="productFooter">
              {product.inventory ? (
                <p onClick={() => dispatch(addToCart(product))}>ADD TO CART</p>
              ) : (
                <p>OUT OF STOCK</p>
              )}
              <p onClick={() => handleShow(product)}>VIEW DETAILS</p>
            </div>
          </div>
        ))}
        <Modal show={show} onHide={handleClose} centered>
          <Modal.Header>
            <Modal.Title>{viewProduct.name}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <img src={viewProduct.imgUrl} alt="" className="productModalImg" />
            <Modal.Title className="productDescription">{viewProduct.description}</Modal.Title>
            <Modal.Title className="productInventory">IN STOCK ({viewProduct.inventory})</Modal.Title>
            <div className="productFooter">
              {viewProduct.inventory ? (
                <Button onClick={() => dispatch(addToCart(viewProduct))}>ADD TO CART</Button>
              ) : (
                <p>OUT OF STOCK</p>
              )}
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            {/* <Button variant="primary" onClick={handleClose}>
              Save Changes
            </Button> */}
          </Modal.Footer>
        </Modal>
      </div>
    </div>
  );
}

export default Products;
