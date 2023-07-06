import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../Styles/Notes.css';

const Notes = () => {
  const [notesindex, setnotesindex] = useState([]);

  const fetchData = () => {
    fetch('https://acecraft-deploy.onrender.com/Notes')
      .then((response) => response.json())
      .then((data) => {
        setnotesindex(data);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="container mb-3">
      <h1 className="blogs text-center">Blogs</h1>
      <div className="row">
        {notesindex.map((notes) => (
          <div className="col-md-6" key={notes.id}>
            <Link to={`/notes/${notes.id}`} className="card-link">
              <div className="cards">
                <div className="card-body text-center">{notes.title}</div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Notes;
