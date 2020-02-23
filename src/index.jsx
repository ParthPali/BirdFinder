import React from 'react';
import '@patternfly/react-core/dist/styles/base.css';
import Reactdatalist from './components/React_datalist.js';
import Reactcard from './components/React_card.js';
import Reactmodal from './components/React_modal.js';
import Tabs from './components/Tabs.js';
import Reactalert from './components/React_alert.js';
require('./styles.css');

function ShowComponents() {
  return (
    <div className="App" class=".pf-m-redhat-font" bgcolor="black">
      <center>
            <center>
              <br/>
              <font size="12" color="00FF00"><b>Welcome to the Rare Bird Finder</b></font>
              <div style={{width:80+'%'}} align="left" background-color="FF0000">
              </div>
            </center>
      <Tabs>
        <div label="About us">
            <center>
              <br/>
              <font size="6"><b>About Rare Bird Finder:</b></font>
              <div style={{width:80+'%'}} align="left">
                <Reactcard/>
              </div>
            </center>
        </div>
        <div label="Rare Birds around you">
            <center>
              <br/>
              <font size="6"><b>Latest Updates:</b></font>
              <div style={{width:80+'%'}} align="left">
                <Reactdatalist/>
              </div>
            </center>
        </div>
        <div label="Maps">
            <center>
              <br/>
              <font size="6"><b>Find the closest rare bird near you:</b></font>
              <div style={{width:80+'%'}} align="center">
                <Reactmodal/>
              </div>
            </center>
        </div>
        <div label="Alert">
            <center>
              <br/>
              <font size="6"><b>See a rare bird. Alert us now:</b></font>
              <div style={{width:80+'%'}} align="center">
                <Reactalert/>
              </div>
            </center>
        </div>
      </Tabs>
      </center>
    </div>
  );
}

export default ShowComponents;
