import { useState, useEffect } from "react";
import { SearchResults } from "../component/SearchResults";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

// This component is responsible for "DEALING WITH THE SEARCHING OF THE NAME OF THE MOUNTS"

export default function SearchFilter() {
  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState([]);

  useEffect(() => {
    fetch(`https://ffxivcollect.com/api/mounts?search=${searchTerm}`)
      .then((response) => response.json())
      .then((data) => {
        const filteredResults = data.results.filter((mount) =>
          mount.name.toLowerCase().includes(searchTerm.toLowerCase()),
        );

        setResults(filteredResults);
      })
      .catch((error) => console.error(error));
  }, [searchTerm]);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <>
      <Box
        component="form"
        sx={{ "& > :not(style)": { m: 1, width: "75ch", borderRadius: 2} }}
        noValidate
        autoComplete="off"
        bgcolor= "black"
      >
      <TextField
        placeholder="Search for a mount..."
        value={searchTerm}
        onChange={handleSearchChange}
        variant= "filled"
         sx={{ 
          backgroundColor: "#cecece",
          borderRadius: 1
  }}
      />

      <SearchResults results={results} />

      </Box>
    </>
  );
}
