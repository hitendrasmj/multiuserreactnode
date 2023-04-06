import React from 'react'
import {NavLink, useNavigate} from 'react-router-dom'
import Logo from "../bulma-logo.png";
import { useDispatch, useSelector } from 'react-redux';
import { LogOut, reset } from '../features/authSlice';

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {user} = useSelector((state) => state.auth);

  const logout = () => {
    dispatch(LogOut());
    dispatch(reset());
    navigate("/");
  }
  return (
		<header id="header">
      <div className="headerbar">
        {/* Brand and toggle get grouped for better mobile display */}
        <div className="headerbar-left">
          <ul className="header-nav header-nav-options">
            <li className="header-nav-brand" >
              <div className="brand-holder">
                <a href="/dashboard">
                  <span className="text-lg text-bold text-primary">Shri Mathura Ji</span>
                </a>
              </div>
            </li>
            <li>
              <a className="btn btn-icon-toggle menubar-toggle" data-toggle="menubar" href="#">
                <i className="fa fa-bars"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
      {/* Collect the nav links, forms, and other content for toggling */}
      <div className="headerbar-right">
        <ul className="header-nav header-nav-options">
          <li>
            {/* Search form */}
            <form className="navbar-search" role="search">
              <div className="form-group">
                <input type="text" className="form-control" name="headerSearch" placeholder="Enter your keyword" />
              </div>
              <button type="submit" className="btn btn-icon-toggle ink-reaction"><i className="fa fa-search"></i></button>
            </form>
          </li>
          <li className="dropdown hidden-xs">
            <a href="foo" className="btn btn-icon-toggle btn-default" data-toggle="dropdown">
              <i className="fa fa-bell"></i><sup className="badge style-danger">4</sup>
            </a>
            <ul className="dropdown-menu animation-expand">
              <li className="dropdown-header">Today's messages</li>
              <li>
                <a className="alert alert-callout alert-warning" href="foo">
                  <img className="pull-right img-circle dropdown-avatar" src={'/assets/img/avatar2.jpg?1404026449'} alt="avatar2" />
                  <strong>Alex Anistor</strong><br/>
                  <small>Testing functionality...</small>
                </a>
              </li>
              <li>
                <a className="alert alert-callout alert-info" href="foo">
                  <img className="pull-right img-circle dropdown-avatar" src={'/assets/img/avatar3.jpg?1404026799'} alt="avatar3" />
                  <strong>Alicia Adell</strong><br/>
                  <small>Reviewing last changes...</small>
                </a>
              </li>
              <li className="dropdown-header">Options</li>
              <li><a href="foo">View all messages <span className="pull-right"><i className="fa fa-arrow-right"></i></span></a></li>
              <li><a href="foo">Mark as read <span className="pull-right"><i className="fa fa-arrow-right"></i></span></a></li>
            </ul>{/*end .dropdown-menu */}
          </li>{/*end .dropdown */}
          <li className="dropdown hidden-xs">
            <a href="foo" className="btn btn-icon-toggle btn-default" data-toggle="dropdown">
              <i className="fa fa-area-chart"></i>
            </a>
            <ul className="dropdown-menu animation-expand">
              <li className="dropdown-header">Server load</li>
              <li className="dropdown-progress">
                <a href="foo">
                  <div className="dropdown-label">
                    <span className="text-light">Server load <strong>Today</strong></span>
                    <strong className="pull-right">93%</strong>
                  </div>
                  <div className="progress"><div className="progress-bar progress-bar-danger" style={{width: '93%'}}></div></div>
                </a>
              </li>{/*end .dropdown-progress */}
              <li className="dropdown-progress">
                <a href="foo">
                  <div className="dropdown-label">
                    <span className="text-light">Server load <strong>Yesterday</strong></span>
                    <strong className="pull-right">30%</strong>
                  </div>
                  <div className="progress"><div className="progress-bar progress-bar-success" style={{width: '30%'}}></div></div>
                </a>
              </li>{/*end .dropdown-progress */}
              <li className="dropdown-progress">
                <a href="foo">
                  <div className="dropdown-label">
                    <span className="text-light">Server load <strong>Lastweek</strong></span>
                    <strong className="pull-right">74%</strong>
                  </div>
                  <div className="progress"><div className="progress-bar progress-bar-warning" style={{width: '74%'}}></div></div>
                </a>
              </li>{/*end .dropdown-progress */}
            </ul>{/*end .dropdown-menu */}
          </li>{/*end .dropdown */}
        </ul>{/*end .header-nav-options */}
        <ul className="header-nav header-nav-profile">
          <li className="dropdown">
            <a href="foo" className="dropdown-toggle ink-reaction" data-toggle="dropdown">
              <img src={'/assets/img/avatar1.jpg?1404026799'} alt="" />
              <span className="profile-info">
              { user && user.name.charAt(0).toUpperCase() + user.name.slice(1) }
                    <small>{ user && user.role.charAt(0).toUpperCase() + user.role.slice(1) }</small>
              </span>
            </a>
            <ul className="dropdown-menu animation-dock">
              <li className="dropdown-header">Config</li>
              <li><a href="foo">My profile</a></li>
              <li><a href="foo">My blog <span className="badge style-danger pull-right">16</span></a></li>
              <li><a href="foo">My appointments</a></li>
              <li className="divider"></li>
              <li><a href="foo"><i className="fa fa-fw fa-lock"></i> Lock</a></li>
              <li><a href="#!" onClick={logout}><i className="fa fa-fw fa-power-off text-danger"></i> Logout</a></li>
            </ul>{/*end .dropdown-menu */}
          </li>{/*end .dropdown */}
        </ul>{/*end .header-nav-profile */}
        <ul className="header-nav header-nav-toggle">
          <li>
            <a className="btn btn-icon-toggle btn-default" href="#offcanvas-search" data-toggle="offcanvas" data-backdrop="false">
              <i className="fa fa-ellipsis-v"></i>
            </a>
          </li>
        </ul>{/*end .header-nav-toggle */}
      </div>{/*end #header-navbar-collapse */}
    </header>	
  )
}

export default Navbar;