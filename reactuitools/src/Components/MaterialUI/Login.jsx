import React from "react";
import { Container, Box, Card, TextField, Button } from "@mui/material";
const Login = () => {
  return (
    <>
      <Container
        className="mt-5"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Card
          style={{ border: "1px solid red", width: "500px", padding: "20px" }}
        >
          <Box className="mb-3">
            <TextField
              fullWidth
              id="filled-basic"
              label="User Name"
              variant="filled"
            />
          </Box>
          <Box className="mb-3">
            <TextField
              fullWidth
              id="filled-basic"
              label="UserId"
              variant="filled"
            />
          </Box>
          <Box>
            <Button variant="contained" size="medium">
              Submit
            </Button>
          </Box>
        </Card>
      </Container>
    </>
  );
};

export default Login;
