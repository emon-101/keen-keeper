"use client";
import { friendContext } from "@/app/contextApi/friendContext";
import React, { useContext } from "react";
import { Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";

const StatsChart = ({isAnimationActive = true}) => {
  const { interaction } = useContext(friendContext);

  const callCount = interaction.filter((item) => item.type === "Call").length;
  const smsCount = interaction.filter((item) => item.type === "SMS").length;
  const videoCallCount = interaction.filter(
    (item) => item.type === "Video Call",
  ).length;

  const data = [
    { name: "Calls", value: callCount, fill: "#244D3F" },
    { name: "SMS", value: smsCount, fill: "#7E35E1" },
    { name: "Video Calls", value: videoCallCount, fill: "#37A163" },
  ];
  return (
    <div className="w-full max-w-100 md:h-112 h-80">
      <ResponsiveContainer width="100%" height="100%" aspect={1}>
        <PieChart>
          <Pie
            data={data}
            innerRadius="80%"
            outerRadius="100%"
            cornerRadius="50%"
            fill="#8884d8"
            paddingAngle={5}
            dataKey="value"
            isAnimationActive={isAnimationActive}
          />
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default StatsChart;
