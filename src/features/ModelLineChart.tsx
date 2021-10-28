import {ResponsiveLine} from "@nivo/line"
import React from "react"
import data from "./data.json"
import enzyme from "./enzyme.json"

export const FormLineChart: React.FC = () => <ResponsiveLine
  data={data}
  margin={{top: 50, right: 110, bottom: 50, left: 60}}
  xScale={{type: "point"}}
  yScale={{type: "linear", min: "auto", max: "auto", stacked: false, reverse: false, nice: true}}
  lineWidth={3}
  curve={"monotoneX"}
  enableSlices={"x"}
  axisLeft={{
    tickSize: 5,
    tickPadding: 5,
    tickRotation: 0,
    legend: "C0",
    legendOffset: -40,
    legendPosition: "end"
  }}
  axisBottom={{
    tickSize: 5,
    tickPadding: 5,
    tickRotation: 0,
    legend: "time",
    legendOffset: 36,
    legendPosition: "middle"
  }}
  pointSize={7}
  pointColor={{theme: "background"}}
  pointBorderWidth={2}
  pointLabelYOffset={-12}
  pointBorderColor={{from: "serieColor"}}
  legends={[
    {
      anchor: "bottom-right",
      direction: "column",
      translateX: 100,
      translateY: 0,
      itemsSpacing: 0,
      itemDirection: "left-to-right",
      itemWidth: 80,
      itemHeight: 20,
      itemOpacity: 0.75,
      symbolSize: 12,
      symbolShape: "circle",
      symbolBorderColor: "rgba(0, 0, 0, .5)",
      effects: [
        {
          on: "hover",
          style: {
            itemBackground: "rgba(0, 0, 0, .03)",
            symbolSize: 14,
            itemOpacity: 1
          }
        }
      ]
    }
  ]}
/>

export const EnzymeLineChart: React.FC = () => <ResponsiveLine
  data={enzyme}
  margin={{top: 50, right: 110, bottom: 50, left: 60}}
  xScale={{type: "point"}}
  yScale={{type: "linear", min: "auto", max: "auto", stacked: false, reverse: false, nice: true}}
  lineWidth={3}
  useMesh={true}
  colors={["#8dd3c7", "#fb8375", "#9a74be", "#addd8e"]}
  curve={"monotoneX"}
  axisLeft={{
    tickSize: 5,
    tickPadding: 5,
    tickRotation: 0,
    legend: "Cellulose Count",
    legendOffset: -50,
    legendPosition: "end"
  }}
  axisBottom={{
    tickSize: 5,
    tickPadding: 5,
    tickRotation: 0,
    legend: "time",
    legendOffset: 36,
    legendPosition: "middle"
  }}
  pointSize={9}
  pointColor={{theme: "background"}}
  pointBorderWidth={2}
  pointLabelYOffset={-12}
  pointBorderColor={{from: "serieColor"}}
  legends={[
    {
      anchor: "bottom-right",
      direction: "column",
      translateX: 100,
      translateY: 0,
      itemsSpacing: 0,
      itemDirection: "left-to-right",
      itemWidth: 80,
      itemHeight: 20,
      itemOpacity: 0.75,
      symbolSize: 12,
      symbolShape: "circle",
      symbolBorderColor: "rgba(0, 0, 0, .5)",
      effects: [
        {
          on: "hover",
          style: {
            itemBackground: "rgba(0, 0, 0, .03)",
            symbolSize: 14,
            itemOpacity: 1
          }
        }
      ]
    }
  ]}
/>

