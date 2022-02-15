import React, { useState } from "react";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import Tab from "@mui/material/Tab";
import { Box } from "@material-ui/core";
import flightmono from "../images/flight-mono.svg";
import hotelmono from "../images/hotel-mono.svg";
import holidaymono from "../images/holiday-mono.svg";
import visamono from "../images/visa-mono.svg";
import "react-dates/initialize";
import "../App.css";
import "react-dates/lib/css/_datepicker.css";
import DatePick from "../components/DatePick";

const HomeSearchPanel = () => {
  const [data, setData] = useState("flight");
  return (
    <div
      className="search-panel-new position-relative pre-animate fade-up"
      style={{ minHeight: "425px" }}
    >
      <div className="container" style={{ marginTop: "30px" }}>
        <div className="tabs">
          <TabContext value={data}>
            <Box className="header">
              <TabList
                onChange={(e, value) => setData(value)}
                indicatorColor=""
              >
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
                <option value="dhaka">Dhaka</option>
                <option value="chittagong">Chittagong</option>
                <option value="sylhet">Sylhet</option>
              </select>

              <select>
                <option value="chittagong">Chittagong</option>
                <option value="dhaka">Dhaka</option>
                <option value="sylhet">Sylhet</option>
              </select>

              <input type="date" />
              <button>Search Flights</button>
            </TabPanel>

            <TabPanel value="hotel" className="pl-0 pr-0">
              <div>
                <div className="row">
                  <div className="col-md-4">
                    <div className="border-col">
                      <div style={{ padding: "8px 16px" }}>
                        <label
                          style={{ paddingLeft: "12px", fontSize: "12px" }}
                        >
                          Enter City or Property
                        </label>
                        <div
                          className="autocomplete"
                          style={{ width: "300px" }}
                        >
                          <input
                            id="myInput"
                            className="myInput"
                            type="text"
                            name="myCountry"
                            placeholder="Search Hotels"
                          />
                        </div>
                        <div>
                           <span style={{ fontSize: "12px", paddingLeft: "10px" }}>
                              <strong>Cox's Bazar,</strong>Bangaldesh
                           </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-4">
                    <div className="border-col">
                      <div
                        className="d-flex justify-content-between"
                        style={{ padding: "13px 0" }}
                      >
                        <div>
                          <span
                            style={{
                              paddingLeft: "22px",
                              fontSize: "12px",
                              display: "block",
                            }}
                          >
                            Check-In Date
                          </span>
                          <div style={{ paddingLeft: "12px" }}>
                            <DatePick />
                          </div>
                          <span
                            style={{ fontSize: "12px", paddingLeft: "20px" }}
                          >
                            <strong>2022,</strong>Tuesday
                          </span>
                        </div>
                        <div>
                          <div>
                            <span
                              style={{
                                paddingLeft: "22px",
                                fontSize: "12px",
                                display: "block",
                              }}
                            >
                              Check-Out Date
                            </span>
                            <div style={{ paddingLeft: "12px" }}>
                              <DatePick />
                            </div>
                            <span
                              style={{ fontSize: "12px", paddingLeft: "20px" }}
                            >
                              <strong>2022,</strong>Friday
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="border-col">
                      <div style={{ padding: "11px 16px" }}>
                        <label
                          style={{ paddingLeft: "12px", fontSize: "12px" }}
                        >
                          Guest(s) & Room(s)
                        </label>
                        <div
                          className="autocomplete"
                          style={{ width: "300px" }}
                        >
                          <h6 style={{ paddingLeft: "10px", margin: "0" }}>
                            3 Guest
                          </h6>
                        </div>
                        <div>
                          <small
                            style={{
                              paddingLeft: "11px",
                              fontSize: "12px",
                            }}
                          >
                            <strong>1 Room</strong>
                          </small>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="d-flex justify-content-center search-btn-div">
                <a className="search-hotel-btn" href="./home">Search Hotels</a>
                </div>
              </div>
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
