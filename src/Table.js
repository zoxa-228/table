import React from 'react';

const Table = ({ products }) => {
  return (
    <table style={styles.table}>
      <thead>
        <tr>
          <th style={styles.th}>Product Name</th>
          <th style={styles.th}>Price</th>
          <th style={styles.th}>Description</th>
        </tr>
      </thead>
      <tbody>
        {products.map((product) => (
          <tr key={product.id}>
            <td style={styles.td}>{product.name}</td>
            <td style={styles.td}>{product.price}</td>
            <td style={styles.td}>{product.description}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

const styles = {
  table: {
    width: '80%',
    margin: '0 auto',
    borderCollapse: 'collapse',
  },
  th: {
    backgroundColor: '#f2f2f2',
    padding: '10px',
  },
  td: {
    padding: '10px',
    textAlign: 'center',
    border: '1px solid #ddd',
  },
};

export default Table;
