import React, {useState, useEffect } from "react";
import Chart from "react-apexcharts";

const Charts = () => {
    const [socialName, setsocialName]= useState([]);
  const [socialValue, setSocialValue]= useState([]);

  useEffect( ()=>{

    const productName=[];
    const productPrice=[];

    const getSocialrecord= async()=>{
      const dataReq= await fetch("http://localhost:5000/allProducts");
      const dataRes= await dataReq.json();
      console.log(dataRes);

      for(let i=0; i<dataRes.length; i++)
      {
        productName.push(dataRes[i].name);
        productPrice.push(dataRes[i].price);

      }
      setsocialName(productName);
      setSocialValue(productPrice);
 }
  getSocialrecord();

  },[]);
  
    return (
        <React.Fragment>
      <div className="container-fluid mb-5 mt-10">
      
        <Chart
          type="bar"
          
          series={[
            {
              name: "Price",
              data: socialValue,
            },
          ]}
          options={{
            title: {
              text: "BarChar Of Products And Price",
              style: { fontSize: 30 },
            },


            colors: ["#f90000"],
            theme: { mode: "light" },

            xaxis: {
              tickPlacement: "on",
              categories: socialName,
              title: {
                text: "Total Products And Price",
                style: { color: "#f90000", fontSize: 30 },
              },
            },

            yaxis: {
                labels: {
                  formatter: (val) => {
                  return `${val}`;
                  },
                style: { fontSize: "15", colors: ["#f90000"] },
              },
                 title: {
                 text: "User In (K)",
                 style: { color: "#f90000", fontSize: 15 },
              },
            },

            legend: {
              show: true,
              position: "right",
            },

            dataLabels: {
              formatter: (val) => {
                return `${val}`;
              },
              style: {
                colors: ["#f4f4f4"],
                fontSize: 15,
              },
            },
          }}
        ></Chart>
      </div>
    </React.Fragment>
    );
};

export default Charts;