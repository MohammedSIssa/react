import { Chart as ChartJS, defaults } from "chart.js/auto";
import { Bar, Doughnut, Line } from "react-chartjs-2";

import barData from "./data/sourceData.json";
import revenueData from "./data/revenuseData.json";
import actualBarData from "./data/barData.json";

defaults.maintainAspectRatio = false;
defaults.responsive = true;

defaults.plugins.title.display = true;
defaults.plugins.title.align = "start";
defaults.plugins.title.font.size = 20;
defaults.plugins.title.color = "black";

const ChartApp = () => {
  return (
    <div className="flex flex-col min-h-dvh p-5 gap-5 bg-zinc-200">
      <div className="w-full bg-zinc-50 rounded-2xl h-[320px] p-5 border-1 border-zinc-300 shadow-xl">
        <Line
          data={{
            labels: revenueData.map((data) => data.label),
            datasets: [
              {
                label: "Revenue",
                data: revenueData.map((data) => data.revenue),
                backgroundColor: "rgba(100,200,100,0.95)",
                borderColor: "rgba(100,200,100,0.95)",
              },
              {
                label: "Cost",
                data: revenueData.map((data) => data.cost),
                backgroundColor: "rgba(250,50,50,0.85",
                borderColor: "rgba(250,50,50,0.85",
              },
            ],
          }}
          options={{
            elements: {
              line: {
                tension: 0.5
              }
            },
            plugins: {
              title: {
                text: "Yearly Revenue & Costs",
              },
            },
          }}
        />
      </div>
      <div className="flex gap-5 w-full h-full ">
        <div className="w-1/2 bg-zinc-50 rounded-2xl border-1 border-zinc-300 shadow-xl h-[320px] p-5">
          <Doughnut
            data={{
              labels: barData.map((data) => data.label),
              datasets: [
                {
                  label: "Count",
                  data: barData.map((data) => data.value),
                  backgroundColor: [
                    "rgba(43, 63, 229, 0.8)",
                    "rgba(250, 192, 19, 0.8",
                    "rgba(253, 135, 135, 0.8)",
                  ],
                  borderRadius: 5,
                },
              ],
            }}
            options={{
              plugins: {
                title: {
                  text: "Wins & Losses Ratio",
                },
              },
            }}
          />
        </div>
        <div className="w-1/2 bg-zinc-50 rounded-2xl border-1 border-zinc-300 shadow-xl h-[320px] p-5">
          <Bar
            data={{
              labels: actualBarData.map((data) => data.label),
              datasets: [
                {
                  label: "Revenue",
                  data: actualBarData.map((data) => data.revenue),
                  backgroundColor: "rgba(160, 54, 154, 0.54)",
                  borderColor: "rgba(160, 54, 154, 0.9)",
                  borderWidth: 2,
                },
                {
                  label: "Cost",
                  data: actualBarData.map((data) => data.cost),
                  backgroundColor: "rgba(54, 160, 154, 0.54)",
                  borderColor: "rgba(54,160, 154, 0.9)",
                  borderWidth: 2,
                },
              ],
            }}
            options={{
              plugins: {
                title: {
                  text: "First 4 Months",
                },
              },
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default ChartApp;
