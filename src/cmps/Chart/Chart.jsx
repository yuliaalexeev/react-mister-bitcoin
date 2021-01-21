
import React from 'react';
import './Chart.scss';
import { Sparklines, SparklinesLine } from 'react-sparklines';

export function Chart({ data }) {
    return (
        <div className="chart">
          <Sparklines data={ data }>
            <SparklinesLine color="#d7b8ff" />
          </Sparklines>
        </div>
    )
}



// import React, { Component } from 'react'

// import './Chart.css'

// class Chart extends Component {

//     render() {

//     }
// }

// export default Chart
