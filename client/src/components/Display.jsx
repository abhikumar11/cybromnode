import React, { useEffect, useState } from 'react'
import axios from "axios";

const Display = () => {

  const [student, setStudent] = useState([]);

  const [showForm, setShowForm] = useState(false);
  const [authorId, setAuthorId] = useState("");
  const [bookname, setBookname] = useState("");
  const [price, setPrice] = useState("");

  const loadData = async () => {
    const res = await axios.get(`${import.meta.env.VITE_SERVER}/student/display`);
    setStudent(res.data);
  };

  useEffect(() => {
    loadData();
  }, []);

  const handleAddBook = async (e) => {
    e.preventDefault();

    await axios.post(`${import.meta.env.VITE_SERVER}/student/createbook`, {
      authorId,
      bookname,
      price
    });

    setShowForm(false);
    setBookname("");
    setPrice("");

    loadData();
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Student Data</h1>
      <hr />

      <table border="2px" width="600" align="center">
        <thead>
          <tr style={{ backgroundColor: "grey" }}>
            <th>Author</th>
            <th>Email</th>
            <th colSpan={2}>Book</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {student.map((item) => (
            <tr key={item._id}>
              <td>{item.authorname}</td>
              <td>{item.email}</td>

              <td>{item.booksid?.map((i) => i?.bookname).join(", ")}</td>
              <td>{item.booksid?.map((i) => i?.price).join(", ")}</td>

              <td>
                <button
                  onClick={() => {
                    setAuthorId(item._id);
                    setShowForm(true);
                  }}
                >
                  Add Books
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <hr />

      {showForm && (
        <div>
          <h2>Add Book</h2>
          <form
            onSubmit={handleAddBook}
            style={{
              display: "flex",
              flexDirection: "column",
              width: "300px",
              margin: "auto",
              gap: "10px"
            }}
          >
            <input
              type="text"
              value={authorId}
              readOnly
            />

            <input
              type="text"
              placeholder="Book Name"
              value={bookname}
              onChange={(e) => setBookname(e.target.value)}
            />

            <input
              type="number"
              placeholder="Price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />

            <button onClick={handleAddBook}>Add Book</button>
            <button type="button" onClick={() => setShowForm(false)}>
              Cancel
            </button>
          </form>
        </div>
      )}

    </div>
  );
};

export default Display;
