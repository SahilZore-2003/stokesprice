import React, { useEffect, useState } from 'react'
import Chart from "react-apexcharts";
import Loader from "./Loader";



const Stoke = ({ stoke, color, companyname, icon }) => {
  const [graphData, setGraphData] = useState({
    options: {
      chart: {
        id: "basic-bar"
      },
      xaxis: {
        categories: ["9:30", "10:30", "11:30", "12:30", "1:30", "2:30", "3:30"]
      }
    },
    series: [
      {
        name: "series-1",
        data:[700,800,500,300,400,500]
      }
    ]
  })


  const [loader, setLoader] = useState(false);


  useEffect(() => {
    const getStokeData = () => {
      fetch(`https://cloud.iexapis.com/stable/stock/${stoke}/intraday-prices?chartLast=30&chartInterval=60&token=pk_b49ab41b0e6c44b9b72ba89e940d5cbf`)
        .then((res) => res.json())
        .then((resdata) => {
          // const stokeprices = data.map(e => e.average);
          // console.log(stokeprices)
          setGraphData(graphData.series[0].data = resdata.map(e => e.average))
          
          setLoader(false)
        })
    }
    getStokeData()


  }, [])
  return (
    <>

      {
        loader ? <Loader /> : <div className='stoke-container'>
          <div className='logo' style={{ color: color }}>
            <h1>{companyname}</h1>
            <i className={icon}></i>
          </div>

          <div className='chart-container'>
            <Chart
              options={graphData.options}
              series={graphData.series}
              type="line"
              width="100%"
            />
          </div>

        </div>
      }




    </>

  )
}

export default Stoke
