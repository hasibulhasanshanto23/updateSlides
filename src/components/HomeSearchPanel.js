import React from "react";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import Tab from "@mui/material/Tab";
import { Box } from "@material-ui/core";
import flightmono from '../images/flight-mono.svg';
import hotelmono from '../images/hotel-mono.svg';
import holidaymono from '../images/holiday-mono.svg'
import visamono from '../images/visa-mono.svg'

const HomeSearchPanel = () => {
  return (
   <div className="search-panel-new position-relative pre-animate fade-up"
   style={{ minHeight: '425px' }}>
    <div className="container" style={{marginTop:'30px'}}>
      <div className="tabs">
        <TabContext>
          <Box className="header">
            <TabList>
              <Tab
                label="Flight"
                icon={
                  <img src={flightmono}alt="flight"/>
                }
                value="flight"
              />
              <Tab
                label="Hotel"
                icon={
                  <img
                    src={hotelmono}
                    alt=""
                  />
                }
                value="hotel"
              />
              <Tab
                label="Holiday"
                icon={
                  <img
                    src={holidaymono}
                    alt=""
                  />
                }
                value="holiday"
              />
              <Tab
                label="Visa"
                icon={
                  <img src={visamono} alt="" />
                }
                value="visa"
              />
            </TabList>
          </Box>
          <TabPanel value="flight" className="pl-0 pr-0"><h5>hgkj</h5></TabPanel>
          <TabPanel value="hotel" className="pl-0 pr-0">
            <h5>kjgsk</h5>
          </TabPanel>
          <TabPanel value="holiday" className="pl-0 pr-0">
          <h5>kjgsk</h5>
              </TabPanel>
              <TabPanel value="visa" className="pl-0 pr-0">
              <h5>kjgsk</h5>
              </TabPanel>
        </TabContext>
      </div>
    </div>
   </div>
  );
};

export default HomeSearchPanel;
