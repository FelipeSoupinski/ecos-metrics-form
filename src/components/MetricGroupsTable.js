import { ArrowLeft } from "@styled-icons/bootstrap/ArrowLeft";
import React from "react";
import allMetricGroups from "../files/all-metric-groups";
import allMetrics from "../files/all-metrics";
import { useState } from "react";

const MetricGroupsTable = () => {
  const [expandedRow, setExpandedRow] = useState(null);
  const data = allMetricGroups;

  const handleRowClick = (index) => {
    setExpandedRow(expandedRow === index ? null : index);
  };

  const getMetrics = (metricsString) => {
    const metricIds = metricsString.split(", ").map((id) => id.trim());
    return allMetrics.filter((metric) => metricIds.includes(metric.id));
  };

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
              <React.Fragment key={index}>
                <tr onClick={() => handleRowClick(index)} className="cursor-pointer">
                  {Object.values(row).map((value, cellIndex) => (
                    <td key={cellIndex} className="border white p-2">
                      {value}
                    </td>
                  ))}
                </tr>
                {expandedRow === index && (
                  <tr>
                    <td colSpan={Object.keys(row).length} className="border white p-1">
                      <table className="w-full border-collapse border text-justify my-1">
                        <thead>
                          <tr>
                            <th className="border white p-2">ID</th>
                            <th className="border white p-2">Name</th>
                            <th className="border white p-2">Definition</th>
                          </tr>
                        </thead>
                        <tbody>
                          {getMetrics(row.metrics).map((metric) => (
                            <tr key={metric.id}>
                              <td className="border white p-2">{metric.id}</td>
                              <td className="border white p-2">{metric.name}</td>
                              <td className="border white p-2">{metric.definition}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </td>
                  </tr>
                )}
              </React.Fragment>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default MetricGroupsTable;