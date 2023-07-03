import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const NoteDetail = () => {
  const [note, setNote] = useState(null);
  const { id } = useParams(); // Retrieve the note ID using useParams

  useEffect(() => {
    fetch(`http://localhost:4000/Notes/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setNote(data);
      });
  }, [id]);

  return (
    <div className="text-center">
      
      {note ? (
        <div>
          <h5 style={{ color: "black" }}>{note.title}</h5>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default NoteDetail;
