import React from 'react';

const SimpleTable = ({ data }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Reg.no</th>
          <th>Name</th>
          <th>Achievements</th>
          <th>Prizes</th>
        </tr>
      </thead>
      <tbody>
        {data.map(item => (
          <tr key={item.regno}>
            <td>{item.regno}</td>
            <td>{item.name}</td>
            <td>{item.achievements}</td>
            <td>{item.prizes}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default SimpleTable;
