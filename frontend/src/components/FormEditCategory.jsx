import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams ,Link } from 'react-router-dom';

const FormEditCategory = () => {
    const [cate_name, setCateName] = useState("");
    const [status, setStatus] = useState("");
    const [prnt_id, setParentId] = useState("");
    const [msg, setMsg] = useState("");
    const navigate = useNavigate();
    const {id} = useParams();

    useEffect(()=>{
        const getCategoryById = async () => {
            try {
                const response = await axios.get(`http://localhost:5000/category/${id}`);
                setCateName(response.data.cate_name);
                setStatus(response.data.status);
                setParentId(response.data.prnt_id);
            } catch (error) {
                if(error.response){
                    setMsg(error.response.data.msg);
                }
            }
        };
        getCategoryById();
    }, [id]);

    const updateCategory = async (e) => {
        e.preventDefault();
        try {
            await axios.patch(`http://localhost:5000/category/${id}`, {
                cate_name: cate_name,
                status: status,
                prnt_id: prnt_id,
            });
            navigate("/category");
        } catch (error) {
            if(error.response){
                setMsg(error.response.data.msg);
            }
        }
    };

    useEffect(()=>{
        getParentCatList();       
    },[]);

    const getParentCatList = async() => {
        const response = await axios.get("http://localhost:5000/parentcatelist");
        setParentCatList(response.data);
    }
    
    const [parentCatList, setParentCatList] = useState([]); 


  return (
    <div id="content">
        <section>
            <div className="section-body contain-lg">
                {/* BEGIN VERTICAL FORM */}
                <div className="row">
                    <div className="col-lg-offset-1 col-md-8">
                        
                        <form className="form" onSubmit={updateCategory}>
                            <div className="card">
                                <div className="card-head style-primary">
                                <span className="col-sm-6"><header><strong>Edit New Category</strong></header></span>
                                <span className="col-sm-6 text-right"><Link class="btn ink-reaction btn-flat btn-loading-state" to="/category">Back to Category list</Link></span>
                                </div>
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-sm-6">
                                            <div className="form-group">
                                                <input type="text" className="form-control" value={cate_name} onChange={(e) => setCateName(e.target.value)} />
                                                <label htmlFor="Name">Category Name</label>
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="form-group">
                                                <select value={status} onChange={(e) => setStatus(e.target.value)} className="form-control">
                                                    <option value="1">Active</option>
                                                    <option value="2">Deactive</option>
                                                </select>
                                                <label htmlFor="Role">Status</label>
                                            </div>
                                        </div>
                                    </div>
                                </div>{/*end .card-body */}
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-sm-6">
                                            <div className="form-group">
                                                <select value={prnt_id} onChange={(e)=> setParentId(e.target.value)} className="form-control">
                                                    {parentCatList.map((catList) => (
                                                         <option value={catList.id}>{catList.cate_name}</option>
                                                    ))}
                                                </select>
                                                <label htmlFor="Role">Parent Category</label>
                                            </div>
                                        </div>
                                    </div>
                                </div>{/*end .card-body */}
                                <div className="card-actionbar">
                                    <div className="card-actionbar-row">
                                        <button type="submit" className="btn btn-primary ink-reaction">Update Category</button>
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

export default FormEditCategory;