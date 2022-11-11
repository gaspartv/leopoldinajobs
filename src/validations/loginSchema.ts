import * as yup from "yup";

export const loginSchema = yup.object().shape({
  email: yup
    .string()
    .email("Deve ser um e-mail válido")
    .required("Email é obrigatório"),

  password: yup.string().required("Senha é obrigatório"),
});
