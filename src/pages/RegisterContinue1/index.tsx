import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import {
  Box,
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
  InputLabel,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  SelectChangeEvent,
  Step,
  StepLabel,
  Stepper,
  TextField,
} from "@mui/material";

import { iUser, UserContext } from "../../contexts/UserContext";

import { Container } from "../../components/Container";
import { FormStyled } from "../../components/FormRegister/styles";
import { Header } from "../../components/Header";

import { CompleteStyled } from "./styles";

export const steps = ["Informações pessoais", "Biográfia", "Finalizar"];

export const RegisterContinue1 = () => {
  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");

  const { editUser } = useContext(UserContext);

  const handleChangeMonth = (event: SelectChangeEvent) => {
    setMonth(event.target.value);
  };

  const handleChangeDay = (event: SelectChangeEvent) => {
    setDay(event.target.value);
  };

  const { register, handleSubmit } = useForm<iUser>();

  return (
    <>
      <Header />
      <Container>
        <CompleteStyled>
          <Box
            sx={{
              padding: 2,
              backgroundColor: "white",
              width: "100%",
              maxWidth: 350,
              borderRadius: 1,
            }}
          >
            <Stepper activeStep={0} alternativeLabel>
              {steps.map((label) => (
                <Step key={label}>
                  <StepLabel>{label}</StepLabel>
                </Step>
              ))}
            </Stepper>
          </Box>
          <FormStyled>
            <form onSubmit={handleSubmit(editUser)}>
              <h2>Completar cadastro</h2>
              <h4>Falta pouco!</h4>
              <span className="line"></span>
              <div>
                <div>
                  <TextField
                    id="outlined-basic"
                    label="Nome de usuário"
                    variant="outlined"
                    type="text"
                    {...register("username")}
                  />
                </div>
                <FormControl>
                  <FormLabel id="demo-row-radio-buttons-group-label">
                    Gender
                  </FormLabel>
                  <RadioGroup
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="row-radio-buttons-group"
                  >
                    <FormControlLabel
                      value="female"
                      control={<Radio />}
                      label="Mulher"
                      {...register("gender")}
                    />
                    <FormControlLabel
                      value="male"
                      control={<Radio />}
                      label="Homem"
                      {...register("gender")}
                    />
                    <FormControlLabel
                      value="other"
                      control={<Radio />}
                      label="Outro"
                      {...register("gender")}
                    />
                  </RadioGroup>
                </FormControl>
                <span>
                  <FormControl sx={{ width: 100 }}>
                    <InputLabel id="demo-select-small">Dia</InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-select-small"
                      value={day}
                      label="Dia"
                      {...register("day")}
                      onChange={handleChangeDay}
                    >
                      <MenuItem value="">
                        <em>- -</em>
                      </MenuItem>
                      <MenuItem value={1}>1</MenuItem>
                      <MenuItem value={2}>2</MenuItem>
                      <MenuItem value={3}>3</MenuItem>
                      <MenuItem value={4}>4</MenuItem>
                      <MenuItem value={5}>5</MenuItem>
                      <MenuItem value={6}>6</MenuItem>
                      <MenuItem value={7}>7</MenuItem>
                      <MenuItem value={8}>8</MenuItem>
                      <MenuItem value={9}>9</MenuItem>
                      <MenuItem value={10}>10</MenuItem>
                      <MenuItem value={11}>11</MenuItem>
                      <MenuItem value={12}>12</MenuItem>
                      <MenuItem value={13}>13</MenuItem>
                      <MenuItem value={14}>14</MenuItem>
                      <MenuItem value={15}>15</MenuItem>
                      <MenuItem value={16}>16</MenuItem>
                      <MenuItem value={17}>17</MenuItem>
                      <MenuItem value={18}>18</MenuItem>
                      <MenuItem value={19}>19</MenuItem>
                      <MenuItem value={20}>20</MenuItem>
                      <MenuItem value={21}>21</MenuItem>
                      <MenuItem value={22}>22</MenuItem>
                      <MenuItem value={23}>23</MenuItem>
                      <MenuItem value={24}>24</MenuItem>
                      <MenuItem value={25}>25</MenuItem>
                      <MenuItem value={26}>26</MenuItem>
                      <MenuItem value={27}>27</MenuItem>
                      <MenuItem value={28}>28</MenuItem>
                      <MenuItem value={29}>29</MenuItem>
                      <MenuItem value={30}>30</MenuItem>
                      <MenuItem value={31}>31</MenuItem>
                    </Select>
                  </FormControl>
                  <FormControl sx={{ minWidth:100 }}>
                    <InputLabel id="demo-simple-select-label">Mês</InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={month}
                      label="Mês"
                      {...register("month")}
                      onChange={handleChangeMonth}
                    >
                      <MenuItem value="">
                        <em>- -</em>
                      </MenuItem>
                      <MenuItem value={1}>Janeiro</MenuItem>
                      <MenuItem value={2}>Fevereiro</MenuItem>
                      <MenuItem value={3}>Março</MenuItem>
                      <MenuItem value={4}>Abril</MenuItem>
                      <MenuItem value={5}>Maio</MenuItem>
                      <MenuItem value={6}>Junho</MenuItem>
                      <MenuItem value={7}>Julho</MenuItem>
                      <MenuItem value={8}>Agosto</MenuItem>
                      <MenuItem value={9}>Setembro</MenuItem>
                      <MenuItem value={10}>Outubro</MenuItem>
                      <MenuItem value={11}>Novembro</MenuItem>
                      <MenuItem value={12}>Dezembro</MenuItem>
                    </Select>
                  </FormControl>
                  <span>
                    <TextField
                      sx={{ width: 100 }}
                      id="outlined-basic"
                      label="Ano"
                      variant="outlined"
                      type="text"
                      {...register("age")}
                    />
                  </span>
                </span>
              </div>
              <span>
                <p></p>
                <Button type="submit" variant="contained" disableElevation>
                  Avançar
                </Button>
              </span>
            </form>
          </FormStyled>
        </CompleteStyled>
      </Container>
    </>
  );
};
