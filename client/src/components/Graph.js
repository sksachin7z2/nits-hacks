import React,{useEffect} from 'react'
import {Chart} from 'chart.js'
function Graph() {
   
    
   

      async function setup() {
        const ctx = document.getElementById('myChart').getContext('2d');
        
        const myChart = new Chart(ctx, {
          type: 'line',
          data: {
            labels: [0,1,2,3,4,5],
            datasets: [
              {
                label: 'Global Temperature in °C',
                data: [3,5,6,7,4,3],
                fill: false,
                borderColor: 'rgba(255, 99, 132, 1)',
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
                borderWidth: 1
              },
            //   {
            //     label: 'Northern Hemisphere Temperature in °C',
            //     data: dataTemps.northern,
            //     fill: false,
            //     borderColor: 'rgba(99, 132, 255, 1)',
            //     backgroundColor: 'rgba(99, 132, 255, 0.5)',
            //     borderWidth: 1
            //   },
            //   {
            //     label: 'Souther Hemisphere in °C',
            //     data: dataTemps.southern,
            //     fill: false,
            //     borderColor: 'rgba(99, 255, 132, 1)',
            //     backgroundColor: 'rgba(99, 255, 132, 0.5)',
            //     borderWidth: 1
            //   }
            ]
          },
          options: {}
        });
      }

    //   async function getData() {
    //     // const response = await fetch('testdata.csv');
    //     const response = await fetch('ZonAnn.Ts+dSST.csv');
    //     const data = await response.text();
    //     const years = [];
    //     const temps = [];
    //     const northern = [];
    //     const southern = [];
    //     const rows = data.split('\n').slice(1);
    //     rows.forEach(row => {
    //       const cols = row.split(',');
    //       years.push(cols[0]);
    //       temps.push(14 + parseFloat(cols[1]));
    //       northern.push(14 + parseFloat(cols[2]));
    //       southern.push(14 + parseFloat(cols[3]));
    //     });
    //     return { years, temps, northern, southern };
    //   }
    useEffect(() => {
        setup();
      }, [])
  return (
    <div>
        <canvas id="myChart" width="400" height="200"></canvas>
    </div>
  )
}

export default Graph