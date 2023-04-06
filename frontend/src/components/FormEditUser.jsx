import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams, Link } from 'react-router-dom';

const FormEditUser = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confPassword, setConfPassword] = useState("");
  const [role, setRole] = useState(""); 
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();
  const {id} = useParams();
  
  useEffect(()=>{
    const getUserById = async()=>{
        try {
            const response = await axios.get(`http://localhost:5000/users/${id}`);
            setName(response.data.name);
            setEmail(response.data.email);
            setRole(response.data.role);
        } catch (error) {
            if(error.response){
                setMsg(error.response.data.msg);
            }
        }
    };
    getUserById();
  }, [id]);  

  const updateUser = async(e) => {
      e.preventDefault();
       
      try {
        await axios.patch(`http://localhost:5000/users/${id}`, {
            name: name,
            email: email,
            password: password,
            confPassword: confPassword,
            role: role,     
        });
        navigate("/users"); 
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
                        <form className="form" onSubmit={updateUser}>
                            <div className="card">
                                <div className="card-head style-primary">
                                <span className="col-sm-6"><header><strong>Update User</strong></header></span>
                                <span className="col-sm-6 text-right"><Link class="btn ink-reaction btn-flat btn-loading-state" to="/users">Back to user list</Link></span>
                                </div>
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-sm-6">
                                            <div className="form-group">
                                                <input type="text" className="form-control" value={name} onChange={(e) => setName(e.target.value)} />
                                                <label htmlFor="Name">Name</label>
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="form-group">
                                                <input type="text" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} />
                                                <label htmlFor="Email">Email</label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <select value={role} onChange={(e) => setRole(e.target.value)} className="form-control">
                                            <option value="admin">Admin</option>
                                            <option value="user">User</option>
                                        </select>
                                        <label htmlFor="Role">Role</label>
                                    </div>
                                    <div className="form-group">
                                        <input type="password" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)} />
                                        <label htmlFor="Password">Password</label>
                                    </div>
                                    <div className="form-group">
                                        <input type="password" className="form-control" value={confPassword} onChange={(e) => setConfPassword(e.target.value)} />
                                        <label htmlFor="Confirm Password">Confirm Password</label>
                                    </div>
                                </div>{/*end .card-body */}
                                <div className="card-actionbar">
                                    <div className="card-actionbar-row">
                                        <button type="submit" className="btn btn-primary ink-reaction">Update User</button>
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

export default FormEditUser;