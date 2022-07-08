/* eslint-disable linebreak-style */
/* eslint-disable quotes */
import React, { useContext, useEffect } from "react";
import { PropTypes } from "prop-types";
import { Switch, Route } from "react-router-dom";
import { changeLayoutAction } from 'dan-redux/actions/uiActions';
import { useDispatch } from 'react-redux';
import { ThemeContext } from "./ThemeWrapper";
import AdminDashboard from "../Templates/AdminDashboard";
import {
  AdminDashboardPage,
  Tournaments,
  NotFound,
} from "../pageListAsync";
function Admin(props) {
  const { history } = props;
  const changeMode = useContext(ThemeContext);
  // Dispatcher
  const changeLayoutLeftSideBar = useDispatch();
  useEffect(() => {
    changeLayoutLeftSideBar(changeLayoutAction('left-sidebar'));
  }, []);
  return (
    <AdminDashboard history={history} changeMode={changeMode}>
      <Switch>
        {/* Home */}
        <Route exact path="/admin" component={AdminDashboardPage} />
        <Route path="/admin/tournaments" exact component={Tournaments} />
        <Route component={NotFound} />
      </Switch>
    </AdminDashboard>
  );
}

Admin.propTypes = {
  history: PropTypes.object.isRequired,
};

export default Admin;
