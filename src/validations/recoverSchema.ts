import * as yup from "yup";

export const recoverSchema = yup.object().shape({
  email: yup
    .string()
    .email("Deve ser um e-mail válido")
    .required("Email é obrigatório"),
});
