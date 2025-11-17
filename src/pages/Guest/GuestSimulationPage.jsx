import React, { useState } from 'react';
import GuestLoanSimulator from './GuestLoanSimulator';
import GuestCreditRequestForm from './GuestCreditRequestForm';

const GuestSimulationPage = () => {
  const [simulationData, setSimulationData] = useState(null);
  const [showRequestForm, setShowRequestForm] = useState(false);

  const handleSimulate = (data) => {
    setSimulationData(data);
    setShowRequestForm(true);
  };

  const handleRequestSubmit = (requestData) => {
    // Here you could send requestData to an API or store it
    setShowRequestForm(false);
    setSimulationData(null);
    alert('Demande envoyée avec succès !');
  };

  return (
    <div style={{ maxWidth: 500, margin: '0 auto', padding: 20 }}>
      {!showRequestForm ? (
        <GuestLoanSimulator onSimulate={handleSimulate} />
      ) : (
        <GuestCreditRequestForm simulationData={simulationData} onSubmit={handleRequestSubmit} />
      )}
    </div>
  );
};

export default GuestSimulationPage;
