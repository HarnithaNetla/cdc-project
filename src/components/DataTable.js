// DataTable.js
import React from 'react';

const DataTable = ({ data }) => {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Sl.No</th>
            <th>Roll.No</th>
            <th>Student Name</th>
            <th>Name of the Employer</th>
            <th>Appointment No.</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index}>
              <td>{row.slNo}</td>
              <td>{row.rollNo}</td>
              <td>{row.studentName}</td>
              <td>{row.employerName}</td>
              <td>{row.appointmentNo}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;
