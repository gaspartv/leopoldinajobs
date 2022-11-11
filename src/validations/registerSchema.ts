import * as yup from "yup";

export const registerSchema = yup.object().shape({
  name: yup
    .string()
    .required("Nome é obrigatório")
    .matches(/.{3,}/, "Deve ter no minimo 3 digitos"),

  surname: yup
    .string()
    .required("Sobrenome é obrigatório")
    .matches(/.{3,}/, "Deve ter no minimo 3 digitos"),

  email: yup
    .string()
    .email("Deve ser um e-mail válido")
    .required("Email é obrigatório"),

  password: yup
    .string()
    .required("Senha é obrigatório")
    .matches(/[A-Z]/, "Deve conter ao menos 1 letra maiúscula")
    .matches(/[a-z]/, "Deve conter ao menos 1 letra minuscula")
    .matches(/(\d)/, "Deve conter ao menos um número")
    .matches(/(\W)|_/, "Deve conter um caracter especial")
    .matches(/.{5,}/, "Deve ter no minimo 5 digitos"),

  checkPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "As senhas são diferentes"),
});
