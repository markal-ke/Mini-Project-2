import { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

function LoginForm() {
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [submitResult, setSubmitResult] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (userPassword.length < 5) {
      setSubmitResult("Password must be at least 5 characters long");
    } else if (userPassword === userEmail) {
      setSubmitResult("Password must not match email address");
    } else {
      setSubmitResult("Successful login.");
      navigate("/search");
    }
  };

  return (
    <Box
      sx={{
        bgcolor: "#cecece",
        height: "50vh",
        borderRadius: 2,
        border: 3,
        borderColor: "#b3b3b3",
        display: "flex",
        justifyContent: "flex-end",
        alignItems:"center",
        maxHeight: 400,
        maxWidth: 800,
      }}
    >
      <div className="LoginForm componentBox">
        <form onSubmit={handleSubmit}>
          <div className="formRow">
            <TextField
              label="Square Enix ID"
              type="email"
              value={userEmail}
              name="userEmail"
              onChange={(e) => setUserEmail(e.target.value)}
              fullWidth
              variant="outlined"
            />
          </div>

          <br />

          <div className="formRow">
            <TextField
              label="Square Enix Password"
              type="password"
              value={userPassword}
              name="password"
              onChange={(e) => setUserPassword(e.target.value)}
              fullWidth
              variant="outlined"
            />
          </div>

          <br />

          <Button
            variant="contained"
            type="submit"
            sx={{
              backgroundColor: "#3b943f",
              borderRadius: 2,
              color: "#ffffff",
              width: 200,
              "&:hover": {
                backgroundColor: "#4fc458",
              },
            }}
          >
            Log In
          </Button>

          <p>{submitResult}</p>
        </form>
      </div>
    </Box>
  );
}

export default LoginForm;