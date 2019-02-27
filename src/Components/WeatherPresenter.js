import React from "react";
import Loader from "./Loader";
import styled from "styled-components";

const Container = styled.div`
    width: 100vh;
    height: 100vh;
    display: flex;
    margin: 0 auto;
`;

const Weather = styled.div`
    width:50%;
`;

const City = styled.div``;

const TempContainer = styled.div``;

const Temp = styled.div``;

const TempMaxMin = styled.div``;

const Status = styled.div``;

const Cloud = styled.div``;

const Wind = styled.div``;

const Img = styled.div`
    width: 50%;
    height: 50%;
    background-image: url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5BD99qmF4MhJqU7d5rrbofLT5R4O6I6nG9eEUH2U_B4mp8Bke");
    background-position: center;
    background-size: cover;
`;

const test = ({temp, tempMax, tempMin, weather, cloud, wind, name, loading}) => 
    loading ? <Loader></Loader> 
    : (
        <Container>
            <Weather>
                <City>
                    {name}
                </City>
                <TempContainer>
                    <Temp>
                        {temp}
                    </Temp>
                    <TempMaxMin>
                        <span>{tempMax}</span>
                        <span>{tempMin}</span>
                    </TempMaxMin>
                </TempContainer>
                <Status>
                    {weather}
                </Status>
                <Cloud>
                    {cloud}
                </Cloud>
                <Wind>
                    {wind}
                </Wind>
            </Weather>
            <Img></Img>
        </Container>
    )

export default test;