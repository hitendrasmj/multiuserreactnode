import React, {useState, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { LoginUser, reset } from '../features/authSlice';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user, isError, isSuccess, isLoading, message } = useSelector(
    (state) => state.auth
  );

  useEffect(()=>{
    if(user || isSuccess){
        navigate("/dashboard");
    }
    dispatch(reset());
  },[user, isSuccess, dispatch, navigate]);

  const Auth = (e) => {
    e.preventDefault();
    dispatch(LoginUser({email, password}));
  }

  return (
    <section className="section-account">
		<div className="img-backdrop" style={{ backgroundImage: "url(/assets/img/img16.jpg)" }}></div>
		<div className="spacer"></div>
		<div className="card contain-sm style-transparent">
			<div className="card-body">
				<div className="row">
					<div className="col-sm-6">
						<br/>
						<span className="text-lg text-bold text-primary">MATERIAL ADMIN</span>
						<br/><br/>
						<form className="form floating-label" onSubmit={Auth} accept-charset="utf-8" method="post">
						{isError && <p classNameName='has-text-centered'>{message}</p> }
							<div className="form-group">
								<input type="text" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} />
								<label htmlFor="email">Email</label>
							</div>
							<div className="form-group">
								<input type="password" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)} />
								<label htmlFor="password">Password</label>
								<p className="help-block"><a href="#">Forgotten?</a></p>
							</div>
							<br/>
							<div className="row">
								<div className="col-xs-6 text-left">
									<div className="checkbox checkbox-inline checkbox-styled">
										<label>
											<input type="checkbox" /> <span>Remember me</span>
										</label>
									</div>
								</div> {/* end .col */}
								<div className="col-xs-6 text-right">
									<button className="btn btn-primary btn-raised" type="submit">{isLoading ? 'Loading.....' : 'Login'}</button>
								</div>{/* end .col */}
							</div>{/* end .row */}
						</form>
					</div>{/* end .col */}
					<div className="col-sm-5 col-sm-offset-1 text-center">
						<br/><br/>
							<h3 className="text-light">
								No account yet?
							</h3>
							<a className="btn btn-block btn-raised btn-primary" href="#">Sign up here</a>
							<br/><br/>
								<h3 className="text-light">
									or
								</h3>
								<p>
									<a href="#" className="btn btn-block btn-raised btn-info"><i className="fa fa-facebook pull-left"></i>Login with Facebook</a>
								</p>
								<p>
									<a href="#" className="btn btn-block btn-raised btn-info"><i className="fa fa-twitter pull-left"></i>Login with Twitter</a>
								</p>
							</div>{/* end .col */}
						</div>{/* end .row */}
					</div>{/* end .card-body */}
				</div>{/* end .card */}
	</section>
  )
}

export default Login;
