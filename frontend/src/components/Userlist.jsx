import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Userlist = () => {
    const [users, setUsers] = useState([]);

    useEffect(()=>{
        getUsers();
    }, []);

    const getUsers = async () => {
        const response = await axios.get("http://localhost:5000/users");
        setUsers(response.data);
    };

    const deleteUser = async (userId) => {
        await axios.delete(`http://localhost:5000/users/${userId}`);
        getUsers();
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
                                <span className="col-sm-6"><header><strong>List of Users</strong></header></span>
                                <span className="col-sm-6 text-right"><Link class="btn ink-reaction btn-flat btn-loading-state" to="/users/add">Add User</Link></span>
                            </div>
                            <div className="card-body">
                                <table className="table table-striped table-hover no-margin">
                                    <thead>
                                        <tr>
                                            <th>#</th>
                                            <th>Name</th>
                                            <th>Email</th>
                                            <th>Role</th>
                                            <th>Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                    {users.map((user, index) => (
                                        <tr classNameName="gradeX" key={user.uuid}>
                                            <td>{index + 1}</td>
                                            <td>{user.name}</td>
                                            <td>{user.email}</td>
                                            <td>{user.role}</td>
                                            <td>
                                                <Link className="btn btn-icon-toggle" data-toggle="tooltip" data-placement="top" data-original-title="Edit row" to={`/users/edit/${user.uuid}`} classNameName="button is-small is-info"><i className="fa fa-pencil"></i></Link>
                                                
                                                <button type="button" onClick={() => deleteUser(user.uuid)} className="btn btn-icon-toggle" data-toggle="tooltip" data-placement="top" data-original-title="Delete row"><i className="fa fa-trash-o"></i></button>
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

export default Userlist;