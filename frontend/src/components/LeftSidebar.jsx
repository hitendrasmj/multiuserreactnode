import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { IoPerson, IoPricetag, IoHome, IoLogOut } from 'react-icons/io5';
import { useDispatch, useSelector } from 'react-redux';
import { LogOut, reset } from '../features/authSlice';


const LeftSidebar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {user} = useSelector((state) => state.auth);

  const logout = () => {
    dispatch(LogOut());
    dispatch(reset());
    navigate("/");
  }  

  return (
    <div id="menubar" className="menubar-inverse ">
        <div className="menubar-fixed-panel">
            <div>
                <a className="btn btn-icon-toggle btn-default menubar-toggle" data-toggle="menubar" href="#!">
                    <i className="fa fa-bars"></i>
                </a>
            </div>
            <div className="expanded">
                <a href="../../html/dashboards/dashboard.html">
                    <span className="text-lg text-bold text-primary ">MATERIAL&nbsp;ADMIN</span>
                </a>
            </div>
        </div>
        <div className="menubar-scroll-panel">

            {/* BEGIN MAIN MENU */}
            <ul id="main-menu" className="gui-controls">
                {/* BEGIN DASHBOARD */}
                <li>
                    <a href="/dashboard" >
                        <div className="gui-icon"><i className="md md-home"></i></div>
                        <span className="title">Dashboard</span>
                    </a>
                </li>{/*end /menu-li */}
                {/* END DASHBOARD */}

                {/* BEGIN USERS */}
                <li>
                    <a href="/users" >
                        <div className="gui-icon"><i className="md md-account-child"></i></div>
                        <span className="title">Users</span>
                    </a>
                </li>{/*end /menu-li */}
                {/* END USERS */}

                {/* BEGIN PRODUCTS */}
                <li>
                    <a href="/products" >
                        <div className="gui-icon"><i className="md md-pages"></i></div>
                        <span className="title">Products</span>
                    </a>
                </li>{/*end /menu-li */}
                {/* END PRODUCTS */}

                {/* BEGIN EMAIL */}
                <li className="gui-folder">
                    <a>
                        <div className="gui-icon"><i className="md md-email"></i></div>
                        <span className="title">Email</span>
                    </a>
                    {/*start submenu */}
                    <ul>
                        <li><a href="../../html/mail/inbox.html" ><span className="title">Inbox</span></a></li>
                        <li><a href="../../html/mail/compose.html" ><span className="title">Compose</span></a></li>
                        <li><a href="../../html/mail/reply.html" ><span className="title">Reply</span></a></li>
                        <li><a href="../../html/mail/message.html" ><span className="title">View message</span></a></li>
                    </ul>{/*end /submenu */}
                </li>{/*end /menu-li */}
                {/* END EMAIL */}

                {/* BEGIN UI */}
                <li className="gui-folder">
                    <a>
                        <div className="gui-icon"><i className="fa fa-puzzle-piece fa-fw"></i></div>
                        <span className="title">UI elements</span>
                    </a>
                    {/*start submenu */}
                    <ul>
                        <li><a href="../../html/ui/colors.html" ><span className="title">Colors</span></a></li>
                        <li><a href="../../html/ui/typography.html" ><span className="title">Typography</span></a></li>
                        <li><a href="../../html/ui/cards.html" ><span className="title">Cards</span></a></li>
                        <li><a href="../../html/ui/buttons.html" ><span className="title">Buttons</span></a></li>
                        <li><a href="../../html/ui/lists.html" ><span className="title">Lists</span></a></li>
                        <li><a href="../../html/ui/tabs.html" ><span className="title">Tabs</span></a></li>
                        <li><a href="../../html/ui/accordions.html" ><span className="title">Accordions</span></a></li>
                        <li><a href="../../html/ui/messages.html" ><span className="title">Messages</span></a></li>
                        <li><a href="../../html/ui/offcanvas.html" ><span className="title">Off-canvas</span></a></li>
                        <li><a href="../../html/ui/grid.html" ><span className="title">Grid</span></a></li>
                        <li className="gui-folder">
                            <a href="#!">
                                <span className="title">Icons</span>
                            </a>
                            {/*start submenu */}
                            <ul>
                                <li><a href="../../html/ui/icons/materialicons.html" ><span className="title">Material Design Icons</span></a></li>
                                <li><a href="../../html/ui/icons/fontawesome.html" ><span className="title">Font Awesome</span></a></li>
                                <li><a href="../../html/ui/icons/glyphicons.html" ><span className="title">Glyphicons</span></a></li>
                                <li><a href="../../html/ui/icons/skycons.html" ><span className="title">Skycons</span></a></li>
                            </ul>{/*end /submenu */}
                        </li>{/*end /menu-li */}
                    </ul>{/*end /submenu */}
                </li>{/*end /menu-li */}
                {/* END UI */}

                {/* BEGIN TABLES */}
                <li className="gui-folder">
                    <a>
                        <div className="gui-icon"><i className="fa fa-table"></i></div>
                        <span className="title">Tables</span>
                    </a>
                    {/*start submenu */}
                    <ul>
                        <li><a href="../../html/tables/static.html" ><span className="title">Static Tables</span></a></li>
                        <li><a href="../../html/tables/dynamic.html" ><span className="title">Dynamic Tables</span></a></li>
                        <li><a href="../../html/tables/responsive.html" ><span className="title">Responsive Table</span></a></li>
                    </ul>{/*end /submenu */}
                </li>{/*end /menu-li */}
                {/* END TABLES */}

                {/* BEGIN FORMS */}
                <li className="gui-folder">
                    <a>
                        <div className="gui-icon"><span className="glyphicon glyphicon-list-alt"></span></div>
                        <span className="title">Forms</span>
                    </a>
                    {/*start submenu */}
                    <ul>
                        <li><a href="../../html/forms/basic.html" ><span className="title">Form basic</span></a></li>
                        <li><a href="../../html/forms/advanced.html" ><span className="title">Form advanced</span></a></li>
                        <li><a href="../../html/forms/layouts.html" ><span className="title">Form layouts</span></a></li>
                        <li><a href="../../html/forms/editors.html" ><span className="title">Editors</span></a></li>
                        <li><a href="../../html/forms/validation.html" ><span className="title">Form validation</span></a></li>
                        <li><a href="../../html/forms/wizard.html" ><span className="title">Form wizard</span></a></li>
                    </ul>{/*end /submenu */}
                </li>{/*end /menu-li */}
                {/* END FORMS */}

                {/* BEGIN PAGES */}
                <li className="gui-folder">
                    <a>
                        <div className="gui-icon"><i className="md md-computer"></i></div>
                        <span className="title">Pages</span>
                    </a>
                    {/*start submenu */}
                    <ul>
                        <li className="gui-folder">
                            <a href="#!">
                                <span className="title">Contacts</span>
                            </a>
                            {/*start submenu */}
                            <ul>
                                <li><a href="../../html/pages/contacts/search.html" ><span className="title">Search</span></a></li>
                                <li><a href="../../html/pages/contacts/details.html" ><span className="title">Contact card</span></a></li>
                                <li><a href="../../html/pages/contacts/add.html" ><span className="title">Insert contact</span></a></li>
                            </ul>{/*end /submenu */}
                        </li>{/*end /menu-li */}
                        <li className="gui-folder">
                            <a href="#!">
                                <span className="title">Search</span>
                            </a>
                            {/*start submenu */}
                            <ul>
                                <li><a href="../../html/pages/search/results-text.html" ><span className="title">Results - Text</span></a></li>
                                <li><a href="../../html/pages/search/results-text-image.html" ><span className="title">Results - Text and Image</span></a></li>
                            </ul>{/*end /submenu */}
                        </li>{/*end /menu-li */}
                        <li className="gui-folder">
                            <a href="#!">
                                <span className="title">Blog</span>
                            </a>
                            {/*start submenu */}
                            <ul>
                                <li><a href="../../html/pages/blog/masonry.html" ><span className="title">Blog masonry</span></a></li>
                                <li><a href="../../html/pages/blog/list.html" ><span className="title">Blog list</span></a></li>
                                <li><a href="../../html/pages/blog/post.html" ><span className="title">Blog post</span></a></li>
                            </ul>{/*end /submenu */}
                        </li>{/*end /menu-li */}
                        <li className="gui-folder">
                            <a href="#!">
                                <span className="title">Error pages</span>
                            </a>
                            {/*start submenu */}
                            <ul>
                                <li><a href="../../html/pages/404.html" ><span className="title">404 page</span></a></li>
                                <li><a href="../../html/pages/500.html" ><span className="title">500 page</span></a></li>
                            </ul>{/*end /submenu */}
                        </li>{/*end /menu-li */}
                        <li><a href="../../html/pages/profile.html" ><span className="title">User profile<span className="badge style-accent">42</span></span></a></li>
                        <li><a href="../../html/pages/invoice.html" ><span className="title">Invoice</span></a></li>
                        <li><a href="../../html/pages/calendar.html" ><span className="title">Calendar</span></a></li>
                        <li><a href="../../html/pages/pricing.html" ><span className="title">Pricing</span></a></li>
                        <li><a href="../../html/pages/timeline.html" ><span className="title">Timeline</span></a></li>
                        <li><a href="../../html/pages/maps.html" ><span className="title">Maps</span></a></li>
                        <li><a href="../../html/pages/locked.html" ><span className="title">Lock screen</span></a></li>
                        <li><a href="../../html/pages/login.html" ><span className="title">Login</span></a></li>
                        <li><a href="../../html/pages/blank.html" className="active"><span className="title">Blank page</span></a></li>
                    </ul>{/*end /submenu */}
                </li>{/*end /menu-li */}
                {/* END FORMS */}

                {/* BEGIN CHARTS */}
                <li>
                    <a href="../../html/charts/charts.html" >
                        <div className="gui-icon"><i className="md md-assessment"></i></div>
                        <span className="title">Charts</span>
                    </a>
                </li>{/*end /menu-li */}
                {/* END CHARTS */}

                {/* BEGIN LEVELS */}
                <li className="gui-folder">
                    <a>
                        <div className="gui-icon"><i className="fa fa-folder-open fa-fw"></i></div>
                        <span className="title">Menu levels demo</span>
                    </a>
                    {/*start submenu */}
                    <ul>
                        <li><a href="#"><span className="title">Item 1</span></a></li>
                        <li><a href="#"><span className="title">Item 1</span></a></li>
                        <li className="gui-folder">
                            <a href="#!">
                                <span className="title">Open level 2</span>
                            </a>
                            {/*start submenu */}
                            <ul>
                                <li><a href="#"><span className="title">Item 2</span></a></li>
                                <li className="gui-folder">
                                    <a href="#!">
                                        <span className="title">Open level 3</span>
                                    </a>
                                    {/*start submenu */}
                                    <ul>
                                        <li><a href="#"><span className="title">Item 3</span></a></li>
                                        <li><a href="#"><span className="title">Item 3</span></a></li>
                                        <li className="gui-folder">
                                            <a href="#!">
                                                <span className="title">Open level 4</span>
                                            </a>
                                            {/*start submenu */}
                                            <ul>
                                                <li><a href="#"><span className="title">Item 4</span></a></li>
                                                <li className="gui-folder">
                                                    <a href="#!">
                                                        <span className="title">Open level 5</span>
                                                    </a>
                                                    {/*start submenu */}
                                                    <ul>
                                                        <li><a href="#"><span className="title">Item 5</span></a></li>
                                                        <li><a href="#"><span className="title">Item 5</span></a></li>
                                                    </ul>{/*end /submenu */}
                                                </li>{/*end /submenu-li */}
                                            </ul>{/*end /submenu */}
                                        </li>{/*end /submenu-li */}
                                    </ul>{/*end /submenu */}
                                </li>{/*end /submenu-li */}
                            </ul>{/*end /submenu */}
                        </li>{/*end /submenu-li */}
                    </ul>{/*end /submenu */}
                </li>{/*end /menu-li */}
                {/* END LEVELS */}

            </ul>{/*end .main-menu */}
            {/* END MAIN MENU */}

            <div className="menubar-foot-panel">
                <small className="no-linebreak hidden-folded">
                    <span className="opacity-75">Copyright &copy; 2014</span> <strong>CodeCovers</strong>
                </small>
            </div>
        </div>{/*end .menubar-scroll-panel*/}
    </div>
  )
}

export default LeftSidebar;