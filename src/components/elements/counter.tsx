"use client";

import React, { useState, useEffect } from "react";

type CounterProps = {
  title: string;
  count: number;
  interval?: number;
};

const Counter = ({ title, count, interval }: CounterProps) => {
  const [countNumber, setCountNumber] = useState(0);

  useEffect(() => {
    const _interval = setInterval(() => {
      if (countNumber < count) {
        setCountNumber((prev) => prev + 1);
      }
    }, interval ?? 30);
    return () => clearInterval(_interval);
  }, [count, countNumber, interval]);

  return (
    <div className="bg-white rounded-md py-5 px-2">
      <h3 className="text-4xl font-bold text-center text-yellow-600">
        {countNumber}+
      </h3>
      <p className="text-center md:text-left text-yellow-500">{title}</p>
    </div>
  );
};

export default Counter;
