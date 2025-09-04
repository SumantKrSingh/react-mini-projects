import styled from "styled-components";
import "./App.css";
import { useEffect, useState } from "react";
import SearchResult from "./components/SearchComponents/SearchResult.jsx";
import Footer from "./components/SearchComponents/Footer/Footer.jsx";

// export const BASE_URL = "http://localhost:9000";

export const BASE_URL = "https://react-mini-projects-6fj2.onrender.com";

export default function App() {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [filterData, setFilterData] = useState(null);
  const [filterBtn, setFilterBtn] = useState("all");

  useEffect(() => {
    const fetchFoodData = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(BASE_URL);
        if (response.ok) {
          const json = await response.json();
          setIsLoading(false);
          setFilterData(json);
          setData(json);
        }
      } catch (error) {
        setError(`Unable fetch data due to: ${error}`);
      }
    };
    fetchFoodData();
  }, []);

  if (error) {
    return <div>{error}</div>;
  }

  function searchFood(e) {
    const searchValue = e.target.value;
    console.log(searchValue);

    if (searchValue === "") {
      setFilterData(null);
    }
    const filtered = data?.filter((food) =>
      food.name.toLowerCase().includes(searchValue.toLowerCase())
    );
    setFilterData(filtered);
  }

  function filterFood(type) {
    if (type === "all") {
      setFilterData(data);
      setFilterBtn("all");
      return;
    }

    const filtered = data?.filter((food) =>
      food.type.toLowerCase().includes(type.toLowerCase())
    );
    setFilterData(filtered);
    setFilterBtn(type);
  }

  return (
    <>
      <Container>
        <TopContainer>
          <div className="logo">
            <img src="./logo.png" alt="logo" />
          </div>

          <div className="search">
            <input
              onChange={searchFood}
              type="text"
              placeholder="Search Food ...."
            />
          </div>
        </TopContainer>
        <FilterContainer>
          <Button onClick={() => filterFood("all")}>All</Button>
          <Button onClick={() => filterFood("tea")}>Tea</Button>
          <Button onClick={() => filterFood("breakfast")}>Breakfast</Button>
          <Button onClick={() => filterFood("lunch")}>Lunch</Button>
          <Button onClick={() => filterFood("dinner")}>Dinner</Button>
          {/* <Button onClick={() => filterFood("dessert")}>Dessert</Button> */}
        </FilterContainer>
      </Container>
      <SearchResult data={filterData} />
      <Footer />
    </>
  );
}
const Container = styled.div`
  background-image: url("/bg1.jpg");
  background-position: bottom;
  background-size: cover;
  background-repeat: no-repeat;
  height: auto;
  mix-blend-mode: lighten;
`;
const TopContainer = styled.section`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  height: 14rem;
  justify-content: space-between;
  align-items: center;
  padding: 1.6rem;

  .search {
    input {
      background-color: transparent;
      color: var(--white);
      border: 2px solid var(--red);
      border-radius: 0.8rem;
      height: 4rem;
      padding: 0 2rem;
      font-size: 1.8rem;
    }
    ::placeholder {
      color: var(--white);
    }
  }

  .logo img {
    height: auto;
    width: 10rem;
  }

  @media screen and (0 < width < 600px) {
    flex-direction: column;
    height: 12rem;
    overflow: hidden;
    .logo img {
      width: 5rem;
    }
  }
`;

const FilterContainer = styled.section`
  display: flex;
  justify-content: center;
  gap: 1.2rem;
  padding-bottom: 4rem;
`;

export const Button = styled.button`
  background-color: var(--red);
  border-radius: 0.5rem;
  padding: 0.5rem 1rem;
  border: 1px solid transparent;
  color: var(--white);
  font-size: 1.8rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease-in;
  &:hover {
    color: var(--black);
    background-color: var(--white);
    border: 1px solid var(--black);
    transition: all 0.3s ease-in;
  }

  @media screen and (0 < width < 600px) {
  }
`;
