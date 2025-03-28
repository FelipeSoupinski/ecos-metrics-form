import { ArrowLeft } from "@styled-icons/bootstrap/ArrowLeft";
import { ArrowRight } from "@styled-icons/bootstrap/ArrowRight";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { healthMetricsGroups } from "../files/health-metrics-groups.js";
import { scenariosData } from "../files/scenarios-data.js";
import getServerUrl from "../helpers/get-server-url.js";
import FixedModalButton from "./FixedModalButton.js";
import MetricsTable from "./MetricsTable";
import Scenarios from "./Scenarios.js";
import Warning from "./Warning.js";

const Form = () => {
  const metricsRows = healthMetricsGroups;
  const scenariosRows = scenariosData;

  const navigate = useNavigate();

  const [response, setResponse] = useState([]);
  const [currScenario, setCurrScenario] = useState(0);

  const [warningControl, setWarningControl] = useState(false);
  const [warningMsg, setWarningMsg] = useState("");

  const [additionalConsiderations, setAdditionalConsiderations] = useState("");

  const email = localStorage.getItem("email");

  const showWarning = (message) => {
    setWarningMsg(message);
    setWarningControl(true);
    setTimeout(() => setWarningControl(false), 3000);
  };

  const addResponse = (item) => {
    const hasResponse = response.some((res) => res.name === item.name);
    !hasResponse && setResponse([...response, item]);
  };

  const rmResponse = (item) => {
    setResponse(response.filter((res) => res.name !== item.name));
  };

  const prevScenarioState = useRef(currScenario);

  useEffect(() => {
    if (prevScenarioState.current !== currScenario) {
      prevScenarioState.current = currScenario;
      fetch(
        `${getServerUrl()}/response?scenario=${currScenario}&email=${email}`,
        {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        }
      )
        .then((res) => {
          if (res.status === 200) {
            res.json().then((data) => {
              const value = JSON.parse(data?.data?.value ?? "[]");
              const response =
                metricsRows.filter((row) => value.includes(row.id)) ?? [];
              setResponse(response);
              setAdditionalConsiderations(
                data?.data?.additionalConsiderations ?? ""
              );
            });
          } else {
            throw new Error(res.statusText);
          }
        })
        .catch((error) => console.error(error));
    }
  }, [currScenario, email, metricsRows]);

  const prevScenario = () => {
    if (currScenario - 1 >= 0) {
      const prevScenario = currScenario - 1;
      setCurrScenario(prevScenario);
    }
  };

  const nextScenario = () => {
    if (response.length === 0) {
      showWarning("Please select at least one metric group to continue");
      return;
    }

    fetch(`${getServerUrl()}/response`, {
      body: JSON.stringify({
        userEmail: email,
        scenario: currScenario,
        value: response.map((res) => res.id),
        additionalConsiderations: additionalConsiderations,
      }),
      method: "POST",
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => {
        if (res.status === 200 && currScenario + 1 < scenariosRows.length) {
          setResponse([]);
          setAdditionalConsiderations("");
          setCurrScenario(currScenario + 1);
        } else {
          throw new Error(res.statusText);
        }
      })
      .catch((error) => console.error(error));
  };

  const finish = () => {
    if (response.length === 0) {
      showWarning("Please select at least one metric group to continue");
      return;
    }

    fetch(`${getServerUrl()}/response`, {
      body: JSON.stringify({
        userEmail: email,
        scenario: currScenario,
        value: response.map((res) => res.id),
      }),
      method: "POST",
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => {
        if (res.status === 200) {
          setResponse([]);
          setAdditionalConsiderations("");
          navigate("/in-the-end");
        } else {
          throw new Error(res.statusText);
        }
      })
      .catch((error) => console.error(error));
  };

  return (
    <div className="form container">
      <FixedModalButton />
      <Warning message={warningMsg} show={warningControl} />
      <div className="row my-auto">
        <div className="col col-12">
          <Scenarios scenarios={scenariosRows} scenarioIndex={currScenario} />
          <hr />
        </div>
        <div className="col col-12 mt-3">
          <div className="text-left">
            <b>
              Select the groups of metrics that you believe can help measure the
              scenario described above:
            </b>
          </div>
          <MetricsTable metricsRows={metricsRows} addResponse={addResponse} />
        </div>
        <div className="col col-12 response d-flex mb-3 border-white">
          <div className="row my-auto">
            {response.map((row, index) => (
              <div key={`response-${index}`} className="col text-center">
                <button
                  className="btn btn-small btn-text white fs14px"
                  data-toggle="tooltip"
                  data-placement="top"
                  title={row.definition}
                  onClick={() => rmResponse(row)}
                >
                  <span>{row.name}</span>
                  <span className="remove">x</span>
                </button>
              </div>
            ))}
          </div>
        </div>
        <div className="col col-12">
          <div className="row my-auto">
            <textarea
              rows="2"
              maxLength={500}
              className="additional-considerations"
              placeholder="Any additional considerations about this scenario? Write here."
              value={additionalConsiderations}
              onChange={(e) => setAdditionalConsiderations(e.target.value)}
            ></textarea>
          </div>
        </div>
      </div>
      <div className="col col-12 d-flex mb-3 justify-content-end fixed-bottom container">
        <div className="row mx-auto">
          <div className="col">
            <button
              className="btn btn-large btn-light d-flex align-items-center"
              title="previous"
              onClick={prevScenario}
              disabled={currScenario === 0}
            >
              <ArrowLeft width={13} height={13} /> <span>Back</span>
            </button>
          </div>
          <div className="col">
            {currScenario < scenariosRows.length - 1 && (
              <button
                className="btn btn-large btn-light d-flex align-items-center"
                title="next"
                onClick={nextScenario}
              >
                <span>Next</span> <ArrowRight width={13} height={13} />
              </button>
            )}
            {currScenario === scenariosRows.length - 1 && (
              <button
                className="btn btn-large btn-success d-flex align-items-center"
                title="next"
                onClick={finish}
              >
                <span>Finish</span> <ArrowRight width={13} height={13} />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
