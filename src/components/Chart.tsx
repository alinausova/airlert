import React from 'react';
import {VictoryBar, VictoryChart, VictoryLine} from "victory"
import filtered_data_300sec from "../data/filtered_data_300sec.json"

export function Chart() {

  const data300secVoc = () => filtered_data_300sec.map((el) => {
    return { x: new Date(el.timestamp), y: Number(el.voc) }
  })

  const data300secPm25 = () => filtered_data_300sec.map((el) => {
    return { x: new Date(el.timestamp), y: Number(el["pm2.5"]) }
  })

  const data300secPm10 = () => filtered_data_300sec.map((el) => {
    return { x: new Date(el.timestamp), y: Number(el.pm10) }
  })

  const data300secNox = () => filtered_data_300sec.map((el) => {
    return { x: new Date(el.timestamp), y: Number(el.co2) }
  })

  return (
    <div className="flex w-full space-around p-2 items-center mt-10">
      <div className="p-4">
        <VictoryChart
          scale={{x: 'time'}}
          height={400}

          padding={{top: 0, bottom: 40, left: 0, right: 0}}
        >
          <VictoryBar
            style={{ data: { fill: "#31c4ae" } }}
            data={data300secVoc()}
          />
        </VictoryChart>
      </div>

      <div className="p-4">
        <VictoryChart
          scale={{x: 'time'}}
          height={400}

          padding={{top: 0, bottom: 40, left: 0, right: 0}}
        >
          <VictoryBar
            style={{ data: { fill: "#83e576" } }}
            data={data300secPm25()}
          />
        </VictoryChart>
      </div>

      <div className="p-4">
        <VictoryChart
          scale={{x: 'time'}}
          height={400}
          padding={{top: 0, bottom: 40, left: 0, right: 0}}
        >
          <VictoryBar
            style={{ data: { fill: "#dedb43" } }}
            data={data300secPm10()}
          />
        </VictoryChart>
      </div>

      <div className="p-4">
        <VictoryChart
          scale={{x: 'time'}}
          height={400}
          padding={{top: 0, bottom: 40, left: 0, right: 0}}
        >
          <VictoryBar
            style={{ data: { fill: "#e7c857" } }}
            data={data300secNox()}
          />
        </VictoryChart>
      </div>
    </div>
  );
}