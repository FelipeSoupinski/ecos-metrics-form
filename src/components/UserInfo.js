import { ArrowLeft } from "@styled-icons/bootstrap/ArrowLeft";
import { ArrowRight } from "@styled-icons/bootstrap/ArrowRight";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Warning from "./Warning";

const UserInfo = () => {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const [warningControl, setWarningControl] = useState(false);
  const [warningMsg, setWarningMsg] = useState("");

  const showWarning = (message) => {
    setWarningMsg(message);
    setWarningControl(true);
    setTimeout(() => setWarningControl(false), 3000);
  };

  const next = () => {
    if (!name || !email) {
      showWarning("Please fill in all fields.");
      return;
    }

    fetch("http://localhost:5000/user", {
      body: JSON.stringify({ name, email }),
      method: "POST",
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => {
        if (res.status === 200) navigate("/form");
        else {
          showWarning("Only one response per user is allowed.");
          return;
        }
      })
      .catch((error) => console.error(error));
  };

  return (
    <>
      <Warning message={warningMsg} show={warningControl} />
      <div className="form container">
        <div className="row my-auto">
          <div className="col col-12">
            <h2>User Information</h2>
            <hr />
          </div>
          <div className="col col-12 mt-3">
            <div className="text-left">
              <h6>The user data collected is only for form control.</h6>
            </div>
            <div>
              <div className="input-group mt-5">
                <label htmlFor="name" className="input-group-text">
                  Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  onBlur={(event) => setName(event.target.value)}
                  required
                />
              </div>
              <div className="input-group mt-5">
                <label htmlFor="email" className="input-group-text">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  onBlur={(event) => setEmail(event.target.value)}
                  required
                />
              </div>
              <div className="d-flex justify-content-between mt-5">
                <button
                  className="btn btn-secondary"
                  onClick={() => window.history.back()}
                >
                  <ArrowLeft width={13} height={13} />
                  Back{" "}
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
