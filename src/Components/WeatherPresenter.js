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
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 100px;
    font-weight: bold;
`;

const City = styled.div`
    text-transform:uppercase;
    font-size: 50px;
    margin-bottom: 10px;
`;

const TempContainer = styled.div`
    width:100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 30px;
`;

const Temp = styled.div`
    font-size: 50px; 
    margin-bottom: 5px;
`;

const TempContent = styled.div`
    width: 50%;
    display: flex;
    justify-content: space-between;
    font-size: 20px;    
`;

const Status = styled.div`
    font-size: 60px;
    margin-bottom: 30px; 
`;

const Cloud = styled.div`
    margin-bottom: 10px;
`;

const Wind = styled.div``;

const Dress = styled.div`
    width: 100%;
    height: 100%;
    color: white;
    background-color: black;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 40px;
`;



const test = ({temp, tempMax, tempMin, weather, cloud, wind, name, loading, skin, dress}) => 
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
                    구름량:{cloud}%
                </Cloud>
                <Wind>
                    풍속:{wind}m/s
                </Wind>
            </Weather>
            <Dress>
                "{dress}"
            </Dress>
        </Container>
    )

export default test;