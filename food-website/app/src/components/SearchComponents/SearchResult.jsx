import styled from "styled-components";
import { BASE_URL } from "../../App";
import { Button } from "../../App";

function SearchResult({ data }) {
  return (
    <div>
      <FoodCardContainer>
        <Container>
          <FoodCards>
            {data?.map(({ name, image, text, price }) => (
              <FoodCard key={name}>
                <div className="food_image">
                  <img src={BASE_URL + image} alt="" />
                </div>
                <div className="food_info">
                  <div className="info">
                    <h3>{name}</h3>
                    <p>{text}</p>
                  </div>
                  <Button>₹{price.toFixed(2)}</Button>
                </div>
              </FoodCard>
            ))}
          </FoodCards>
        </Container>
      </FoodCardContainer>
    </div>
  );
}

export default SearchResult;

const FoodCardContainer = styled.section`
  min-height: calc(100vh - 21rem);
  background-image: url("/bg.jpg");
  background-size: cover;
`;
const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;
const FoodCards = styled.div`
  display: flex;
  flex-wrap: wrap;
  row-gap: 2.5rem;
  column-gap: 3rem;
  justify-content: center;
  align-items: center;
  padding-top: 80px;
`;

const FoodCard = styled.div`
  width: 34rem;
  height: 16.7rem;
  border: 0.66px solid;

  .food_image img {
    height: auto;
    width: 15rem;
  }

  border-image-source: radial-gradient(
      80.69% 208.78% at 108.28% 112.58%,
      #eabfff 0%,
      rgba(135, 38, 183, 0) 100%
    ),
    radial-gradient(
      80.38% 222.5% at -13.75% -12.36%,
      #98f9ff 0%,
      rgba(255, 255, 255, 0) 100%
    );

  background: url(.jpg),
    radial-gradient(
      90.16% 143.01% at 15.32% 21.04%,
      rgba(165, 239, 255, 0.2) 0%,
      rgba(110, 191, 244, 0.0447917) 77.08%,
      rgba(70, 144, 213, 0) 100%
    );
  background-blend-mode: overlay, normal;
  backdrop-filter: blur(50.1842px);

  border-radius: 2rem;

  display: flex;
  padding: 0.8rem;

  .food_info {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: end;
    h3 {
      margin-top: 0.8rem;
      font-size: 1.6rem;
      font-weight: 500;
    }
    p {
      margin-top: 4px;
      font-size: 1rem;
    }
    button {
      font-size: 1.2rem;
    }
  }
`;
