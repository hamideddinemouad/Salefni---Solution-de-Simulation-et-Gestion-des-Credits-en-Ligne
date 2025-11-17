import React, { useState } from 'react';

const GuestCreditRequestForm = ({ simulationData, onSubmit }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [file, setFile] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !file) return;
    // Simulate sending data
    const requestData = { name, email, file, simulationData };
    setSubmitted(true);
    if (onSubmit) onSubmit(requestData);
  };

  return (
    <div>
      <h2>Demande de Crédit (Invité)</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nom complet: </label>
          <input type="text" value={name} onChange={e => setName(e.target.value)} required />
        </div>
        <div>
          <label>Email: </label>
          <input type="email" value={email} onChange={e => setEmail(e.target.value)} required />
        </div>
        <div>
          <label>Pièce justificative (PDF/Image): </label>
          <input type="file" accept=".pdf,image/*" onChange={e => setFile(e.target.files[0])} required />
        </div>
        <button type="submit">Soumettre la demande</button>
      </form>
      {submitted && <div>Votre demande a été soumise !</div>}
    </div>
  );
};

export default GuestCreditRequestForm;
