import { useEffect, useState } from "react";
import axiosClient from "../axios-client.js";
import { Link } from "react-router-dom";
import { useStateContext } from "../context/ContextProvider.jsx";
import EquipmentTableForm from "./EquipmentTableForm";
import { FaEdit, FaTrash, FaHistory } from 'react-icons/fa';

export default function EquipmentTable() {
  const [loading, setLoading] = useState(false);
  const [equipments, setEquipments] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedEquipment, setSelectedEquipment] = useState(null);

  const { setNotification } = useStateContext();
  const dummyEquipments = [
    {
      id: 1,
      name: "Forklift Model X200",
      description:
        "Heavy-duty warehouse forklift with extended lift height.\nUsed primarily in loading bay.",
      plate_no: "FLT-2041",
      chassis_no: "CHSXL204X200",
      engine_no: "ENGX200A947",
      accountable_office: "Warehouse Dept.",
      property_no: "PROP-001",
      date_acquired: "2022-06-15",
      acquisition_cost: "120000.00",
      date_unserviceable: "2025-01-12",
      accountable_officer: "John Doe",
    },
    {
      id: 2,
      name: "Excavator ZX350LC",
      description:
        "Caterpillar hydraulic excavator\nUsed for deep foundation work.",
      plate_no: "EXC-7920",
      chassis_no: "CHSZX350LC20",
      engine_no: "ENG350LC947X",
      accountable_office: "Construction Ops",
      property_no: "PROP-002",
      date_acquired: "2021-04-22",
      acquisition_cost: "450000.00",
      date_unserviceable: "2024-11-30",
      accountable_officer: "Jane Smith",
    },
    {
      id: 3,
      name: "Delivery Van Toyota HiAce",
      description:
        "White HiAce used for daily logistics and deliveries within Metro area.",
      plate_no: "VAN-8842",
      chassis_no: "CHSHIACE2021",
      engine_no: "ENGHIACE8842",
      accountable_office: "Logistics Dept.",
      property_no: "PROP-003",
      date_acquired: "2023-01-10",
      acquisition_cost: "95000.00",
      date_unserviceable: null,
      accountable_officer: "Maria Lopez",
    },
  ];

  const fetchEquipments = () => {
    setLoading(true);
    axiosClient.get("/equipments")
      .then(({ data }) => {
        setEquipments(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  };

  useEffect(() => {
    fetchEquipments();
  }, []);

  const handleAddNew = () => {
    setSelectedEquipment(null);
    setShowModal(true);
  };

  const handleEdit = (equipment) => {
    setSelectedEquipment(equipment);
    setShowModal(true);
  };

  const handleDelete = (equipment) => {
    if (confirm(`Are you sure you want to delete ${equipment.name}?`)) {
      axiosClient.delete(`/equipments/${equipment.id}`)
        .then(() => {
          setNotification('Equipment deleted successfully.');
          fetchEquipments();
        });
    }
  };
  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedEquipment(null);
  };

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: "space-between", alignItems: "center" }}>
        <h1>Equipments</h1>
        <button className="btn-add" onClick={handleAddNew}>Add New</button>
      </div>

      <div className="card animated fadeInDown" style={{ overflowX: 'auto' }}>
        <table>
          <thead>
            <tr>
              <th>Actions</th>
              <th>Name of Property</th>
              <th>Description</th>
              <th>Plate No.</th>
              <th>Chassis No.</th>
              <th>Engine No.</th>
              <th>Accountable Office</th>
              <th>Property/Equipment No.</th>
              <th>Date Acquired</th>
              <th>Acquisition Cost</th>
              <th>Date Unserviceable</th>
              <th>Accountable Officer</th>
            </tr>
          </thead>
          {loading ? (
            <tbody>
              <tr><td colSpan="12" className="text-center">Loading...</td></tr>
            </tbody>
          ) : (
            <tbody>
              {/*equipments*/dummyEquipments.map((eq) => (
                <tr key={eq.id}>
                  <td>
                    <button onClick={() => handleEdit(eq)} title="Edit" style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
                      <FaEdit />
                    </button>
                    <Link to={`/history/${eq.id}`} title="History" style={{ margin: '0 10px' }}>
                      <FaHistory />
                    </Link>
                    <button onClick={() => handleDelete(eq)} title="Delete" style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
                      <FaTrash />
                    </button>
                  </td>
                  <td>{eq.name}</td>
                  <td>{eq.description}</td>
                  <td>{eq.plate_no}</td>
                  <td>{eq.chassis_no}</td>
                  <td>{eq.engine_no}</td>
                  <td>{eq.accountable_office}</td>
                  <td>{eq.property_no}</td>
                  <td>{eq.date_acquired}</td>
                  <td>{eq.acquisition_cost}</td>
                  <td>{eq.date_unserviceable}</td>
                  <td>{eq.accountable_officer}</td>
                </tr>
              ))}
            </tbody>
          )}
        </table>
      </div>

      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <button onClick={handleCloseModal} className="modal-close">X</button>
            <EquipmentTableForm
              initialData={selectedEquipment}
              onClose={handleCloseModal}
              onSaved={() => {
                setShowModal(false);
                axiosClient.get("/equipments").then(({ data }) => setEquipments(data));
              }}
            />
          </div>
        </div>
      )}
    </div>
  );
}