import React from 'react'
import Stoke from './components/Stoke'
import Navbar from './components/Navbar'

function App() {

  // const stokesfulldata = [
  //   {
  //     stoke: "aapl",
  //     color: "#000",
  //     companyname: "Apple",
  //     icon: "fa-brands fa-apple",
  //     id:1
  //   },
  //   {
  //     stoke: "meta",
  //     color: "#006feb",
  //     companyname: "Meta",
  //     icon: "fa-brands fa-meta",
  //     id:2
  //   }
  //   ,
  //   {
  //     stoke: "msft",
  //     color: "#00a8e8",
  //     companyname: "Microsoft",
  //     icon: "fa-brands fa-windows",
  //     id:3
  //   }
  //   ,
  //   {
  //     stoke: "tsla",
  //     color: "#",
  //     companyname: "Tesla",
  //     icon: "fa-solid fa-t",
  //     id:4

  //   }e12026
  //   ,
  //   {
  //     stoke: "amzn",
  //     color: "#221e1f",
  //     companyname: "Amazon",
  //     icon: "fa-brands fa-amazon",
  //     id:5

  //   }
    
  // ]

  return (
    <>
      <Navbar />

      <Stoke  stoke={"meta"} color={"#006feb"} icon={"fa-brands fa-meta"} companyname={"Meta"} />

      <Stoke  stoke={"amzn"} color={"#221e1f"} icon={"fa-brands fa-amazon"} companyname={"Amazon"} />

      <Stoke  stoke={"aapl"} color={"#000"} icon={"fa-brands fa-apple"} companyname={"Apple"} />

      <Stoke  stoke={"tsla"} color={"#e12026"} icon={"fa-solid fa-t"} companyname={"Tesla"} />

      <Stoke  stoke={"msft"} color={"#00a8e8"} icon={"fa-brands fa-windows"} companyname={"Microsoft"} />






      {/* {
        stokesfulldata.map((e) => {
          return (
            <div>
              <Stoke
                key={e.id}
                stoke={e.stoke}
                color={e.color}
                companyname={e.companyname}
                icon={e.icon}
              />
            </div>

          )
        })
      } */}


    </>
  )
}

export default App
