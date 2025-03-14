import { ArrowLeft } from "@styled-icons/bootstrap/ArrowLeft";
import { Link, useNavigate } from "react-router-dom";

const Tutorial = () => {
  const navigate = useNavigate();

  const isAllMetricsSet = localStorage.getItem("all-metrics") === "true";
  const isMetricGroupsSet = localStorage.getItem("metric-groups") === "true";
  const isQuestionnaireDisabled = !isAllMetricsSet || !isMetricGroupsSet;

  return (
    <div className="form container">
      <div className="row align-items-center my-auto">
        <div className="col col-2">
          <button
            className="btn btn-secondary"
            onClick={() => window.history.back()}
          >
            <ArrowLeft width={13} height={13} />
            Back
          </button>
        </div>
        <div className="col col-12 mb-3">
          <h3>Research information</h3>
        </div>
        <hr />
        <div className="col col-12 text-justify my-3">
          <p className="fs-5">
            This research aims to analyze the death of Software Ecosystems
            (SECO) and identify metrics that help prevent or identify it in
            advance. For this purpose, a multivocal literature review process
            was conducted, looking at documents from academia and industry. In
            research question 5 we look at metrics around SECO’s death and
            health (RQ5 - What metrics are related to the death of SECO?). As a
            result of this step, we collected 264 metrics. The metrics were
            classified and grouped into (I) according to the SECO aspects:
            social, technical and business, and (II) according to the main SECO
            indicators: robustness, niche creation and productivity. This
            resulted in 47 groups of metrics that can be used to monitor the
            SECO. The purpose of this questionnaire is to verify the usefulness
            of metric groups in certain SECO scenarios. Below, you can click on
            the buttons to view the list of all metrics and the table with the
            grouping. After viewing the metrics and groups, continue to answer
            the questionnaire by selecting which groups of metrics you consider
            relevant to measure the scenario described.
          </p>
        </div>
        <hr />
        <div className="col col-12 button-container justify-content-center">
          <Link
            to="/all-metrics"
            onClick={() => localStorage.setItem("all-metrics", "true")}
          >
            <button className="btn btn-lg btn-primary">
              <span>All metrics</span>
            </button>
          </Link>
          <Link
            to="/metric-groups"
            onClick={() => localStorage.setItem("metric-groups", "true")}
          >
            <button className="btn btn-lg btn-primary">
              <span>Metric groups</span>
            </button>
          </Link>
          <button
            className="btn btn-lg btn-primary"
            disabled={isQuestionnaireDisabled}
            onClick={() => navigate("/user-info")}
          >
            <span>Answer questionnaire</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Tutorial;
