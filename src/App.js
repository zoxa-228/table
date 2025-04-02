import React, { useState, useEffect, useMemo } from 'react';
import Table from './Table';

const App = () => {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);

  // Загрузка данных с API
  useEffect(() => {
    fetch('https://dummyjson.com/products?limit=10000')
      .then((response) => response.json())
      .then((data) => setProducts(data.products));
  }, []);

  // Вычисление пагинации
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = useMemo(() => products.slice(indexOfFirstItem, indexOfLastItem), [products, indexOfFirstItem, indexOfLastItem]);

  const totalPages = Math.ceil(products.length / itemsPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div style={styles.container}>
      <h1>Product Table</h1>
      <Table products={currentItems} />
      <div style={styles.pagination}>
        {[...Array(totalPages)].map((_, index) => (
          <button key={index} onClick={() => paginate(index + 1)} style={styles.pageButton}>
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

const styles = {
  container: {
    textAlign: 'center',
    padding: '20px',
  },
  pagination: {
    marginTop: '20px',
  },
  pageButton: {
    margin: '5px',
    padding: '10px 20px',
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    cursor: 'pointer',
  },
};

export default App;
