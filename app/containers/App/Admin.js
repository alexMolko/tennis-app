/* eslint-disable linebreak-style */
/* eslint-disable quotes */
import React, { useContext } from "react";
import { PropTypes } from "prop-types";
import { Switch, Route } from "react-router-dom";
import { ThemeContext } from "./ThemeWrapper";
import AdminDashboard from "../Templates/AdminDashboard";
import {
  PersonalDashboard,
  Tournaments,
  NotFound,
} from "../pageListAsync";

function Admin(props) {
  const { history } = props;
  const changeMode = useContext(ThemeContext);
  return (
    <AdminDashboard history={history} changeMode={changeMode}>
      <Switch>
        {/* Home */}
        <Route exact path="/admin" component={PersonalDashboard} />
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
