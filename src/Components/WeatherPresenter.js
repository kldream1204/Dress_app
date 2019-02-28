import React from "react";
import Loader from "./Loader";
import styled from "styled-components";

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    margin: 0 auto;
`;

const Weather = styled.div`
    width:100%;
`;

const City = styled.div`
    text-transform:uppercase;
`;

const TempContainer = styled.div``;

const Temp = styled.div``;

const TempContent = styled.div``;

const Status = styled.div``;

const Cloud = styled.div``;

const Wind = styled.div``;

const Img = styled.div`
    width: 100%;
    height: 100%;
    background-image: url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5BD99qmF4MhJqU7d5rrbofLT5R4O6I6nG9eEUH2U_B4mp8Bke");
    background-position: center;
    background-size: cover;
`;



const test = ({temp, tempMax, tempMin, weather, cloud, wind, name, loading, skin}) => 
    loading ? <Loader></Loader> 
    : (
        <Container>
            <Weather>
                <City>
                    {name}
                </City>
                <TempContainer>
                    <Temp>
                        {temp}℃
                    </Temp>
                    <TempContent>
                        <span>최저:{tempMin}℃</span>
                        <span>체감기온:{skin}℃</span>
                        <span>최고:{tempMax}℃</span>
                    </TempContent>
                </TempContainer>
                <Status>
                    {weather}
                </Status>
                <Cloud>
                    {cloud}%
                </Cloud>
                <Wind>
                    {wind}m/s
                </Wind>
            </Weather>
            <Img></Img>
        </Container>
    )

export default test;