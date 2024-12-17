import { faApple, faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled, { css } from "styled-components";
import validator from "validator";
import { createUser } from "../hooks/useHooks";
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

const StyledErrors = styled.div`
  display: flex;
  flex-direction: column;
  & p {
    color: #ff0000;
  }
`;

export default function Register() {
  const navigate = useNavigate();

  const [isName, setIsName] = useState("");
  const [isEmail, setIsEmail] = useState("");
  const [isPassword, setIsPassword] = useState("");
  const [isConfirmPassword, setIsConfirmPassword] = useState("");

  const [isSubmitting, setIsSubmitting] = useState(false);

  const [isLoggedIn, setIsLoggedIn] = useState(null);

  useEffect(() => {
    const IS_LOGGED_IN = localStorage.getItem("jwt");
    if (IS_LOGGED_IN) {
      setIsLoggedIn(isLoggedIn);
      navigate(-1);
    }
  }, [isLoggedIn]);

  const sanitizeName = (value) => {
    return value
      .split(" ")
      .map((v) => {
        return v.substr(0, 1).toUpperCase() + v.substr(1);
      })
      .join(" ");
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();

    const user = {
      name: isName.trim(),
      email: isEmail,
      password: isPassword,
    };

    try {
      setIsSubmitting(true);
      const data = await createUser(user);
      const res = await data.json();

      if (res.status == "error")
        toast.error("Something is wrong, please try again later");

      if (res.status == "success")
        toast.success("Your account is registered. Please login.");
    } catch (err) {
      toast.error(err.message);
      return;
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <StyledFormDiv>
      <StyledForm onSubmit={handleOnSubmit}>
        <StyledBackButton onClick={() => navigate(-1)}>
          <FontAwesomeIcon icon={faArrowLeft} color="black" size="xl" />
        </StyledBackButton>
        <StyledDiv>
          <h1>Create An Account</h1>
        </StyledDiv>
        <StyledFormAlternative>
          <StyledButtonLink to="/" background="#3153D8" padding="1rem">
            <span>
              <FontAwesomeIcon icon={faFacebook} />
            </span>
            Register with Facebook
          </StyledButtonLink>
          <StyledButtonLink to="/" background="#000000" padding="1rem">
            <span>
              <FontAwesomeIcon icon={faApple} />
            </span>
            Register with Apple
          </StyledButtonLink>
        </StyledFormAlternative>
        <StyledOR>
          <div>OR</div>
        </StyledOR>
        <StyledCol>
          <input
            type="text"
            placeholder="Name"
            onChange={(e) => {
              setIsName(sanitizeName(e.target.value));
            }}
            value={isName}
            disabled={isSubmitting}
          />
          {!validator.isEmail(isEmail) && (
            <StyledErrors>
              <p>Please insert a correct email address</p>
            </StyledErrors>
          )}

          <input
            type="email"
            placeholder="Email Address"
            onChange={(e) => {
              setIsEmail(e.target.value);
            }}
            value={isEmail}
            disabled={isSubmitting}
          />
          {isPassword.length < 8 && (
            <StyledErrors>
              <p>Password length must be more than 8</p>
            </StyledErrors>
          )}
          <input
            type="password"
            placeholder="Password"
            onChange={(e) => {
              setIsPassword(e.target.value.trim());
            }}
            value={isPassword}
            disabled={isSubmitting}
          />

          {isPassword !== isConfirmPassword && (
            <StyledErrors>
              <p>Both passwords are not the same!</p>
            </StyledErrors>
          )}

          <input
            type="password"
            placeholder="Confirm Password"
            onChange={(e) => {
              setIsConfirmPassword(e.target.value.trim());
            }}
            value={isConfirmPassword}
            disabled={isSubmitting}
          />
        </StyledCol>
        <StyledDiv>
          <button type="submit" disabled={isSubmitting}>
            Register
          </button>
        </StyledDiv>
        <StyledRow align="center">
          <p>Already have an account?</p>
          <StyledButtonLink to="/login" color="#000000">
            Log in
          </StyledButtonLink>
        </StyledRow>
      </StyledForm>
    </StyledFormDiv>
  );
}
