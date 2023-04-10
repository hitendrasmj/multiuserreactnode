import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const CategoryList = () => {
  
  const [categories, setCategory] = useState([]);
  
  useEffect(() => {
    getCategory();
  }, []);

  const getCategory = async () =>{
    const response = await axios.get("http://localhost:5000/category");
    setCategory(response.data);
  };

  const deleteCategory = async (categoryId) => {
    await axios.delete(`http://localhost:5000/category/${categoryId}`);
    getCategory();
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
                                <span className="col-sm-6"><header><strong>List of Categories</strong></header></span>
                                <span className="col-sm-6 text-right"><Link class="btn ink-reaction btn-flat btn-loading-state" to="/category/add">Add Category</Link></span>
                            </div>
                            <div className="card-body">
                                <table className="table table-striped table-hover no-margin">
                                    <thead>
                                        <tr>
                                            <th>#</th>
                                            <th>Category Name</th>
                                            <th>Status</th>
                                            <th>Created By</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                    {categories.map((category, index) => (
                                        <tr classNameName="gradeX" key={category.uuid}>
                                            <td>{index + 1}</td>
                                            <td>{category.cate_name}</td>
                                            <td>{category.status}</td>
                                            <td>{category.user.name}</td>
                                            <td>
                                                <Link className="btn btn-icon-toggle" data-toggle="tooltip" data-placement="top" data-original-title="Edit row" to={`/category/edit/${category.uuid}`} classNameName="button is-small is-info"><i className="fa fa-pencil"></i></Link>
                                                
                                                <button type="button" onClick={() => deleteCategory(category.uuid)} className="btn btn-icon-toggle" data-toggle="tooltip" data-placement="top" data-original-title="Delete row"><i className="fa fa-trash-o"></i></button>
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

export default CategoryList;