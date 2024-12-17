import { faApple, faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled, { css } from "styled-components";
import { authUser } from "../hooks/useHooks";
import toast from "react-hot-toast";

const StyledFormDiv = styled.div`
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
`;

const StyledForm = styled.form`
  display: flex;
  justify-content: center;
  width: 40rem;
  flex-direction: column;
  height: 60%;
  padding: 4rem 2rem;
  box-shadow: 0 0 4px #00000050;
  border-radius: 12px;
  gap: 2rem;

  position: relative;
`;

const StyledFormAlternative = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
`;

const StyledButtonLink = styled(Link)`
  background-color: ${(props) => props.background};
  color: ${(props) => props.color || "#fff"};
  padding: ${(props) => props.padding};
  border-radius: 12px;
  text-decoration: none;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
`;

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  & h1 {
    font-size: 1.2rem;
  }

  & button {
    padding: 1rem;
    border-radius: 12px;
    border: none;
    background-color: #000;
    color: #fff;
    width: 30%;
    cursor: pointer;
  }
`;

const StyledOR = styled.div`
  position: relative;
  border-top: 1px solid #d2d2d2;
  width: 100%;

  & div {
    position: absolute;
    margin-top: -2%;
    top: 0;
    left: 50%;
    background-color: #fff;
    padding: 0 1rem;

    transform: translateX(-50%);
  }
`;

const StyledCol = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  & input {
    padding: 1rem;
    border-radius: 8px;
    border: 1px solid #000;
    outline: none;

    &:focus {
      border: 2px solid #3153d8;
    }
  }
`;

const StyledRow = styled.div`
  display: flex;
  justify-content: space-between;
  & div {
    display: flex;
    align-items: center;
    gap: 0.4rem;
  }

  ${(props) =>
    props.align == "center" &&
    css`
      justify-content: center;
      align-items: center;
      gap: 0.3rem;
    `}

  & ${StyledButtonLink} {
    font-weight: 600;
  }
`;

const StyledBackButton = styled.div`
  position: absolute;
  top: 5%;
  left: 5%;
  cursor: pointer;
`;
export default function Login() {
  const navigate = useNavigate();
  const [isEmail, setIsEmail] = useState("");
  const [isPassword, setIsPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(null);

  useEffect(() => {
    const IS_LOGGED_IN = localStorage.getItem("jwt");
    if (IS_LOGGED_IN) {
      setIsLoggedIn(IS_LOGGED_IN);
      toast.success("You are logged in, redirecting...");
      if (localStorage.getItem("isAdmin")) return navigate("/admin");
      navigate("/user");
    }
  }, [isLoggedIn]);

  async function handleSubmit(e) {
    e.preventDefault();

    const user = {
      email: isEmail.trim(),
      password: isPassword,
    };
    try {
      setIsLoading(true);
      const data = await authUser(user);
      const res = await data.json();
      if (res.status == "success") {
        localStorage.setItem("jwt", res.token);
        localStorage.setItem("id", res.id);
        localStorage.setItem("name", res.name);
        if (res.isAdmin) {
          localStorage.setItem("isAdmin", true);
        }
      }

      if (res.status == "success")
        toast.success(`Welcome back, ${localStorage.getItem("name")}`);
      if (res.status == "error") toast.error(res.message);
    } catch (err) {
      toast.error(err.message);
    } finally {
      setIsLoading(false);
      setIsLoggedIn(localStorage.getItem("jwt"));
    }
  }

  return (
    <StyledFormDiv>
      <StyledForm onSubmit={handleSubmit}>
        <StyledBackButton onClick={() => navigate("/")}>
          <FontAwesomeIcon icon={faArrowLeft} color="black" size="xl" />
        </StyledBackButton>
        <StyledDiv>
          <h1>Welcome Back</h1>
          <h1>Please login to your account</h1>
        </StyledDiv>
        <StyledFormAlternative>
          <StyledButtonLink to="/" background="#3153D8" padding="1rem">
            <span>
              <FontAwesomeIcon icon={faFacebook} />
            </span>
            Login with Facebook
          </StyledButtonLink>
          <StyledButtonLink to="/" background="#000000" padding="1rem">
            <span>
              <FontAwesomeIcon icon={faApple} />
            </span>
            Login with Apple
          </StyledButtonLink>
        </StyledFormAlternative>
        <StyledOR>
          <div>OR</div>
        </StyledOR>
        <StyledCol>
          <input
            type="email"
            placeholder="Email Address"
            onChange={(e) => setIsEmail(e.target.value.trim())}
            value={isEmail}
            disabled={isLoading}
          />
          <input
            type="password"
            placeholder="Password"
            onChange={(e) => setIsPassword(e.target.value.trim())}
            value={isPassword}
            disabled={isLoading}
          />
        </StyledCol>
        <StyledRow>
          <div>
            <input type="checkbox" name="remember" id="remember" />
            <label htmlFor="remember">Remember Me</label>
          </div>
          <div>
            <StyledButtonLink to="/" color="#000">
              Forget password?
            </StyledButtonLink>
          </div>
        </StyledRow>
        <StyledDiv>
          <button type="submit">Login</button>
        </StyledDiv>
        <StyledRow align="center">
          <p>Don't have an account?</p>
          <StyledButtonLink to="/register" color="#000000">
            Sign up
          </StyledButtonLink>
        </StyledRow>
      </StyledForm>
    </StyledFormDiv>
  );
}
