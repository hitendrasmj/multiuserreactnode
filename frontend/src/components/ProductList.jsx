import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const ProductList = () => {
  
  const [products, setProducts] = useState([]);
  
  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () =>{
    const response = await axios.get("http://localhost:5000/products");
    setProducts(response.data);
  };

  const deleteProduct = async (productId) => {
    await axios.delete(`http://localhost:5000/products/${productId}`);
    getProducts();
  };

  return (
    <div id="content">
        <section>
            <div className="section-body contain-lg">
                {/* BEGIN DEFAULT TABLE */}
                <div className="row">
                    <div className="col-lg-offset-1 col-md-8">
                        <div className="card">
                            <div className="card-head style-primary">
                                <span className="col-sm-6"><header><strong>List of Products</strong></header></span>
                                <span className="col-sm-6 text-right"><Link class="btn ink-reaction btn-flat btn-loading-state" to="/products/add">Add Product</Link></span>
                            </div>
                            <div className="card-body">
                                <table className="table table-striped table-hover no-margin">
                                    <thead>
                                        <tr>
                                            <th>#</th>
                                            <th>Product Name</th>
                                            <th>Price</th>
                                            <th>Created By</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                    {products.map((product, index) => (
                                        <tr classNameName="gradeX" key={product.uuid}>
                                            <td>{index + 1}</td>
                                            <td>{product.name}</td>
                                            <td>{product.price}</td>
                                            <td>{product.user.name}</td>
                                            <td>
                                                <Link className="btn btn-icon-toggle" data-toggle="tooltip" data-placement="top" data-original-title="Edit row" to={`/products/edit/${product.uuid}`} classNameName="button is-small is-info"><i className="fa fa-pencil"></i></Link>
                                                
                                                <button type="button" onClick={() => deleteProduct(product.uuid)} className="btn btn-icon-toggle" data-toggle="tooltip" data-placement="top" data-original-title="Delete row"><i className="fa fa-trash-o"></i></button>
                                            </td>
                                        </tr>
                                    ))}
                                    </tbody>
                                </table>
                            </div>{/*end .card-body */}
                        </div>{/*end .card */}
                    </div>{/*end .col */}
                </div>{/*end .row */}
                {/* END DEFAULT TABLE */}
            </div>{/*end .section-body */}
        </section>
    </div>
  )
}

export default ProductList;