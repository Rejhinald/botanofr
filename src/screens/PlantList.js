// import React, { useEffect } from "react";
// import { LinkContainer } from "react-router-bootstrap";
// import { Table, Button, Row, Col } from "react-bootstrap";
// import Message from "../components/Message";
// import Loader from "../components/Loader";
// import { useDispatch, useSelector } from "react-redux";
// import {
//   listPlants,
//   listPlantDetails,
//   createPlants,
// } from "../actions/plantActions";

// import { PLANT_CREATE_RESET } from "../constants/plantConstants";
// import { useLocation, useNavigate } from "react-router-dom";

// function PlantListScreen({ match, history }) {
//   const dispatch = useDispatch();
//   const location = useLocation();
//   const navigation = useNavigate();

//   const productList = useSelector((state) => state.productList);
//   const { products, pages, page, loading, error } = productList;

//   const productDelete = useSelector((state) => state.productDelete);
//   const {
//     success: successDelete,
//     loading: loadingDelete,
//     error: errorDelete,
//   } = productDelete;

//   const productCreate = useSelector((state) => state.productCreate);
//   const {
//     product: createdProduct,
//     success: successCreate,
//     loading: loadingCreate,
//     error: errorCreate,
//   } = productCreate;

//   const userLogin = useSelector((state) => state.userLogin);
//   const { userInfo } = userLogin;

//   let keyword = location.search;

//   useEffect(() => {
//     dispatch({ type: PRODUCT_CREATE_RESET });

//     if (!userInfo.admin) {
//       navigation("/login");
//     }

//     if (successCreate) {
//       navigation(`/admin/product/${createdProduct._id}/edit`);
//     } else {
//       dispatch(getListProducts(keyword));
//     }
//   }, [
//     dispatch,
//     history,
//     userInfo,
//     successDelete,
//     successCreate,
//     createdPlants,
//     keyword,
//   ]);

//   /* HANDLER */
//   const deleteHandler = (id) => {
//     if (window.confirm("Are you sure you want to delete this product ?")) {
//       dispatch(deleteProduct(id));
//     }
//   };

//   const createProcutHandler = () => {
//     dispatch(createProduct());
//   };

//   return (
//     <div>
//       <Row className="align-items-center">
//         <Col>
//           <h1>Products</h1>
//         </Col>

//         <Col className="text-end">
//           <Button className="my-3" onClick={createProcutHandler}>
//             <i className="fas fa-plus"></i> Create Product
//           </Button>
//         </Col>
//       </Row>

//       {loadingCreate && <Loader />}
//       {errorCreate && <Message variant="danger">{errorCreate}</Message>}

//       {loadingDelete && <Loader />}
//       {errorDelete && <Message variant="danger">{errorDelete}</Message>}

//       {loading ? (
//         <Loader />
//       ) : error ? (
//         <Message variant="danger">{error}</Message>
//       ) : (
//         <div>
//           <Table striped bordered hover responsive className="table-lg">
//             <thead>
//               <tr>
//                 <th>ID</th>
//                 <th>NAME</th>
//                 <th>PRICE</th>
//                 <th>STOCKS</th>
//                 <th>RATES</th>
//                 <th>REVIEWS</th>

//                 <th></th>
//               </tr>
//             </thead>

//             <tbody>
//               {products.map((product) => (
//                 <tr key={product._id}>
//                   <td>{product._id}</td>
//                   <td>{product.name}</td>
//                   <td>₱{product.price}</td>
//                   <td>{product.countInStock}</td>
//                   <td>{product.rating}</td>
//                   <td>{product.numReviews}</td>

//                   <td>
//                     <LinkContainer to={`/admin/product/${product._id}/edit`}>
//                       <Button variant="light" className="btn-sm">
//                         <i className="fas fa-edit"></i>
//                       </Button>
//                     </LinkContainer>

//                     <Button
//                       variant="danger"
//                       className="btn-sm"
//                       onClick={() => deleteHandler(product._id)}
//                     >
//                       <i className="fas fa-trash"></i>
//                     </Button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </Table>
//         </div>
//       )}
//     </div>
//   );
// }

// export default PlantListScreen;
