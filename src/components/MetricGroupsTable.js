import { ArrowLeft } from "@styled-icons/bootstrap/ArrowLeft";
import React from "react";
import allMetricGroups from "../files/all-metric-groups";

const MetricGroupsTable = () => {
  const data = allMetricGroups;

  return (
    <div className="container">
      <div className="row align-items-center">
        <div className="col col-2">
          <button
            className="btn btn-secondary my-2"
            onClick={() => window.history.back()}
          >
            <ArrowLeft width={13} height={13} />
            Back
          </button>
        </div>
        <div className="col col-12">
          <h2 className="text-center white">Metric groups table</h2>
        </div>
      </div>
      <hr className="white" />
      {data.length > 0 && (
        <table className="w-full border-collapse border text-justify my-5">
          <thead>
            <tr>
              {Object.keys(data[0]).map((header) => (
                <th key={header} className="border white p-2">
                  {header?.[0]?.toUpperCase() + header?.slice(1)}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((row, index) => (
              <tr key={index}>
                {Object.values(row).map((value, cellIndex) => (
                  <td key={cellIndex} className="border white p-2">
                    {value}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default MetricGroupsTable;
