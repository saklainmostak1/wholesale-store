import React, {useState, useEffect } from "react";
import Chart from "react-apexcharts";

const ProductsChart = () => {
    const [name, setName]= useState([]);
  const [value, setValue]= useState([]);

  useEffect( ()=>{

    const productName=[];
    const productPrice=[];

    const getSocialrecord= async()=>{
      const dataReq= await fetch("https://fashion-fiesta-store.vercel.app/allProducts");
      const dataRes= await dataReq.json();
      console.log(dataRes);

      for(let i=0; i<dataRes.length; i++)
      {
        productName.push(dataRes[i].name);
        productPrice.push(dataRes[i].price);

      }
      setName(productName);
      setValue(productPrice);
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
              data: value,
            },
          ]}
          options={{
            title: {
             
              style: { fontSize: 30 },
            },


            colors: ["#f90000"],
            theme: { mode: "light" },

            xaxis: {
              tickPlacement: "on",
              categories: name,
              title: {
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
                 text: "Product And Price",
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

export default ProductsChart;