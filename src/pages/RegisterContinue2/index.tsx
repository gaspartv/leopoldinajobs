import { Box, Step, StepLabel, Stepper } from "@mui/material";
import { Container } from "../../components/Container";
import { FormStyled } from "../../components/FormRegister/styles";
import { Header } from "../../components/Header";
import { steps } from "../RegisterContinue1";
import { CompleteStyled } from "./styles";


export const RegisterContinue2 = () => {
  return (
    <>
      <Header />
      <Container>
        <CompleteStyled>
          <Box
            sx={{
              padding: 2,
              backgroundColor: "white",
              width: "50%",
              maxWidth: 350,
              borderRadius: 1,
            }}
          >
            <Stepper activeStep={1} alternativeLabel>
              {steps.map((label) => (
                <Step key={label}>
                  <StepLabel>{label}</StepLabel>
                </Step>
              ))}
            </Stepper>
          </Box>
          <FormStyled>
            <form>
              <h2>Completar cadastro</h2>
              <h4>Falta pouco!</h4>
              <span className="line"></span>
              <div></div>
            </form>
          </FormStyled>
        </CompleteStyled>
      </Container>
    </>
  );
};
