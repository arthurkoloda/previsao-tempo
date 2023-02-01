import React, { useState, useEffect } from "react";
import $ from 'jquery';

const API_URL = "https://api.openweathermap.org/data/3.0/onecall?lat=-25.8830&lon=-50.8240&appid=46a52413127b1b21703c61b602e4092f";

const WheatherAPI = () => {
    const [data, setData] = useState([]);
    const date = new Date();

    useEffect(() => {

    $('#logoImg').css('animation', 'App-logo-spin infinite 0.3s linear');

    fetch(API_URL)
        .then(response => response.json())
        .then((json) => {
             setData(json);

            console.log(json);

            $('#logoImg').css('animation', '');
        })
    }, []);

    return (
        <div>
          <h1>Dados da API</h1>
          <h2>
              {data.timezone}
          </h2>
          <h6 style={{textAlign: 'right'}}>
            Atualizado em: {date.toLocaleString('pt-br')}
          </h6>
        </div>
      );
};

export default WheatherAPI;