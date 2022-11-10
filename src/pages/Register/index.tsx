import { Header } from "../../components/Header";
import { FormStyled, RegisterStyled } from "./styles";

export const Register = () => {
  return (
    <RegisterStyled>
      <Header />
      <FormStyled>
        <form>
          <h2>Criar conta</h2>
          <div>
            <label>Nome</label>
            <input type="text" placeholder="Digite seu nome" />
          </div>
          <div>
            <label>E-mail</label>
            <input type="text" placeholder="Digite seu e-mail" />
          </div>
          <div>
            <label>Senha</label>
            <input type="text" placeholder="Digite sua senha" />
          </div>
          <div>
            <label>Repetir senha</label>
            <input type="text" placeholder="Repita sua senha" />
          </div>
          <div>
            <label>Idade</label>
            <input type="text" placeholder="Digite sua idade" />
          </div>
          <div>
            <label>Cidade</label>
            <input type="text" placeholder="Digite sua cidade" />
          </div>
          <div>
            <p>
              Já tem cadastro? Faça login! <span></span>
            </p>
            <button>Cadastrar</button>
          </div>
        </form>
      </FormStyled>
    </RegisterStyled>
  );
};
