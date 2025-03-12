import { ArrowLeft } from "@styled-icons/bootstrap/ArrowLeft";
import { ArrowRight } from "@styled-icons/bootstrap/ArrowRight";
import { InfoCircle } from "@styled-icons/bootstrap/InfoCircle";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Warning from "./Warning";
import getServerUrl from "../helpers/get-server-url";
import ConsentFormCheckboxModal from "./ConsentFormCheckboxModal";

const UserInfo = () => {
  const navigate = useNavigate();

  const [agree, setAgree] = useState(true);
  const [consentForm, setConsentForm] = useState(true);

  const [form, setForm] = useState({
    name: "",
    email: "",
    currentPosition: "",
    educationLevel: "High school",
    xpMonths: 0,
    gender: "",
    country: "",
    degreeArea: "",
    wantResults: true,
  });

  const updateForm = (field, value) => {
    setForm({ ...form, [field]: value });
  };

  const requiredFields = [
    "name",
    "email",
    "currentPosition",
    "educationLevel",
    "xpMonths",
    "country",
  ];

  const [warningControl, setWarningControl] = useState(false);
  const [warningMsg, setWarningMsg] = useState("");

  const showWarning = (message) => {
    setWarningMsg(message);
    setWarningControl(true);
    setTimeout(() => setWarningControl(false), 3000);
  };

  const next = () => {
    if (!agree) {
      showWarning("You must agree to participate in the research.");
      return;
    }

    if (!consentForm) {
      showWarning("You must accept the Free and Informed Consent Form.");
      return;
    }

    if (requiredFields.some((field) => !form[field])) {
      showWarning("Please fill in all required * fields.");
      return;
    }

    fetch(`${getServerUrl()}/user`, {
      body: JSON.stringify(form),
      method: "POST",
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => {
        if (res.status === 200) {
          localStorage.setItem("email", form.email);
          navigate("/form");
        } else {
          showWarning("Only one response per user is allowed.");
          return;
        }
      })
      .catch((error) => console.error(error));
  };

  return (
    <>
      <Warning message={warningMsg} show={warningControl} />
      <div className="form container h-70">
        <div className="row my-auto">
          <div className="col col-12">
            <h2>User Information</h2>
            <hr />
          </div>
          <div className="col col-12 mt-1">
            <div className="text-left">
              <h6>
                <InfoCircle width={16} height={16} /> The user data collected is
                only for form control and profile mapping.
              </h6>
            </div>
            <hr />
            <div className="row align-items-center">
              <div className="col col-6">
                <div className="input-group">
                  <label htmlFor="name" className="input-group">
                    Name *
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    onBlur={(event) => updateForm("name", event.target.value)}
                    maxLength={256}
                    required
                  />
                </div>
              </div>
              <div className="col col-6">
                <div className="input-group">
                  <label htmlFor="email" className="input-group">
                    Email *
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    onBlur={(event) => updateForm("email", event.target.value)}
                    maxLength={256}
                    required
                  />
                </div>
              </div>

              <div className="col col-6">
                <div className="input-group mt-3">
                  <label htmlFor="current-position" className="input-group">
                    What is your current position? *
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="current-position"
                    onBlur={(event) =>
                      updateForm("currentPosition", event.target.value)
                    }
                    maxLength={64}
                    required
                  />
                </div>
              </div>
              <div className="col col-6">
                <div className="input-group mt-3">
                  <label htmlFor="education-level" className="input-group">
                    What is your highest academic degree? *
                  </label>
                  <select
                    className="form-control bg-dark text-white"
                    id="education-level"
                    onChange={(event) =>
                      updateForm("educationLevel", event.target.value)
                    }
                    required
                  >
                    <option value="High school">High school</option>
                    <option value="Bachelor’s degree or undergraduate degree">
                      Bachelor’s degree or undergraduate degree
                    </option>
                    <option value="Specialized">Specialized</option>
                    <option value="Master Degree">Master Degree</option>
                    <option value="PhD Degree">PhD Degree</option>
                  </select>
                </div>
              </div>
              <div className="col col-6">
                <div className="input-group mt-3">
                  <label htmlFor="degree-area" className="input-group">
                    If do you have Bachelor’s degree or undergraduate degree,
                    What's your degree in?
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="degree-area"
                    onBlur={(event) =>
                      updateForm("degreeArea", event.target.value)
                    }
                    maxLength={64}
                  />
                </div>
              </div>
              <div className="col col-6">
                <div className="input-group mt-3">
                  <label htmlFor="experience" className="input-group">
                    How long time do you work with software ecosystems (in
                    months, only numbers)? *
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    id="experience"
                    onBlur={(event) =>
                      updateForm("xpMonths", event.target.value)
                    }
                    maxLength={8}
                    min={0}
                    required
                  />
                </div>
              </div>
              <div className="col col-6">
                <div className="input-group mt-3">
                  <label htmlFor="country" className="input-group">
                    Which country do you work? *
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="country"
                    onBlur={(event) =>
                      updateForm("country", event.target.value)
                    }
                    required
                  />
                </div>
              </div>
              <div className="col col-6">
                <div className="input-group mt-3">
                  <label htmlFor="gender" className="input-group text-left">
                    Gender
                    <span className="fs12px">
                      (We collect this information to understand SECO from your
                      perspective and deliver inclusive insights that appeal to
                      everyone in our community)
                    </span>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="gender"
                    onBlur={(event) => updateForm("gender", event.target.value)}
                    required
                  />
                </div>
              </div>
              <div className="col col-6">
                <div className="input-group mt-4">
                  <input
                    id="participate-research"
                    type="checkbox"
                    className="form-check-input"
                    defaultChecked
                    onChange={(event) =>
                      setAgree(Boolean(event.target.checked))
                    }
                  />
                  <label
                    htmlFor="participate-research"
                    className="form-check-label ml10px"
                  >
                    I agree to participate in this research.
                  </label>
                </div>
              </div>
              <div className="col col-6">
                <div className="input-group mt-4">
                  <input
                    id="want-receive-results"
                    type="checkbox"
                    className="form-check-input"
                    defaultChecked
                    onChange={(event) =>
                      updateForm("wantResults", Boolean(event.target.checked))
                    }
                  />
                  <label
                    htmlFor="want-receive-results"
                    className="form-check-label ml10px"
                  >
                    I want to receive the research results.
                  </label>
                </div>
              </div>
              <div className="col col-6">
                <div className="input-group">
                  <input
                    id="consent-form"
                    type="checkbox"
                    className="form-check-input"
                    defaultChecked
                    onChange={(event) =>
                      setConsentForm(Boolean(event.target.checked))
                    }
                  />
                  <label
                    htmlFor="consent-form"
                    className="form-check-label ml10px"
                  >
                    I declare that I have read and accept the Free and Informed
                    Consent Form.
                  </label>
                </div>
              </div>
              <div className="col col-6">
                <div className="input-group">
                  <ConsentFormCheckboxModal />
                </div>
              </div>
              <div className="d-flex justify-content-between mt-5">
                <button
                  className="btn btn-secondary"
                  onClick={() => window.history.back()}
                >
                  <ArrowLeft width={13} height={13} />
                  Back
                </button>
                <button className="btn btn-success" onClick={() => next()}>
                  Next <ArrowRight width={13} height={13} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserInfo;
