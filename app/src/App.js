import React, { useEffect } from "react";
import Layout from "./layout/mainLayout";
import { Route, Switch } from "react-router-dom";
import CreateProfile from "./pages/createProfile";
import EditProfile from "./pages/editProfile";
import CreateSchoolProfile from "./pages/createSchoolProfile";
import CreateCampaign from "./pages/createCampaign";
import Campaign from "./pages/campaign";
import CollegeDashboard from "./pages/collegeDashboard";
import StudentProfile from "./pages/studentProfile";
import ExploreCampaigns from "./pages/exploreCampaigns";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "./store";
import { getCampaign, initContracts } from "./adapters/contracts";
import { useMoralis } from "react-moralis";
import { getUser } from "./adapters/MoralisAdapter";
import { useSelector } from "react-redux";

const App = () => {
  const dispatch = useDispatch();
  const { setCampaignContract, setProfile, setLoading, setCampaign } =
    bindActionCreators(actionCreators, dispatch);
  const campaignContract = useSelector(
    (state) => state.contract.campaignContract
  );
  const { isAuthenticated } = useMoralis();
  useEffect(() => {
    if (isAuthenticated) {
      setLoading(true);

      initContracts().then((res) => {
        setCampaignContract(res.campaignContract);
        getUser().then((user) => {
          console.log(user);
          setProfile(user);
          setLoading(false);
        });
      });
    }
  }, [isAuthenticated]);
  return (
    <Layout>
      <Switch>
        <Route exact path="/">
          <ExploreCampaigns />
        </Route>
        <Route exact path="/studentProfile/:id">
          <StudentProfile />
        </Route>
        <Route exact path="/collegeDashboard">
          <CollegeDashboard />
        </Route>
        <Route exact path="/campaign/:id">
          <Campaign />
        </Route>
        <Route exact path="/createProfile">
          <CreateProfile />
        </Route>
        <Route exact path="/editProfile">
          <EditProfile />
        </Route>
        <Route exact path="/createSchoolProfile">
          <CreateSchoolProfile />
        </Route>
        <Route exact path="/createCampaign">
          <CreateCampaign />
        </Route>
      </Switch>
    </Layout>
  );
};

export default App;
