const dummyEquipments = [
  {
    id: 1,
    name: "Forklift",
    description: "Heavy-duty forklift used in warehouse operations.\nCan lift up to 3 tons. idk testing data to overflow ",
    plate_no: "ABC-1234",
    chassis_no: "CHS1234567",
    engine_no: "ENG9876543",
    accountable_office: "Warehouse Dept.",
    property_no: "PROP-001",
    date_acquired: "2022-01-15",
    acquisition_cost: "500000",
    date_unserviceable: "2025-03-10",
    accountable_officer: "John Doe"
  },
  {
    id: 2,
    name: "Bulldozer",
    description: "Used for clearing land.\nHas new hydraulic system.",
    plate_no: "XYZ-5678",
    chassis_no: "CHS2345678",
    engine_no: "ENG8765432",
    accountable_office: "Engineering Dept.",
    property_no: "PROP-002",
    date_acquired: "2021-06-20",
    acquisition_cost: "800000",
    date_unserviceable: "2024-12-01",
    accountable_officer: "Jane Smith"
  },
  {
    id: 3,
    name: "Forklift",
    description: "Heavy-duty forklift used in warehouse operations.\nCan lift up to 3 tons.",
    plate_no: "ABC-1234",
    chassis_no: "CHS1234567",
    engine_no: "ENG9876543",
    accountable_office: "Warehouse Dept.",
    property_no: "PROP-001",
    date_acquired: "2022-01-15",
    acquisition_cost: "500000",
    date_unserviceable: "2025-03-10",
    accountable_officer: "John Doe"
  },
  {
    id: 4,
    name: "Bulldozer",
    description: "Used for clearing land.\nHas new hydraulic system.",
    plate_no: "XYZ-5678",
    chassis_no: "CHS2345678",
    engine_no: "ENG8765432",
    accountable_office: "Engineering Dept.",
    property_no: "PROP-002",
    date_acquired: "2021-06-20",
    acquisition_cost: "800000",
    date_unserviceable: "2024-12-01",
    accountable_officer: "Jane Smith"
  },
  {
    id: 5,
    name: "Forklift",
    description: "Heavy-duty forklift used in warehouse operations.\nCan lift up to 3 tons.",
    plate_no: "ABC-1234",
    chassis_no: "CHS1234567",
    engine_no: "ENG9876543",
    accountable_office: "Warehouse Dept.",
    property_no: "PROP-001",
    date_acquired: "2022-01-15",
    acquisition_cost: "500000",
    date_unserviceable: "2025-03-10",
    accountable_officer: "John Doe"
  },
  {
    id: 6,
    name: "Bulldozer",
    description: "Used for clearing land.\nHas new hydraulic system.",
    plate_no: "XYZ-5678",
    chassis_no: "CHS2345678",
    engine_no: "ENG8765432",
    accountable_office: "Engineering Dept.",
    property_no: "PROP-002",
    date_acquired: "2021-06-20",
    acquisition_cost: "800000",
    date_unserviceable: "2024-12-01",
    accountable_officer: "Jane Smith"
  },
  {
    id: 7,
    name: "Forklift",
    description: "Heavy-duty forklift used in warehouse operations.\nCan lift up to 3 tons.",
    plate_no: "ABC-1234",
    chassis_no: "CHS1234567",
    engine_no: "ENG9876543",
    accountable_office: "Warehouse Dept.",
    property_no: "PROP-001",
    date_acquired: "2022-01-15",
    acquisition_cost: "500000",
    date_unserviceable: "2025-03-10",
    accountable_officer: "John Doe"
  },
  {
    id: 8,
    name: "Bulldozer",
    description: "Used for clearing land.\nHas new hydraulic system.",
    plate_no: "XYZ-5678",
    chassis_no: "CHS2345678",
    engine_no: "ENG8765432",
    accountable_office: "Engineering Dept.",
    property_no: "PROP-002",
    date_acquired: "2021-06-20",
    acquisition_cost: "800000",
    date_unserviceable: "2024-12-01",
    accountable_officer: "Jane Smith"
  },
  {
    id: 9,
    name: "Forklift",
    description: "Heavy-duty forklift used in warehouse operations.\nCan lift up to 3 tons.",
    plate_no: "ABC-1234",
    chassis_no: "CHS1234567",
    engine_no: "ENG9876543",
    accountable_office: "Warehouse Dept.",
    property_no: "PROP-001",
    date_acquired: "2022-01-15",
    acquisition_cost: "500000",
    date_unserviceable: "2025-03-10",
    accountable_officer: "John Doe"
  },
  {
    id: 10,
    name: "Bulldozer",
    description: "Used for clearing land.\nHas new hydraulic system.",
    plate_no: "XYZ-5678",
    chassis_no: "CHS2345678",
    engine_no: "ENG8765432",
    accountable_office: "Engineering Dept.",
    property_no: "PROP-002",
    date_acquired: "2021-06-20",
    acquisition_cost: "800000",
    date_unserviceable: "2024-12-01",
    accountable_officer: "Jane Smith"
  },
  {
    id: 11,
    name: "Forklift",
    description: "Heavy-duty forklift used in warehouse operations.\nCan lift up to 3 tons.",
    plate_no: "ABC-1234",
    chassis_no: "CHS1234567",
    engine_no: "ENG9876543",
    accountable_office: "Warehouse Dept.",
    property_no: "PROP-001",
    date_acquired: "2022-01-15",
    acquisition_cost: "500000",
    date_unserviceable: "2025-03-10",
    accountable_officer: "John Doe"
  },
  {
    id: 12,
    name: "Bulldozer",
    description: "Used for clearing land.\nHas new hydraulic system.",
    plate_no: "XYZ-5678",
    chassis_no: "CHS2345678",
    engine_no: "ENG8765432",
    accountable_office: "Engineering Dept.",
    property_no: "PROP-002",
    date_acquired: "2021-06-20",
    acquisition_cost: "800000",
    date_unserviceable: "2024-12-01",
    accountable_officer: "Jane Smith"
  },
  {
    id: 13,
    name: "Forklift",
    description: "Heavy-duty forklift used in warehouse operations.\nCan lift up to 3 tons.",
    plate_no: "ABC-1234",
    chassis_no: "CHS1234567",
    engine_no: "ENG9876543",
    accountable_office: "Warehouse Dept.",
    property_no: "PROP-001",
    date_acquired: "2022-01-15",
    acquisition_cost: "500000",
    date_unserviceable: "2025-03-10",
    accountable_officer: "John Doe"
  },
  {
    id: 14,
    name: "Bulldozer",
    description: "Used for clearing land.\nHas new hydraulic system.",
    plate_no: "XYZ-5678",
    chassis_no: "CHS2345678",
    engine_no: "ENG8765432",
    accountable_office: "Engineering Dept.",
    property_no: "PROP-002",
    date_acquired: "2021-06-20",
    acquisition_cost: "800000",
    date_unserviceable: "2024-12-01",
    accountable_officer: "Jane Smith"
  },
  {
    id: 15,
    name: "Forklift",
    description: "Heavy-duty forklift used in warehouse operations.\nCan lift up to 3 tons.",
    plate_no: "ABC-1234",
    chassis_no: "CHS1234567",
    engine_no: "ENG9876543",
    accountable_office: "Warehouse Dept.",
    property_no: "PROP-001",
    date_acquired: "2022-01-15",
    acquisition_cost: "500000",
    date_unserviceable: "2025-03-10",
    accountable_officer: "John Doe"
  },
  {
    id: 16,
    name: "Bulldozer",
    description: "Used for clearing land.\nHas new hydraulic system.",
    plate_no: "XYZ-5678",
    chassis_no: "CHS2345678",
    engine_no: "ENG8765432",
    accountable_office: "Engineering Dept.",
    property_no: "PROP-002",
    date_acquired: "2021-06-20",
    acquisition_cost: "800000",
    date_unserviceable: "2024-12-01",
    accountable_officer: "Jane Smith"
  },
  {
    id: 17,
    name: "Forklift",
    description: "Heavy-duty forklift used in warehouse operations.\nCan lift up to 3 tons.",
    plate_no: "ABC-1234",
    chassis_no: "CHS1234567",
    engine_no: "ENG9876543",
    accountable_office: "Warehouse Dept.",
    property_no: "PROP-001",
    date_acquired: "2022-01-15",
    acquisition_cost: "500000",
    date_unserviceable: "2025-03-10",
    accountable_officer: "John Doe"
  },
  {
    id: 18,
    name: "Hatdog",
    description: "Used for clearing land.\nHas new hydraulic system.",
    plate_no: "XYZ-5678",
    chassis_no: "26645766",
    engine_no: "ENG8765432",
    accountable_office: "Engineering Dept.",
    property_no: "PROP-002",
    date_acquired: "2021-06-20",
    acquisition_cost: "100000",
    date_unserviceable: "2024-12-01",
    accountable_officer: "Jane Smith"
  },

  // Add more objects as needed
];
export default dummyEquipments;