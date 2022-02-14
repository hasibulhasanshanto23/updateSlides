import React,{useState} from "react";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import Tab from "@mui/material/Tab";
import { Box } from "@material-ui/core";
import flightmono from "../images/flight-mono.svg";
import hotelmono from "../images/hotel-mono.svg";
import holidaymono from "../images/holiday-mono.svg";
import visamono from "../images/visa-mono.svg";

const HomeSearchPanel = () => {
  const [data,setData]=useState('flight')
  return (
    <div
      className="search-panel-new position-relative pre-animate fade-up"
      style={{ minHeight: "425px" }}
    >
      <div className="container" style={{ marginTop: "30px" }}>
        <div className="tabs">
          <TabContext value={data} >
            <Box className="header">
              <TabList  onChange={(e,value)=>setData(value)} indicatorColor=''>
                <Tab
                  label="Flight"
                  icon={<img src={flightmono} alt="flight" />}
                  value="flight"
                />
                <Tab
                  label="Hotel"
                  icon={<img src={hotelmono} alt="hotel" />}
                  value="hotel"
                />
                <Tab
                  label="Holiday"
                  icon={<img src={holidaymono} alt="holiday" />}
                  value="holiday"
                />
                <Tab
                  label="Visa"
                  icon={<img src={visamono} alt="visa" />}
                  value="visa"
                />
                  
              </TabList>
            </Box>
            
            <TabPanel value="flight" className="pl-0 pr-0">
              <h5>Flight Search</h5> 
              <select>
                <option value='dhaka'>Dhaka</option>
                <option value='chittagong'>Chittagong</option>
                <option value='sylhet'>Sylhet</option>
              </select>

              <select>
                <option value='chittagong'>Chittagong</option>
                <option value='dhaka'>Dhaka</option>
                <option value='sylhet'>Sylhet</option>
              </select>

              <input type='date'/>
              <button >Search Flights</button>
            </TabPanel>

            <TabPanel value="hotel" className="pl-0 pr-0">
              <h5>Hotel Search</h5>
            </TabPanel>

            <TabPanel value="holiday" className="pl-0 pr-0">
              <h5>Holiday Search</h5>
            </TabPanel>

            <TabPanel value="visa" className="pl-0 pr-0">
              <h5>Visa Search</h5>
            </TabPanel>

          </TabContext>
        </div>
      </div>
    </div>
  );
};

export default HomeSearchPanel;
