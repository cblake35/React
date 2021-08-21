// import React, { useState, useEffect } from 'react';
// import { Chart, PieController, ArcElement, Legend, Tooltip, Title } from 'chart.js'


// const LineChart = (props) => {

//     useEffect(() => {
//         let chartContext = document.getElementById('myChart').getContext('2d');
//         let myChart = new Chart(chartContext, {
//             type: 'line',
//             data: {
//                 labels: dates,
//                 datasets: [{
//                     data: payout,
//                     backgroundColor: '#d9514e80',
//                     borderColor: '#d9514e',
//                     borderWidth: 2
//                 }]
//             },
//             options: {
//                 legend: {
//                     display: false
//                 },
//                 scales: {
//                     yAxis: [{
//                         ticks: {
//                             beginAtZero: true
//                         }
//                     }]
//                 }
//             }
//         });
//     }, [])
    
//     return (
//         <canvas id='myChart'></canvas>
//     )
// }

// export default LineChart;