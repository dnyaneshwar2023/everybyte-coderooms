import React, { useEffect } from "react";
import Card from "../components/Card";
import { useState } from "react";
import moment from "moment";
import { LinearProgress } from "@material-ui/core";
const axios = require("axios");

function Calendar() {
  const [contests, updateContests] = useState([]);
  useEffect(async () => {
    const response = await axios.get("https://kontests.net/api/v1/all");
    updateContests(response.data);
  }, []);

  return (
    <>
      {contests.length === 0 ? (
        <LinearProgress />
      ) : (
        <h3 className="mt-3 text-center">Contests</h3>
      )}
      <div className="container-fluid mb-5 mt-5">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="row gy-4">
              {contests.map((contest) => {
                const startTime = new Date(contest.start_time);
                const endTime = new Date(contest.end_time);
                return (
                  <Card
                    name={contest.name}
                    url={contest.url}
                    start_time={moment(startTime.toLocaleString()).format(
                      "MMMM Do YYYY, h:mm:ss a"
                    )}
                    end_time={moment(endTime.toLocaleString()).format(
                      "MMMM Do YYYY, h:mm:ss a"
                    )}
                    site={contest.site}
                    // duration={time}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Calendar;
