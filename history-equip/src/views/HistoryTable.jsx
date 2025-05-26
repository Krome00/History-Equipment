import { useEffect, useState } from "react";
import axiosClient from "../axios-client";
import { FaEdit, FaTrash } from "react-icons/fa";
import Pagination from "../components/Pagination";
import SearchAndFilter from "../components/SearchAndFilter";
import { useStateContext } from "../context/ContextProvider";
import HistoryTableForm from "./HistoryTableForm";

export default function HistoryTable() {
  const [loading, setLoading] = useState(false);
  const [history, setHistory] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedEntry, setSelectedEntry] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedFilter, setSelectedFilter] = useState("");

  const { setNotification } = useStateContext();
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 5;

  const fetchHistory = () => {
    setLoading(true);
    axiosClient.get("/equipment-history")
      .then(({ data }) => {
        setHistory(data);
        setLoading(false);

        // Fix pagination bug if current page is empty
        const filtered = filterHistory(data);
        const totalPages = Math.ceil(filtered.length / pageSize);
        if (currentPage > totalPages && totalPages > 0) {
          setCurrentPage(totalPages);
        }
      })
      .catch(() => setLoading(false));
  };

  useEffect(() => {
    fetchHistory();
  }, []);

  const handleAddNew = () => {
    setSelectedEntry(null);
    setShowModal(true);
  };

  const handleEdit = (entry) => {
    setSelectedEntry(entry);
    setShowModal(true);
  };

  const handleDelete = (entry) => {
    if (confirm(`Are you sure you want to delete this entry from ${entry.serviceDate}?`)) {
      axiosClient.delete(`/equipment-history/${entry.id}`)
        .then(() => {
          setNotification('History entry deleted successfully.');
          fetchHistory();
        });
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedEntry(null);
  };

  const filterHistory = (data) => {
    return data.filter(item =>
      Object.values(item).some(
        value =>
          value &&
          value.toString().toLowerCase().includes(searchTerm.toLowerCase())
      ) &&
      (selectedFilter === "" || item.supplier === selectedFilter)
    );
  };

  const filtered = filterHistory(history);
  const totalPages = Math.ceil(filtered.length / pageSize);
  const paginated = filtered.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: "space-between", alignItems: "center" }}>
        <h1>Maintenance History</h1>
        <button className="btn-add" onClick={handleAddNew}>Add New</button>
      </div>

      <div style={{ marginTop: "2rem", marginBottom: "0rem" }}>
        <SearchAndFilter
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
          selectedFilter={selectedFilter}
          onFilterChange={setSelectedFilter}
        />
      </div>

      <div className="card animated fadeInDown" style={{ overflowX: 'auto' }}>
        <table>
          <thead>
            <tr>
              <th>Actions</th>
              <th>Date of Service</th>
              <th>P.O. Number</th>
              <th>P.O. Date</th>
              <th>Supplier/Mechanic</th>
              <th>D.R./Service Inv. Number</th>
              <th>D.R./Service Inv. Date</th>
              <th>Details of Maintenance/Repair</th>
              <th>Parts Replaced (If any)</th>
              <th>QTY</th>
              <th>Unit</th>
              <th>Unit Price</th>
              <th>Total</th>
              <th>Remarks</th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <tr><td colSpan="14" className="text-center">Loading...</td></tr>
            ) : (
              paginated.map((item) => (
                <tr key={item.id}>
                  <td>
                    <button onClick={() => handleEdit(item)} title="Edit" style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
                      <FaEdit />
                    </button>
                    <button onClick={() => handleDelete(item)} title="Delete" style={{ background: 'none', border: 'none', cursor: 'pointer', marginLeft: '10px' }}>
                      <FaTrash />
                    </button>
                  </td>
                  <td>{item.serviceDate}</td>
                  <td>{item.poNumber}</td>
                  <td>{item.poDate}</td>
                  <td>{item.supplier}</td>
                  <td>{item.drNumber}</td>
                  <td>{item.drDate}</td>
                  <td>{item.maintenanceDetails}</td>
                  <td>{item.partsReplaced}</td>
                  <td>{item.quantity}</td>
                  <td>{item.unit}</td>
                  <td>{item.unitPrice?.toFixed(2)}</td>
                  <td>{(item.unitPrice * item.quantity).toFixed(2)}</td>
                  <td>{item.remarks}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />

      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <button onClick={handleCloseModal} className="modal-close">X</button>
            <HistoryTableForm
              initialData={selectedEntry}
              onClose={handleCloseModal}
              onSaved={() => {
                handleCloseModal();
                fetchHistory();
              }}
            />
          </div>
        </div>
      )}
    </div>
  );
}
