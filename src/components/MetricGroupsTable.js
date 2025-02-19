import { ArrowDown } from "@styled-icons/bootstrap/ArrowDown";
import { ArrowUp } from "@styled-icons/bootstrap/ArrowUp";
import React, { useState } from "react";
import { ArrowLeft } from "styled-icons/bootstrap";
import allMetricGroups from "../files/all-metric-groups";
import allMetrics from "../files/all-metrics";

const MetricGroupsTable = ({ isModal = false }) => {
  const [expandedRow, setExpandedRow] = useState(null);
  const [selectedRow, setSelectedRow] = useState(null);
  const [sortConfig, setSortConfig] = useState({
    key: "name",
    direction: "ascending",
  });
  const data = allMetricGroups;

  const handleRowClick = (index) => {
    setExpandedRow(expandedRow === index ? null : index);
    setSelectedRow(index);
  };

  const getMetrics = (metricsString) => {
    const metricIds = metricsString.split(", ").map((id) => id.trim());
    return allMetrics.filter((metric) => metricIds.includes(metric.id));
  };

  const handleSort = (key) => {
    let direction = "ascending";
    if (sortConfig.key === key && sortConfig.direction === "ascending") {
      direction = "descending";
    }
    setSortConfig({ key, direction });
  };

  const sortedData = React.useMemo(() => {
    if (sortConfig.key && sortConfig.direction) {
      return [...data].sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === "ascending" ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === "ascending" ? 1 : -1;
        }
        return 0;
      });
    }
    return data;
  }, [data, sortConfig]);

  const renderListIcon = (cellIndex, rowIndex) => {
    if (cellIndex !== 0) return null;
    if (selectedRow === rowIndex && expandedRow === rowIndex)
      return <ArrowDown color="white" height={15} width={15} />;
    return <ArrowUp color="white" height={15} width={15} />;
  };

  return (
    <div className="container">
      {!isModal && (
        <div className="row align-items-center my-auto">
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
            <h3 className="text-center white">Metric Groups</h3>
          </div>
        </div>
      )}
      {sortedData.length > 0 && (
        <table className="w-full border-collapse border text-justify my-5">
          <thead>
            <tr>
              {Object.keys(sortedData[0]).map((header) => (
                <th
                  key={header}
                  className="border white p-2 cursor-pointer"
                  onClick={() => handleSort(header)}
                >
                  {header?.[0]?.toUpperCase() + header?.slice(1)}
                  {sortConfig.key === header &&
                    (sortConfig.direction === "ascending"
                      ? " 🔼"
                      : sortConfig.direction === "descending"
                      ? " 🔽"
                      : "")}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {sortedData.map((row, index) => (
              <React.Fragment key={index}>
                <tr
                  onClick={() => handleRowClick(index)}
                  className={`metric-row cursor-pointer hover:shadow-lg ${
                    selectedRow === index ? "selected" : ""
                  }`}
                >
                  {Object.values(row).map((value, cellIndex) => (
                    <td key={cellIndex} className="border white p-2">
                      {value}
                      {renderListIcon(cellIndex, index)}
                    </td>
                  ))}
                </tr>
                {expandedRow === index && (
                  <tr>
                    <td
                      colSpan={Object.keys(row).length}
                      className="border white p-1"
                    >
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
                              <td className="border white p-2">
                                {metric.name}
                              </td>
                              <td className="border white p-2">
                                {metric.definition}
                              </td>
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
