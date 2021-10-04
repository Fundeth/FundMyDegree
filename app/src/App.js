import React, { useEffect } from "react";
import Layout from "./layout/mainLayout";
import { Route, Switch } from "react-router-dom";
import CreateProfile from "./pages/createProfile";
import CreateCampaign from "./pages/createCampaign";
import Campaign from "./pages/campaign";
import StudentDashboard from "./pages/studentDashboard";
import CollegeDashboard from "./pages/collegeDashboard";
import StudentProfile from "./pages/studentProfile";
import CollegeProfile from "./pages/collegeProfile";
import ExploreCampaigns from "./pages/exploreCampaigns";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "./store";
import { initContracts } from "./adapters/contracts";

const App = () => {
  const dispatch = useDispatch();
  const { setCampaignContract } = bindActionCreators(actionCreators, dispatch);
  useEffect(() => {
    initContracts().then((res) => {
      setCampaignContract(res.campaignContract);
    });
  }, []);
  return (
    <Layout>
      <Switch>
        <Route exact path="/">
          <ExploreCampaigns />
        </Route>
        <Route exact path="/studentProfile/:id">
          <StudentProfile />
        </Route>
        <Route exact path="/collegeProfile/:id">
          <CollegeProfile />
        </Route>
        <Route exact path="/collegeDashboard">
          <CollegeDashboard />
        </Route>
        <Route exact path="/studentDashboard">
          <StudentDashboard />
        </Route>
        <Route exact path="/campaign/:id">
          <Campaign />
        </Route>
        <Route exact path="/createProfile">
          <CreateProfile />
        </Route>
        <Route exact path="/createCampaign">
          <CreateCampaign />
        </Route>
      </Switch>
    </Layout>
  );
};

export default App;
