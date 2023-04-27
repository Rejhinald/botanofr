import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import { addAccount } from "../actions/accountActions";

function Registerscreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const AddUserInfo = async () => {
    let formField = new FormData();

    formField.append("email", email);
    formField.append("password", password);
    formField.append("fname", fname);
    formField.append("lname", lname);

    dispatch(addAccount(formField)).then((response) => {
      navigate("/");
    });
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setError("Passwords do not match");
    } else {
      AddUserInfo();
    }
  };

  return (
    <div>
      <br />
      <br />
      <div class="text-center">
        <h1>Sign Up</h1>
      </div>
      <div class="container">
        <div class="row">
          <div class="row justify-content-center mt-5">
            <div class="col-sm-14 col-12">
              <Form>
                <Form.Group className="mb-3">
                  <Form.Label>First Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter First Name"
                    value={fname}
                    onChange={(e) => setFname(e.target.value)}
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter Last Name"
                    value={lname}
                    onChange={(e) => setLname(e.target.value)}
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                  </Form.Text>
                </Form.Group>
                <Form.Group onSubmit={handleSubmit} className="mb-3">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={handlePasswordChange}
                  />

                  <br />

                  <Form.Label>Confirm Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Confirm Password"
                    value={confirmPassword}
                    onChange={handleConfirmPasswordChange}
                  />
                </Form.Group>
                <br />
                <div className="text-center">
                  <Button
                    type="submit"
                    onClick={handleSubmit}
                    variant="primary"
                  >
                    Submit
                  </Button>
                  <br />
                  <br />
                  <h4>{error && <div>{error}</div>}</h4>
                </div>
                <br />
              </Form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Registerscreen;
