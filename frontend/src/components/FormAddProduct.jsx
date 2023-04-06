import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';

const FormAddProduct = () => {
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [msg, setMsg] = useState("");
    const navigate = useNavigate();

    const saveProduct = async (e) => {
        e.preventDefault();
        try {
            await axios.post("http://localhost:5000/products", {
                name: name,
                price: price,
            });
            navigate("/products");
        } catch (error) {
            if(error.response){
                setMsg(error.response.data.msg);
            }
            
        }
    };
  return (
    <div id="content">
        <section>
            <div className="section-body contain-lg">
                {/* BEGIN VERTICAL FORM */}
                <div className="row">
                    <div className="col-lg-offset-1 col-md-8">
                        <form className="form" onSubmit={saveProduct}>
                            <div className="card">
                                <div className="card-head style-primary">
                                <span className="col-sm-6"><header><strong>Add New Product</strong></header></span>
                                <span className="col-sm-6 text-right"><Link class="btn ink-reaction btn-flat btn-loading-state" to="/products">Back to product list</Link></span>
                                </div>
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-sm-6">
                                            <div className="form-group">
                                                <input type="text" className="form-control" value={name} onChange={(e) => setName(e.target.value)} />
                                                <label htmlFor="Name">Product Name</label>
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="form-group">
                                                <input type="text" className="form-control" value={price} onChange={(e) => setPrice(e.target.value)} />
                                                <label htmlFor="Price">Price</label>
                                            </div>
                                        </div>
                                    </div>
                                </div>{/*end .card-body */}
                                <div className="card-actionbar">
                                    <div className="card-actionbar-row">
                                        <button type="submit" className="btn btn-primary ink-reaction">Create Product</button>
                                    </div>
                                </div>
                            </div>{/*end .card */}
                        </form>
                    </div>{/*end .col */}
                </div>{/*end .row */}
                {/* END VERTICAL FORM */}
            </div>
        </section>
    </div>
  )
}

export default FormAddProduct;