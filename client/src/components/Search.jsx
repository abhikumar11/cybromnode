import React, { useEffect, useState } from 'react';
import axios from "axios";

const Search = () => {
  const [books, setBooks] = useState([]);

  const loadData = async () => {
    try {
      const res = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/students/showbook`);
      console.log(res.data);
      setBooks(Array.isArray(res.data) ? res.data : []);
    } catch (err) {
      console.error(err);
      setBooks([]);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <div>
      <h1>Search Student Data</h1>
      <hr />

      <table border="2px" width="600" align="center">
        <thead>
          <tr style={{ backgroundColor: "grey" }}>
            <th>Book Name</th>
            <th>Price</th>
            <th>Author Name</th>
            <th>Email</th>
          </tr>
        </thead>

        <tbody>
          {books.map((item) => (
            <tr key={item._id}>
              <td>{item?.bookname}</td>
              <td>{item?.price}</td>
              <td>{item?.authorid?.authorname}</td>
              <td>{item?.authorid?.email}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <hr />
    </div>
  );
};

export default Search;
