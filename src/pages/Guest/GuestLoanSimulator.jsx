import React, { useState } from 'react';

const GuestLoanSimulator = ({ onSimulate }) => {
  const [amount, setAmount] = useState('');
  const [duration, setDuration] = useState('');
  const [rate, setRate] = useState('');
  const [result, setResult] = useState(null);

  const handleSimulate = (e) => {
    e.preventDefault();
    // Simple monthly payment calculation
    const principal = parseFloat(amount);
    const months = parseInt(duration, 10);
    const interest = parseFloat(rate) / 100 / 12;
    if (!principal || !months || !interest) return;
    const monthly = (principal * interest) / (1 - Math.pow(1 + interest, -months));
    setResult(monthly.toFixed(2));
    if (onSimulate) onSimulate({ amount: principal, duration: months, rate: parseFloat(rate), monthly });
  };

  return (
    <div>
      <h2>Simulation de Crédit (Invité)</h2>
      <form onSubmit={handleSimulate}>
        <div>
          <label>Montant du crédit (€): </label>
          <input type="number" value={amount} onChange={e => setAmount(e.target.value)} required />
        </div>
        <div>
          <label>Durée (mois): </label>
          <input type="number" value={duration} onChange={e => setDuration(e.target.value)} required />
        </div>
        <div>
          <label>Taux d'intérêt annuel (%): </label>
          <input type="number" value={rate} onChange={e => setRate(e.target.value)} required />
        </div>
        <button type="submit">Simuler</button>
      </form>
      {result && (
        <div>
          <h3>Mensualité estimée: {result} €</h3>
        </div>
      )}
    </div>
  );
};

export default GuestLoanSimulator;
