import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { logout } from "../actions/accountActions";
import { useNavigate } from "react-router-dom";
import '../bootstrap.min.css';

const LogoutScreen = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [confirmLogout, setConfirmLogout] = useState(false);

  const logoutHandler = async () => {
    await dispatch(logout());
    navigate("/login");
  };

  useEffect(() => {
    if (confirmLogout) {
      logoutHandler();
    }
  }, [confirmLogout]);

  return (
    <div style={{ margin: "15% 15%" }}>
      {!confirmLogout ? (
        <div>
          <p className="text-center">Are you sure you want to logout?</p>
          <div className="d-flex justify-content-center">
            <button className="btn btn-primary me-2" onClick={() => setConfirmLogout(true)}>Yes</button>
            <button type="button" class="btn btn-primary" onClick={() => navigate("/")}>No</button>
          </div>
        </div>
      ) : (
        <div>
          <p className="text-center">Logging out...</p>
        </div>
      )}
    </div>
  );
};

export default LogoutScreen;
