import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { IoPerson, IoPricetag, IoHome, IoLogOut } from 'react-icons/io5';
import { useDispatch, useSelector } from 'react-redux';
import { LogOut, reset } from '../features/authSlice';


const RightSidebar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {user} = useSelector((state) => state.auth);

  const logout = () => {
    dispatch(LogOut());
    dispatch(reset());
    navigate("/");
  }  

  return (
    
    <div className="offcanvas">

        {/* BEGIN OFFCANVAS SEARCH */}
        <div id="offcanvas-search" className="offcanvas-pane width-8">
            <div className="offcanvas-head">
                <header className="text-primary">Search</header>
                <div className="offcanvas-tools">
                    <a className="btn btn-icon-toggle btn-default-light pull-right" data-dismiss="offcanvas">
                        <i className="md md-close"></i>
                    </a>
                </div>
            </div>
            <div className="offcanvas-body no-padding">
                <ul className="list ">
                    <li className="tile divider-full-bleed">
                        <div className="tile-content">
                            <div className="tile-text"><strong>A</strong></div>
                        </div>
                    </li>
                    <li className="tile">
                        <a className="tile-content ink-reaction" href="#offcanvas-chat" data-toggle="offcanvas" data-backdrop="false">
                            <div className="tile-icon">
                                <img src="../../assets/img/avatar4.jpg?1404026791" alt="" />
                            </div>
                            <div className="tile-text">
                                Alex Nelson
                                <small>123-123-3210</small>
                            </div>
                        </a>
                    </li>
                    <li className="tile">
                        <a className="tile-content ink-reaction" href="#offcanvas-chat" data-toggle="offcanvas" data-backdrop="false">
                            <div className="tile-icon">
                                <img src="../../assets/img/avatar9.jpg?1404026744" alt="" />
                            </div>
                            <div className="tile-text">
                                Ann Laurens
                                <small>123-123-3210</small>
                            </div>
                        </a>
                    </li>
                    <li className="tile divider-full-bleed">
                        <div className="tile-content">
                            <div className="tile-text"><strong>J</strong></div>
                        </div>
                    </li>
                    <li className="tile">
                        <a className="tile-content ink-reaction" href="#offcanvas-chat" data-toggle="offcanvas" data-backdrop="false">
                            <div className="tile-icon">
                                <img src="../../assets/img/avatar2.jpg?1404026449" alt="" />
                            </div>
                            <div className="tile-text">
                                Jessica Cruise
                                <small>123-123-3210</small>
                            </div>
                        </a>
                    </li>
                    <li className="tile">
                        <a className="tile-content ink-reaction" href="#offcanvas-chat" data-toggle="offcanvas" data-backdrop="false">
                            <div className="tile-icon">
                                <img src="../../assets/img/avatar8.jpg?1404026729" alt="" />
                            </div>
                            <div className="tile-text">
                                Jim Peters
                                <small>123-123-3210</small>
                            </div>
                        </a>
                    </li>
                    <li className="tile divider-full-bleed">
                        <div className="tile-content">
                            <div className="tile-text"><strong>M</strong></div>
                        </div>
                    </li>
                    <li className="tile">
                        <a className="tile-content ink-reaction" href="#offcanvas-chat" data-toggle="offcanvas" data-backdrop="false">
                            <div className="tile-icon">
                                <img src="../../assets/img/avatar5.jpg?1404026513" alt="" />
                            </div>
                            <div className="tile-text">
                                Mabel Logan
                                <small>123-123-3210</small>
                            </div>
                        </a>
                    </li>
                    <li className="tile">
                        <a className="tile-content ink-reaction" href="#offcanvas-chat" data-toggle="offcanvas" data-backdrop="false">
                            <div className="tile-icon">
                                <img src="../../assets/img/avatar11.jpg?1404026774" alt="" />
                            </div>
                            <div className="tile-text">
                                Mary Peterson
                                <small>123-123-3210</small>
                            </div>
                        </a>
                    </li>
                    <li className="tile">
                        <a className="tile-content ink-reaction" href="#offcanvas-chat" data-toggle="offcanvas" data-backdrop="false">
                            <div className="tile-icon">
                                <img src="../../assets/img/avatar3.jpg?1404026799" alt="" />
                            </div>
                            <div className="tile-text">
                                Mike Alba
                                <small>123-123-3210</small>
                            </div>
                        </a>
                    </li>
                    <li className="tile divider-full-bleed">
                        <div className="tile-content">
                            <div className="tile-text"><strong>N</strong></div>
                        </div>
                    </li>
                    <li className="tile">
                        <a className="tile-content ink-reaction" href="#offcanvas-chat" data-toggle="offcanvas" data-backdrop="false">
                            <div className="tile-icon">
                                <img src="../../assets/img/avatar6.jpg?1404026572" alt="" />
                            </div>
                            <div className="tile-text">
                                Nathan Peterson
                                <small>123-123-3210</small>
                            </div>
                        </a>
                    </li>
                    <li className="tile divider-full-bleed">
                        <div className="tile-content">
                            <div className="tile-text"><strong>P</strong></div>
                        </div>
                    </li>
                    <li className="tile">
                        <a className="tile-content ink-reaction" href="#offcanvas-chat" data-toggle="offcanvas" data-backdrop="false">
                            <div className="tile-icon">
                                <img src="../../assets/img/avatar7.jpg?1404026721" alt="" />
                            </div>
                            <div className="tile-text">
                                Philip Ericsson
                                <small>123-123-3210</small>
                            </div>
                        </a>
                    </li>
                    <li className="tile divider-full-bleed">
                        <div className="tile-content">
                            <div className="tile-text"><strong>S</strong></div>
                        </div>
                    </li>
                    <li className="tile">
                        <a className="tile-content ink-reaction" href="#offcanvas-chat" data-toggle="offcanvas" data-backdrop="false">
                            <div className="tile-icon">
                                <img src="../../assets/img/avatar10.jpg?1404026762" alt="" />
                            </div>
                            <div className="tile-text">
                                Samuel Parsons
                                <small>123-123-3210</small>
                            </div>
                        </a>
                    </li>
                </ul>
            </div>{/*end .offcanvas-body */}
        </div>{/*end .offcanvas-pane */}
        {/* END OFFCANVAS SEARCH */}

        {/* BEGIN OFFCANVAS CHAT */}
        <div id="offcanvas-chat" className="offcanvas-pane style-default-light width-12">
            <div className="offcanvas-head style-default-bright">
                <header className="text-primary">Chat with Ann Laurens</header>
                <div className="offcanvas-tools">
                    <a className="btn btn-icon-toggle btn-default-light pull-right" data-dismiss="offcanvas">
                        <i className="md md-close"></i>
                    </a>
                    <a className="btn btn-icon-toggle btn-default-light pull-right" href="#offcanvas-search" data-toggle="offcanvas" data-backdrop="false">
                        <i className="md md-arrow-back"></i>
                    </a>
                </div>
                <form className="form">
                    <div className="form-group floating-label">
                        <textarea name="sidebarChatMessage" id="sidebarChatMessage" className="form-control autosize" rows="1"></textarea>
                        <label htmlFor="sidebarChatMessage">Leave a message</label>
                    </div>
                </form>
            </div>
            <div className="offcanvas-body">
                <ul className="list-chats">
                    <li>
                        <div className="chat">
                            <div className="chat-avatar"><img className="img-circle" src="../../assets/img/avatar1.jpg?1403934956" alt="" /></div>
                            <div className="chat-body">
                                Yes, it is indeed very beautiful.
                                <small>10:03 pm</small>
                            </div>
                        </div>{/*end .chat */}
                    </li>
                    <li className="chat-left">
                        <div className="chat">
                            <div className="chat-avatar"><img className="img-circle" src="../../assets/img/avatar9.jpg?1404026744" alt="" /></div>
                            <div className="chat-body">
                                Did you see the changes?
                                <small>10:02 pm</small>
                            </div>
                        </div>{/*end .chat */}
                    </li>
                    <li>
                        <div className="chat">
                            <div className="chat-avatar"><img className="img-circle" src="../../assets/img/avatar1.jpg?1403934956" alt="" /></div>
                            <div className="chat-body">
                                I just arrived at work, it was quite busy.
                                <small>06:44pm</small>
                            </div>
                            <div className="chat-body">
                                I will take look in a minute.
                                <small>06:45pm</small>
                            </div>
                        </div>{/*end .chat */}
                    </li>
                    <li className="chat-left">
                        <div className="chat">
                            <div className="chat-avatar"><img className="img-circle" src="../../assets/img/avatar9.jpg?1404026744" alt="" /></div>
                            <div className="chat-body">
                                The colors are much better now.
                            </div>
                            <div className="chat-body">
                                The colors are brighter than before.
                                I have already sent an example.
                                This will make it look sharper.
                                <small>Mon</small>
                            </div>
                        </div>{/*end .chat */}
                    </li>
                    <li>
                        <div className="chat">
                            <div className="chat-avatar"><img className="img-circle" src="../../assets/img/avatar1.jpg?1403934956" alt="" /></div>
                            <div className="chat-body">
                                Are the colors of the logo already adapted?
                                <small>Last week</small>
                            </div>
                        </div>{/*end .chat */}
                    </li>
                </ul>
            </div>{/*end .offcanvas-body */}
        </div>{/*end .offcanvas-pane */}
        {/* END OFFCANVAS CHAT */}

    </div>

  )
}

export default RightSidebar;