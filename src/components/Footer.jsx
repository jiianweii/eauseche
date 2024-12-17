import {
  faCcApplePay,
  faCcMastercard,
  faCcPaypal,
  faCcStripe,
  faCcVisa,
  faFacebook,
  faInstagram,
  faTiktok,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faCopyright } from "@fortawesome/free-regular-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

const StyledFooter = styled.footer`
  display: flex;
  flex-direction: column;
  padding: 3rem 10rem;
  gap: 5rem;
  justify-content: center;
  align-items: center;
  background-color: #000;
  color: #fff;
`;

const StyledFooterSection = styled.section`
  display: flex;
  width: 100%;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const StyledFooterDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  & h1 {
    font-size: 1.7rem;
  }
  & p {
    font-size: 0.75rem;
  }
  & ul {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
  }
  & ul li {
    list-style-type: none;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #fff;
`;

const StyledInput = styled.input`
  padding: 1rem;
  outline: none;
  width: 100%;
  height: 100%;
  border-radius: 12px;
  border: none;
`;

const StyledNewsletterForm = styled.form`
  display: flex;
  position: relative;
  & button {
    position: absolute;
    height: 104%;
    top: 50%;
    border: none;
    right: -1px;
    width: 2.5rem;
    padding: 0.5rem;
    background-color: #494949;
    color: #fff;
    transform: translateY(-50%);
    border-top-right-radius: 12px;
    border-bottom-right-radius: 12px;
  }
`;

const StyledInlineDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: ${(props) => props.gap || "0.2rem"};
`;

const StyledButton = styled.button`
  cursor: pointer;
`;

export default function Footer() {
  return (
    <StyledFooter>
      <StyledFooterSection>
        <StyledFooterDiv>
          <h1>FASHION CHOICE</h1>
          <ul>
            <li>
              <StyledLink to="/">TOP SALES</StyledLink>
            </li>
            <li>
              <StyledLink to="/">DISCOUNTED ITEMS</StyledLink>
            </li>
            <li>
              <StyledLink to="/">NEW ITEMS</StyledLink>
            </li>
            <li>
              <StyledLink to="/">TOP BRANDS</StyledLink>
            </li>
          </ul>
        </StyledFooterDiv>
        <StyledFooterDiv>
          <h1>CUSTOMER SERVICE</h1>
          <ul>
            <li>
              <StyledLink to="/">CONTACT US</StyledLink>
            </li>
            <li>
              <StyledLink to="/">RETURN POLICY</StyledLink>
            </li>
            <li>
              <StyledLink to="/">SHIPPING POLICY</StyledLink>
            </li>
            <li>
              <StyledLink to="/">FAQ</StyledLink>
            </li>
            <li>
              <StyledLink to="/">PRIVACY POLICY</StyledLink>
            </li>
            <li>
              <StyledLink to="/">TERMS AND CONDITIONS</StyledLink>
            </li>
          </ul>
        </StyledFooterDiv>
        <StyledFooterDiv>
          <h1>ABOUT US</h1>
          <ul>
            <li>
              <StyledLink to="/">OUR STORY</StyledLink>
            </li>
            <li>
              <StyledLink to="/">OUR REVIEWS</StyledLink>
            </li>
            <li>
              <StyledLink to="/">OUR STORES</StyledLink>
            </li>
            <li>
              <StyledLink to="/">BRAND AMBASSADOR</StyledLink>
            </li>
            <li>
              <StyledLink to="/">JOIN US</StyledLink>
            </li>
          </ul>
        </StyledFooterDiv>
        <StyledFooterDiv>
          <h1>JOIN OUR NEWSLETTER</h1>
          <StyledNewsletterForm>
            <StyledInput type="email" placeholder="Enter your email" />
            <StyledButton>
              <FontAwesomeIcon icon={faArrowRight} />
            </StyledButton>
          </StyledNewsletterForm>
          <p>Join us and get up to 20% on your first purchase!</p>
        </StyledFooterDiv>
      </StyledFooterSection>
      <StyledFooterSection>
        <StyledInlineDiv gap="1rem">
          <FontAwesomeIcon size="2x" icon={faCcPaypal} />
          <FontAwesomeIcon size="2x" icon={faCcApplePay} />
          <FontAwesomeIcon size="2x" icon={faCcMastercard} />
          <FontAwesomeIcon size="2x" icon={faCcVisa} />
          <FontAwesomeIcon size="2x" icon={faCcStripe} />
        </StyledInlineDiv>
        <StyledFooterDiv>
          <StyledInlineDiv>
            Copyright
            <span>
              <FontAwesomeIcon icon={faCopyright} />
            </span>
            by Jian Wei
          </StyledInlineDiv>
        </StyledFooterDiv>
        <StyledFooterDiv>
          <StyledInlineDiv gap="1rem">
            <StyledLink to="">
              <FontAwesomeIcon icon={faFacebook} />
            </StyledLink>
            <StyledLink to="">
              <FontAwesomeIcon icon={faTwitter} />
            </StyledLink>
            <StyledLink to="">
              <FontAwesomeIcon icon={faInstagram} />
            </StyledLink>
            <StyledLink to="">
              <FontAwesomeIcon icon={faTiktok} />
            </StyledLink>
          </StyledInlineDiv>
        </StyledFooterDiv>
      </StyledFooterSection>
    </StyledFooter>
  );
}
