import styled from "styled-components";

function Footer() {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterSection>
          <h3>Food ~ Delhi </h3>
          <p>
            Pure vegetarian goodness, crafted with the taste of Indian
            tradition.
          </p>
        </FooterSection>

        <FooterSection>
          <h4>Quick Links</h4>
          <ul>
            <li>
              <a href="#menu">Menu</a>
            </li>
            <li>
              <a href="#about">About Us</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
            <li>
              <a href="#faq">FAQ</a>
            </li>
          </ul>
        </FooterSection>

        <FooterSection>
          <h4>Follow Us</h4>
          <SocialLinks>
            <a href="#">🐦</a>
            <a href="#">📘</a>
            <a href="#">📸</a>
          </SocialLinks>
        </FooterSection>
      </FooterContent>

      <BottomBar>
        <p>
          © 2025 Food ~ Delhi. All rights reserved. <br />
          Made with ❤️ by <span>Sumant</span> while learning 🚀
        </p>
      </BottomBar>
    </FooterContainer>
  );
}

export default Footer;

const FooterContainer = styled.footer`
  background: var(--black);
  color: var(--white);
  padding: 3rem 1rem 1rem 1rem;
  margin-top: 4rem;
`;

const FooterContent = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  max-width: 1200px;
  margin: 0 auto;
  gap: 2rem;
`;

const FooterSection = styled.div`
  flex: 1 1 250px;

  h3,
  h4 {
    margin-bottom: 1rem;
    color: var(--yellow);
    font-size: 1.6rem;
  }

  p {
    font-size: 1.1rem;
    line-height: 1.5;
  }

  ul {
    list-style: none;
    padding: 0;

    li {
      margin-bottom: 0.5rem;
    }

    a {
      text-decoration: none;
      color: var(--white);
      font-size: 1rem;
      transition: color 0.3s ease;

      &:hover {
        color: var(--yellow);
      }
    }
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;

  a {
    font-size: 1.5rem;
    color: var(--white);
    transition: color 0.3s ease;

    &:hover {
      color: var(--yellow);
    }
  }
`;

const BottomBar = styled.div`
  text-align: center;
  font-size: 1.4rem;
  color: var(--white);
  border-top: 2px solid var(--white);
  padding-top: 1rem;

  span {
    color: var(--yellow);
    font-weight: 600;
  }
`;
