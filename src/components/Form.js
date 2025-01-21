import { ArrowLeft } from "@styled-icons/bootstrap/ArrowLeft";
import { ArrowRight } from "@styled-icons/bootstrap/ArrowRight";
import { useState } from "react";
import { healthMetricsGroups } from "../files/health-metrics-groups.js";
import { scenariosData } from "../files/scenarios-data.js";
import MetricsTable from "./MetricsTable";
import Scenarios from "./Scenarios.js";

const Form = () => {
  const metricsRows = healthMetricsGroups;
  const scenariosRows = scenariosData;

  const [response, setResponse] = useState([]);
  const [currScenario, setCurrScenario] = useState(0);

  const addResponse = (item) => {
    console.log("item", item);
    const hasResponse = response.some((res) => res.name === item.name);
    !hasResponse && setResponse([...response, item]);
  };

  const rmResponse = (item) => {
    setResponse(response.filter((res) => res.name !== item.name));
  };

  return (
    <div className="form container">
      <div className="row my-auto">
        <div className="col col-12">
          <Scenarios scenarios={scenariosRows} scenarioIndex={currScenario} />
          <hr />
        </div>
        <div className="col col-12 mt-3">
          <div className="text-left">
            <h6>
              Selecione os grupos de métricas que você acredita que possam
              ajudar a medir o cenário descrito acima:
            </h6>
          </div>
          <MetricsTable metricsRows={metricsRows} addResponse={addResponse} />
        </div>
        <div className="col col-12 response d-flex mb-5 border-white">
          <div className="row my-auto">
            {response.map((row, index) => (
              <div key={`response-${index}`} className="col text-center">
                <button
                  className="btn btn-small btn-text white"
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
        <div className="col col-12 d-flex mb-3 justify-content-end fixed-bottom">
          <div className="row">
            <div className="col">
              <button
                className="btn btn-large btn-light d-flex align-items-center"
                title="previous"
                onClick={() => {
                  if (currScenario - 1 >= 0) {
                    setCurrScenario(currScenario - 1);
                  }
                }}
                disabled={currScenario === 0}
              >
                <ArrowLeft width={13} height={13} /> <span>Anterior</span>
              </button>
            </div>
            <div className="col">
              <button
                className="btn btn-large btn-light d-flex align-items-center"
                title="next"
                onClick={() => {
                  if (currScenario + 1 <= scenariosData?.length - 1) {
                    setCurrScenario(currScenario + 1);
                  }
                }}
              >
                <span>Próximo</span> <ArrowRight width={13} height={13} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
