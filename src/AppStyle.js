import styled from "styled-components";
import dark from "./assets/dark2.jpg";
import light from "./assets/background.jpeg";

export const Container = styled.div`
  transition: 0.4 ease-out;
  background-image: url(${({ gradus }) => (gradus ? dark : light)});
  background-position: cover;
  background-size: cover;
  height: 100%;
  width: 100%;
  margin: auto;
  
  @media (maxwidth: 950px) {
      height: 100vh;
  }
`;

export const AllSections = styled.div`
  display: flex;
  background-image: linear-gradient(
    to bottom,
    rgba(255, 255, 255, 0),
    rgba(255, 255, 255, 0.3)
  );
  @media (max-width: 950px) {
    flex-direction: column;
    height: 100vh;
  }
`;

export const RightSection = styled.div`
  padding-left: 130px;
  color: white;
  flex: 8;
  height: 100vh;
  @media (max-width: 1600px) {
    height: 100vh;
  }
  @media (max-width: 1250px) {
    padding-left: 100px;
    height: 100vh;
  }
  @media (max-width: 950px) {
    flex: 0;
    padding: 0;
    margin: 0 auto;
    /* height: 100%; */
  }
`;

export const Data = styled.div`
  display: flex;
  align-items: center;
  margin-top: 400px;
  @media (max-width: 950px) {
    margin-top: 0;
    flex-direction: column;
  }
`;

export const Gradus = styled.div`
  font-size: 270px;
  @media (max-width: 1600px) {
    font-size: 200px;
  }
  @media (max-width: 1250px) {
    font-size: 160px;
  }
  @media (max-width: 950px) {
    margin-top: 5px;
    font-size: 80px;
  }
`;

export const Location = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
`;

export const Display = styled.div`
   display: flex;
  @media (max-width: 950px) {
    display: flex;
    align-items: center;
    justify-content: space-around;
  }
`;

export const Region = styled.div`
  font-size: 80px;
  @media (max-width: 1600px) {
    font-size: 60px;
  }
  @media (max-width: 1250px) {
    font-size: 45px;
  }
  @media (max-width: 950px) {
    font-size: 28px;
  }
`;

export const Dates = styled.div`
  font-size: 25px;
  @media (max-width: 1600px) {
    font-size: 20px;
  }
  @media (max-width: 1250px) {
    font-size: 16px;
  }
  @media (max-width: 950px) {
    font-size: 14px;
  }
`;

export const Desc = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 50px;
  @media (max-width: 1250px) {
    margin-left: 15px;
  }
`;

export const DescIcon = styled.img`
  width: 100px;
  height: 100px;
  @media (max-width: 1250px) {
    width: 70px;
    height: 70px;
  }
  @media (max-width: 950px) {
    width: 50px;
    height: 50px;
  }
`;

export const DescInfo = styled.p`
  font-size: 25px;
  @media (max-width: 1250px) {
    font-size: 13px;
  }
  @media (max-width: 950px) {
    font-size: 15px;
  }
`;

export const LeftSection = styled.div`
  flex: 4;
  /* background-image: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.3),
    rgba(0, 0, 0, 0.3)
  ); */
  @media (max-width: 950px) {
    flex: 0;
    background-image: none;
    padding: 5px 30px;
  }
`;

export const LeftData = styled.div`
  padding: 0 0 0 40px;
  @media (max-width: 1250px) {
    padding-left: 20px;
  }
  @media (max-width: 950px) {
    padding: 0;
  }
`;

export const Search = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const SearchBox = styled.div`
  width: 90px;
  height: 90px;
  background-color: #a9cee1;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  @media (max-width: 1600px) {
    width: 70px;
    height: 70px;
  }
  @media (max-width: 1250px) {
    width: 50px;
    height: 50px;
    margin-top: 50px;
  }
  @media (max-width: 950px) {
    width: 40px;
    height: 40px;
    margin: 0;
  }
`;

export const SearchImg = styled.img`
  width: 24px;
  height: 24px;
  @media (max-width: 1250px) {
    width: 18px;
    height: 18px;
  }
`;

export const SearchInput = styled.input`
  outline: none;
  color: #fff;
  font-size: 25px;
  border: 0 transparent;
  background-color: transparent;
  border-bottom: 1px solid #a5b7ca;
  margin-top: 70px;
  width: 60%;
  ::placeholder {
    color: #dfedec;
    font-size: 22px;
  }
  @media (max-width: 1600px) {
    font-size: 20px;
    width: 60%;
    ::placeholder {
      font-size: 17px;
    }
  }
  @media (max-width: 1250px) {
    width: 70%;
    margin-top: 80px;
  }
  @media (max-width: 950px) {
    width: 80%;
    height: 60px;
    margin-top: 0;
    font-size: 15px;
    height: 20px;
    ::placeholder {
      font-size: 15px;
    }
  }
`;

export const LocalRegions = styled.div``;
export const RegionNames = styled.p`
  color: #dfedec;
  font-size: 25px;
  cursor: pointer;
  margin-top: ${({ first }) => (first ? "40px" : "10px")};
  @media (max-width: 1600px) {
    font-size: 20px;
  }
  @media (max-width: 950px) {
    font-size: 15px;
    margin-top: ${({ first }) => (first ? "10px" : "10px")};
  }
`;

export const HR = styled.div`
  border-bottom: 1px solid #dfedec;
  width: 92%;
  margin-top: ${({ margin }) => (margin ? "15px" : "40px")};
  @media (max-width: 1250px) {
      width: 85%;
  margin-top: ${({ margin }) => (margin ? "50px" : "10px")};
      
  }
  @media (max-width: 950px) {
    width: 100%;
  margin-top: ${({ margin }) => (margin ? "15px" : "10px")};
  }
`;

export const Details = styled.div``;

export const WeatherText = styled.p`
  font-size: 35px;
  color: white;
  margin-top: 40px;
  @media (max-width: 1600px) {
    font-size: 25px;
  }
  @media (max-width: 950px) {
    font-size: 20px;
    margin-top: 15px;
  }
`;

export const Cloudy = styled.div`
  display: flex;
  justify-content: space-between;
  padding-right: 40px;
  align-items: center;
  margin-top: ${({ firstdetail }) => firstdetail && "50px"};
  @media (max-width: 1250px) {
  margin-top: ${({ firstdetail }) => firstdetail && "30px"};
  }
  @media (max-width: 950px) {
  margin: 0;
  padding: 0;
  }
`;

Cloudy.Text = styled.p`
  color: #dfedec;
  font-size: 25px;
  @media (max-width: 1600px) {
    font-size: 20px;
  }
  @media (max-width: 1250px) {
    font-size: 17px;
  }
  @media (max-width: 950px) {
    font-size: 16px;
    margin: 0;
  }
`;

Cloudy.Data = styled.p`
  color: #fff;
  font-size: 25px;
  @media (max-width: 1600px) {
    font-size: 20px;
  }
  @media (max-width: 1250px) {
    font-size: 17px;
  }
  @media (max-width: 950px) {
    font-size: 16px;
    margin-top: 2px;
  }
`;
