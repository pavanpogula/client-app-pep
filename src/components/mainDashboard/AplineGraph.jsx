import React, { useState, useEffect } from 'react';
import HighchartsReact from 'highcharts-react-official';
import Highcharts from 'highcharts/highcharts';
import { generate_random_apline_data } from '../../utils/utils';

const MyChart = () => {
  const [options, setOptions] = useState({
    chart: {
      type: 'areaspline'
    },
    title: {
      text: 'Energy Consumption and Generation (Previous 12 Hours)',
      align: 'left'
    },
    legend: {
      layout: 'vertical',
      align: 'left',
      verticalAlign: 'top',
      x: 120,
      y: 70,
      floating: true,
      borderWidth: 1,
      backgroundColor:
        Highcharts.defaultOptions.legend.backgroundColor || '#FFFFFF'
    },
    xAxis: {
      title: {
        text: 'Hour'
      },
      categories: [], // Placeholder for dynamic categories
      labels: {
        formatter: function () {
          const hour = this.value % 24; // Get hour within 24-hour format
          const ampm = hour >= 12 ? 'PM' : 'AM';
          return (hour === 0 ? 12 : hour) + ampm; // Display 12 for midnight
        }
      }
    },
    yAxis: {
      title: {
        text: 'Energy (Kilowatt-hours - kWh)'
      }
    },
    tooltip: {
      shared: true,
      headerFormat: '<b>{point.series.name} at {point.x}:00 </b><br>' // Include AM/PM in tooltip
    },
    credits: {
      enabled: false
    },
    plotOptions: {
      areaspline: {
        fillOpacity: 0.5
      }
    },
    series: [
      {
        name: 'Consumed',
        data: []
      },
      {
        name: 'Generated',
        data: []
      }
    ]
  });

  const [currentTime, setCurrentTime] = useState(new Date()); // Capture initial time

  // Update X-axis categories dynamically based on current time
  useEffect(() => {
    const hours = currentTime.getHours();
    const categories = [];
    for (let i = hours - 11; i <= hours; i++) {
      const hour = i < 0 ? 24 + i : i;
      categories.push(hour);
    }
    setOptions((prevOptions) => ({
      ...prevOptions,
      xAxis: {
        ...prevOptions.xAxis,
        categories: categories
      }
    }));
  }, [currentTime]);

  useEffect(() => {
    const { energy_consumed, energy_produced } = generate_random_apline_data();
    setOptions((prevOptions) => ({
      ...prevOptions,
      series: [
        {
          ...prevOptions.series[0],
          data: energy_consumed
        },
        {
          ...prevOptions.series[1],
          data: energy_produced
        }
      ]
    }));
  }, []);

  return (
    <div>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
};

export default MyChart;
