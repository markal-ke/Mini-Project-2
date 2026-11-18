// This component is responsible for "DISPLAYING THE RESULTS FROM THE SEARCH FUNCTION"

import React, { useState } from "react";
import "./SearchResults.css";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Checkbox from "@mui/material/Checkbox";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

export const SearchResults = ({ results = [] }) => {
  const [currentMount, setCurrentMount] = useState([]);


  const handleSubmit = (result) => {
    setCurrentMount((prev) => [
      ...prev,
      {
        ...result,
        checked: false,


      },
    ]);
  };

  const toggleCheck = (id) => {
    setCurrentMount((prev) =>
      prev.map((mount) =>
        mount.id === id ? { ...mount, checked: !mount.checked } : mount,
      ),
    );
  };

  const handleResetList = () => {
    e.preventDefault();
    setCurrentMount([]);
  };

  return (
    <>
      <div>
        <br/>
        <div className="results-list">
          {results.map((result) => (
            <div key={result.id} className="result-item">
              {result.name}
              <br/>
              <Button
                className="Button-Space"
                variant="contained"
                sx={{
                  backgroundColor: "#565656",
                  color: "#ffffff",
                  "&:hover": {
                    backgroundColor: "#b4b4b4",
                    borderRadius: 4
                  },
                }}
                type="button"
                onClick={() => handleSubmit(result)}
              >
                Add
              </Button>
              <br/>
            </div>
            
          ))}
        </div>
      </div>

      <br />

      <Container maxWidth="sm">
        <Box
          sx={{
            bgcolor: "#313031",
            height: "100vh",
            borderRadius: 2,
            border: 3,
            borderColor: "#95825c",
          }}
        >
          <h3>Checklist</h3>

          {currentMount.map((mount) => (
            <div key={mount.id}>
              <Checkbox
                checked={mount.checked}
                onChange={() => toggleCheck(mount.id)}
                slotProps={{
                  input: { "aria-label": mount.name },
                }}
              />
              {mount.name}
              <br />
              {mount.sources?.[0]?.type}
              <br />
              {mount.sources?.[0]?.text}
            </div>
          ))}

          <button onClick={handleResetList}> Reset </button>
        </Box>
      </Container>
    </>
  );
};
