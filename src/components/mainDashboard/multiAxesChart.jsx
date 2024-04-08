import React, { useEffect, useState } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import { useAppDispatch, useAppSelector } from '../../features/app/hooks';
import { fetchdashboardMultiAxisData } from '../../features/dashboard/dashboardSlice';
import BasicDatePicker from './BasicDatePicker';

require('highcharts/modules/exporting')(Highcharts);
require('highcharts/modules/export-data')(Highcharts);
require('highcharts/modules/annotations')(Highcharts);
const MultiAxesChart = () => {
  const [selectedYear, setSelectedYear] = useState(2024); // Default selected year
  const dispatch = useAppDispatch();
  const [carbonProduced,setCarbon] = React.useState([])
    const [energyConsumed,setConsumed] = React.useState([])
    const [energyProduced,setProduced] = React.useState([])
  const { data, loading, error } = useAppSelector(state => state.dashboard.barData);
    

  React.useEffect(()=>{
    if(!loading){
        setConsumed( data['energy_consumed'].map(obj=>parseInt(obj)));
      setProduced(data['energy_produced'].map(obj=>parseInt(obj)))
       setCarbon(data['carbon_generated'].map(obj=>parseInt(obj)))

  }
},[data])

  // Function to generate random data for a given year
 

  const handleYearChange = (year) => {
    setSelectedYear(year); 
  };


useEffect(()=>{
    dispatch(fetchdashboardMultiAxisData({year:selectedYear}));
},[selectedYear,dispatch])




  const options = {
    chart: {
      zoomType: 'xy'
    },
    title: {
      text: `Energy and Carbon Analysis Data for ${selectedYear} in U.S`,
      
    },
    xAxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    },
    yAxis: [
      { // Primary Y-axis for Carbon Generated
        title: {
          text: 'Carbon Generated (gCO2/kWh)'
        },
        gridLineWidth: 0
      },
      { // Secondary Y-axis for Energy Produced and Consumed
        title: {
          text: 'Energy (kWh)',
         
        },
   
        opposite: true
      }
    ],
    tooltip: {
      shared: true,
      valueSuffix: '%',
      formatter: function () {
        let tooltip = '<b>' + this.x + '</b><br/>';
        this.points.forEach(point => {
          tooltip += '<span style="color:' + point.series.color + '">\u25CF</span> ' + point.series.name + ': <b>' + point.y + '</b><br/>';
        });
        return tooltip;
      },
      crosshairs: true,
      useHTML: true
    },
    legend: {
      layout: 'vertical',
      align: 'left',
      verticalAlign: 'top',
      x: 50,
      y: 0,
      floating: true,
      backgroundColor: Highcharts.defaultOptions.legend.backgroundColor || 'rgba(255,255,255,0.25)'
    },
    series: [
      
      {
        name: 'Energy Produced',
        type: 'column',
        data: energyProduced,
        yAxis: 1,
        tooltip: {
          headerFormat: '<span style="font-size: 10px">{point.key}</span><br/>',
          pointFormat: '<span style="color:{point.color}">\u25CF</span> {series.name}: <b>{point.y} kWh</b><br/>'
        }
      },
      {
        name: 'Energy Consumed',
        type: 'spline',
        data:energyConsumed,
        yAxis: 1,
        visible: true // Hide this series initially
      },
      {
        name: 'Carbon Generated',
        type: 'spline',
        data: carbonProduced,
        yAxis: 0,
        tooltip: {
          headerFormat: '<span style="font-size: 10px">{point.key}</span><br/>',
          pointFormat: '<span style="color:{point.color}">\u25CF</span> {series.name}: <b>{point.y} gCO2/kWh</b><br/>'
        }
      },
    ]
  };

  return (
    <div>
      <div style={{marginLeft:'20px',marginBottom:'20px'}}>
       <BasicDatePicker setDateHanlder={handleYearChange}/>
      </div>
      <HighchartsReact highcharts={Highcharts} options={options} />
      
    </div>
  );
};

export default React.memo(MultiAxesChart);
