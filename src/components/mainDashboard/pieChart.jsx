import React, { useEffect, useMemo } from 'react';
import HighchartsReact from 'highcharts-react-official';
import Highcharts from 'highcharts';
import Skeleton from '@mui/material/Skeleton';

import { Box } from '@mui/material';
require('highcharts/modules/exporting')(Highcharts);
require('highcharts/modules/export-data')(Highcharts);
require('highcharts/modules/annotations')(Highcharts);
const PieChart = ({isLoading,title,data}) => {
   
    

    
    const chartOptions = useMemo(() => {
        
        const date = new Date();
const newData = data
console.log(" data ",newData)
        // Options for formatting the date
        const options = { month: 'long', day: 'numeric' };
        
        // Format the date as "April 8"
        const formattedDate = date.toLocaleDateString('en-US', options);
        return {
            chart: {
                type: 'pie',
                height: 300,
                backgroundColor: 'none'
            },
                
            title: {
                text: title,
                align:'left',
                style: {
                    fontWeight: '300',
                   
                }
            },
            tooltip: {
                valueSuffix: '%',
                color: 'black',
                borderColor: '#ccc',
                borderWidth: 1,
                borderRadius: 5,
                padding: 10,
                shadow: true
            },
            plotOptions: {
                series: {
                    allowPointSelect: true,
                    cursor: 'pointer',
                    dataLabels: [{
                        enabled: false,
                        distance: 20
                    }, {
                        enabled: true,
                        distance: -60,
                        format: '{point.percentage:.1f}%',
                        style: {
                            fontSize: '12px',
                            textOutline: 'none',
                            fontWeight: '300',
                        },
                        filter: {
                            operator: '>',
                            property: 'percentage',
                            value: 10
                        }
                    }],
                    style: {
                        colorByPoint: true
                    }
                }
            },
            series: [{
                name: title,
                colors: [
                    '#ff9933', // Saturated orange (base hue)
                    '#ffcc66', // Brighter orange (increased saturation)
                    '#99ccff', // Saturated blue (analogous color)
                    '#33cccc', // Saturated turquoise (complementary color, adjusted brightness)
                    '#ffcc99'  // Light orange (for the "Other" sector)
                ],
                data: [...newData] // Use data from Redux store, or empty array if data is not available
            }]
        };
    }, [data]);

    return (
        <div>
            {!isLoading ? <HighchartsReact highcharts={Highcharts} options={chartOptions} /> : <Box width={'90%'}><Skeleton variant="text" sx={{ width: '100%', height: '50px', mx: '10px' }} />

                {/* For other variants, adjust the size with `width` and `height` */}
                <Skeleton variant='text' sx={{ width: '100%', height: '300px', mx: '10px' }} />

            </Box>}
        </div>
    );
};

export default PieChart;
