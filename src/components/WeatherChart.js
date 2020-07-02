import React, { useEffect, useState } from 'react';

import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';


///
/// WeatherChart component
///
const WeatherChart = (props) => {

  const [graphWidth, setGraphWidth] =  useState(window.innerWidth * 0.55)

  // Graph resize
  useEffect(() => {
    const handleResize = () => setGraphWidth(window.innerWidth * 0.55)
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  })

  //////////////////////////////////////

  return (
    <div className="WeatherChart">
       <LineChart
          width={graphWidth}
          height={300}
          data={props.weather}
          margin={{
            top: 5, right: 30, left: 20, bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="time" />
          <YAxis dataKey="temp" />
          <Tooltip />

          
          <Line isAnimationActive={false} type="monotone" dataKey="temp" stroke="#56ade3" />
          
        </LineChart>
    </div>
  )
}

export default WeatherChart