import { useEffect, useState } from "react";
import axiosClient from "../axios-client";
import { useStateContext } from "../context/ContextProvider";

export default function HistoryTableForm({ initialData = null, onSaved, onClose }) {
  const [entry, setEntry] = useState({
    id: null,
    serviceDate: '',
    poNumber: '',
    poDate: '',
    supplier: '',
    drNumber: '',
    drDate: '',
    maintenanceDetails: '',
    parts: [{
      name: '',
      quantity: 1,
      unit: '',
      unitPrice: 0,
      remarks: ''
    }]
  });
  const [errors, setErrors] = useState(null);
  const { setNotification } = useStateContext();

  useEffect(() => {
    if (initialData) {
      setEntry(initialData);
    }
  }, [initialData]);

  const updatePart = (index, field, value) => {
    const updatedParts = [...entry.parts];
    updatedParts[index][field] = value;
    setEntry({ ...entry, parts: updatedParts });
  };

  const addPart = () => {
    setEntry({
      ...entry,
      parts: [...entry.parts, { name: '', quantity: 1, unit: '', unitPrice: 0, remarks: '' }]
    });
  };

  const removePart = (index) => {
    const updatedParts = entry.parts.filter((_, i) => i !== index);
    setEntry({ ...entry, parts: updatedParts });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const payload = {
      ...entry,
      totalAmount: entry.parts.reduce((sum, part) => sum + (part.quantity * part.unitPrice), 0)
    };

    const request = entry.id
      ? axiosClient.put(`/equipment-history/${entry.id}`, payload)
      : axiosClient.post('/equipment-history', payload);

    request.then(() => {
      setNotification(`History was successfully ${entry.id ? 'updated' : 'created'}`);
      if (typeof onSaved === 'function') onSaved();
      if (typeof onClose === 'function') onClose();
    }).catch(err => {
      const response = err.response;
      if (response && response.status === 422) {
        setErrors(response.data.errors);
      }
    });
  };

  return (
    <div className="card animated fadeInDown">
      <h2>{entry.id ? "Edit Maintenance Record" : "New Maintenance Record"}</h2>

      {errors && (
        <div className="alert">
          {Object.keys(errors).map(key => (
            <p key={key}>{errors[key][0]}</p>
          ))}
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <div className="form-row">
          <div>
            <label>Date of Service</label>
            <input type="date" value={entry.serviceDate} onChange={e => setEntry({ ...entry, serviceDate: e.target.value })} />
          </div>
          <div>
            <label>P.O. Number</label>
            <input value={entry.poNumber} onChange={e => setEntry({ ...entry, poNumber: e.target.value })} />
          </div>
          <div>
            <label>P.O. Date</label>
            <input type="date" value={entry.poDate} onChange={e => setEntry({ ...entry, poDate: e.target.value })} />
          </div>
        </div>

        <div className="form-row">
          <div>
            <label>Supplier/Mechanic</label>
            <input value={entry.supplier} onChange={e => setEntry({ ...entry, supplier: e.target.value })} />
          </div>
          <div>
            <label>D.R./Service Inv. Number</label>
            <input value={entry.drNumber} onChange={e => setEntry({ ...entry, drNumber: e.target.value })} />
          </div>
          <div>
            <label>D.R./Service Inv. Date</label>
            <input type="date" value={entry.drDate} onChange={e => setEntry({ ...entry, drDate: e.target.value })} />
          </div>
        </div>

        <div className="form-group">
          <label>Details of Maintenance/Repair</label>
          <textarea rows={3} value={entry.maintenanceDetails} onChange={e => setEntry({ ...entry, maintenanceDetails: e.target.value })} />
        </div>

        <h3>Parts Replaced</h3>
        <div className="parts-list">
          {entry.parts.map((part, index) => (
            <div key={index} className="form-row" style={{ gap: '0.5rem', marginBottom: '1rem' }}>
              <input placeholder="Part Name" value={part.name} onChange={e => updatePart(index, 'name', e.target.value)} />
              <input type="number" placeholder="Qty" value={part.quantity} onChange={e => updatePart(index, 'quantity', parseFloat(e.target.value))} />
              <input placeholder="Unit" value={part.unit} onChange={e => updatePart(index, 'unit', e.target.value)} />
              <input type="number" placeholder="Unit Price" value={part.unitPrice} onChange={e => updatePart(index, 'unitPrice', parseFloat(e.target.value))} />
              <input placeholder="Remarks" value={part.remarks} onChange={e => updatePart(index, 'remarks', e.target.value)} />
              <span style={{ minWidth: '80px' }}>
                Total: {(part.quantity * part.unitPrice).toFixed(2)}
              </span>
              <button type="button" onClick={() => removePart(index)} className="btn btn-delete">Remove</button>
            </div>
          ))}
          <button type="button" onClick={addPart} className="btn-add">+ Add Part</button>
        </div>

        <button type="submit" className="btn" style={{ marginTop: '1rem' }}>
          {entry.id ? "Update" : "Save"}
        </button>
      </form>
    </div>
  );
}
