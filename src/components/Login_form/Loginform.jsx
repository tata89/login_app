import React, { useState, useEffect } from "react";
import styles from "./loginform.module.css";
import loginauth from "../../json_data/loginauth.json";
import { Redirect } from "react-router-dom";
const Loginform = () => {
  const [loggedin, setLoggedin] = useState(false);
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  useEffect(() => {
    localStorage.token = "";
  }, []);
  const handlesummit = (e) => {
    e.preventDefault();
    console.log("form summited" + user + pass);
    console.log(loginauth);
    if (user === loginauth.username && pass === loginauth.password) {
      setLoggedin(true);
      var to = (localStorage.token = "sfadfadfSasfadaefsaaaadv");
      console.log(to);
    } else {
      document.getElementById("err_cont").style.display = "block";
    }
  };

  const handleUsr = (e) => {
    setUser(e.target.value);
  };
  const handlePswd = (e) => {
    setPass(e.target.value);
  };
  if (loggedin) {
    return <Redirect to="/Emplist" />;
  }
  return (
    <React.Fragment>
      <div className={styles.form_cont}>
        <div>
          <form onSubmit={handlesummit}>
            <div className="form-group">
              <label className={styles.labl_txt} htmlFor="email">
                Username:
              </label>
              <input
                type="email"
                className="form-control"
                id="user"
                placeholder="Enter username"
                name="user"
                required
                value={user}
                onChange={handleUsr}
              />
            </div>
            <div className="form-group">
              <label className={styles.labl_txt} htmlFor="pwd">
                Password:
              </label>
              <input
                type="password"
                className="form-control"
                id="pwd"
                placeholder="Enter password"
                name="pswd"
                required
                value={pass}
                onChange={handlePswd}
              />
            </div>
            <button
              id="btnlog"
              type="submit"
              className="btn btn-primary"
              style={{ width: "100%" }}
            >
              Login
            </button>
          </form>
        </div>
      </div>
      <div
        id="err_cont"
        class="alert alert-danger"
        role="alert"
        style={{ display: "none" }}
      >
        Invalid username or password
      </div>
    </React.Fragment>
  );
};

export default Loginform;
