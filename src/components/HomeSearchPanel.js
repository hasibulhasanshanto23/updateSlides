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
import moment from 'moment'
import "../App.css";
import "react-dates/lib/css/_datepicker.css";
import DatePick from "../components/DatePick";

const HomeSearchPanel = () => {
  const [data, setData] = useState("flight");
  const [room, setRoom] = useState(3);
  const dayName=moment().format('dddd');

  if (room < 1) {
    setRoom(1);
  }
  if (room > 30) {
    setRoom(30);
  }

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
                          <span
                            style={{ fontSize: "12px", paddingLeft: "10px" }}
                          >
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
                        <div className="placeholder-text">
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
                            <strong>2022,</strong><span style={{opacity:'0.6'}}>{dayName}</span>
                          </span>
                        </div>
                        <div>
                          <div className="placeholder-text">
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
                              <strong>2022,</strong><span style={{opacity:'0.6'}}>{dayName}</span>
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
                  <a className="search-hotel-btn" href="./home">
                    Search Hotels
                  </a>
                </div>
              </div>
            </TabPanel>

            <TabPanel value="holiday" className="pl-0 pr-0">
              <div>
                <div className="row">
                  <div className="col-md-6">
                    <div className="border-col">
                      <div style={{ padding: "15px 0px" }}>
                        <label
                          style={{
                            fontSize: "12px",
                            display: "block",
                            paddingLeft: "20px",
                          }}
                        >
                          Destination
                        </label>
                        <div
                          className="autocomplete"
                          style={{ paddingLeft: "10px" }}
                        >
                          <input
                            id="myInput"
                            className="myInput"
                            type="text"
                            name="myCountry"
                            placeholder="City"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div style={{ margin: "30px 0" }}>
                      <a className="add-city-btn" href="/home">
                        ADD CITY
                      </a>
                    </div>
                  </div>

                  <div className="col-md-6" style={{ marginTop: "12px" }}>
                    <div className="border-col">
                      <div style={{ padding: "15px 0px" }}>
                        <label
                          style={{
                            fontSize: "12px",
                            display: "block",
                            paddingLeft: "20px",
                          }}
                        >
                          Travel Date
                        </label>
                        <div className="placeholder-text" style={{ paddingLeft: "10px" }}>
                          <DatePick />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-6" style={{ marginTop: "12px" }}>
                    <div className="border-col">
                      <div
                        style={{ padding: "15px 0px" }}
                        className="d-flex justify-content-between"
                      >
                        <div>
                          <span
                            style={{
                              fontSize: "12px",
                              display: "block",
                              paddingLeft: "20px",
                            }}
                          >
                            Room(s)
                          </span>
                          <p
                            style={{
                              margin: "0",
                              fontSize: "18px",
                              fontWeight: "600",
                              paddingLeft: "20px",
                            }}
                          >
                            {room} Room
                          </p>
                        </div>
                        <div style={{ paddingRight: "20px", marginTop: "7px" }}>
                          <div
                            className="d-flex justify-content-center align-items-center"
                            style={{ cursor: "pointer" }}
                          >
                            <div
                              onClick={() => setRoom(room - 1)}
                              style={{
                                padding: "4px 10px",
                                backgroundColor: "#fff",
                                borderRadius: "16px 0 0 16px",
                                boxShadow: "0 1px 3px rgb(0 0 0 / 10%",
                              }}
                            >
                              <span>
                                <i className="mdi mdi-minus"></i>
                              </span>
                            </div>
                            <div
                              onClick={() => setRoom(room + 1)}
                              style={{
                                padding: "4px 10px",
                                backgroundColor: "#fff",
                                borderRadius: "0px 16px 16px 0px",
                                boxShadow: "0 1px 3px rgb(0 0 0 / 10%",
                              }}
                            >
                              <span>
                                <i className="mdi mdi-plus"></i>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="d-flex justify-content-center search-btn-div">
                  <a className="search-hotel-btn" href="/home">
                    Search Packages
                  </a>
                </div>
              </div>
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
