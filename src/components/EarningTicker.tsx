"use client";

import React, { useState, useEffect } from 'react';

const names = ['James', 'Sarah', 'Mike', 'Emily', 'David', 'Jessica', 'Chris', 'Laura', 'Kevin', 'Anna'];

const EarningTicker = () => {
  const [name, setName] = useState('James');
  const [amount, setAmount] = useState('19.50');

  useEffect(() => {
    const interval = setInterval(() => {
      setName(prevName => {
        let newName = prevName;
        while (newName === prevName) {
          newName = names[Math.floor(Math.random() * names.length)];
        }
        return newName;
      });
      const randomAmount = (Math.random() * 30 + 5).toFixed(2);
      setAmount(randomAmount);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="mt-4 flex items-center bg-white rounded-full p-2 shadow-md border border-gray-200">
      <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 text-white rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0">$</div>
      <div className="ml-3 text-left">
        <p className="text-sm font-semibold text-gray-800">{name} just earned <span className="text-purple-600 font-bold">${amount}</span></p>
      </div>
    </div>
  );
};

export default EarningTicker;
