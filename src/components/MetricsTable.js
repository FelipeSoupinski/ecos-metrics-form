const MetricsTable = ({ metricsRows, addResponse }) => {
  return (
    <div className="row my-auto border-white">
      {metricsRows.map((row, index) => (
        <div key={`response-${index}`} className="col text-center">
          <button
            className="btn btn-small btn-text white fs14px"
            data-toggle="tooltip"
            data-placement="top"
            title={row.definition}
            onClick={() => addResponse(row)}
          >
            <span>{row.name}</span>
            <span className="add">+</span>
          </button>
        </div>
      ))}
    </div>
  );
};

export default MetricsTable;
