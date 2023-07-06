import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import '../Styles/NoteDetail.css';
import Commentbox from '../Components/Commentbox'

const NoteDetail = () => {
  const [note, setNote] = useState(null);
  const { id } = useParams(); // Retrieve the note ID using useParams

  useEffect(() => {
    fetch(`https://acecraft-deploy.onrender.com/Notes/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setNote(data);
      });
  }, [id]);

  return (
    <div>
    <div className="text-center">
      {note ? (
        <div className="containernote">
          <h3 className="note-title ms-5 text-center">{note.title}</h3>
          <p className="note-description">
            Formal wear only serves as the base - it’s the accessories you adorn that perfect the quintessential formal
            look. However, styling plays a massive role in the same. It should ideally have a little bit of everything to
            make your formal look a truly distinctive one. Here are a few tips on how you can style your formal wear:
          </p>

          <h6 className="section-title">Accessories For Men - Tips:</h6>
          <ul>
            <li>Pocket Squares - These are a great, suave addition to your formal look. It’s not always necessary that
              your pocket square should match your formal wear - it just shouldn't clash with it drastically.</li>
            <li>Cufflinks - Cufflinks add a touch of class to your suit. Adding cufflinks to your shirt will keep it firm
              and in place as well.</li>
            <li>Watches - Your watch should be just as dressy as the suit your wear. Watches made from stainless steel are
              a great complement to your meeting look.</li>
            <li>Tie Clip - The best way to complete your formal look (and also keep your tie in place) is to go for a
              simple tie clip. It also works to keep your tie neat and wrinkle-free throughout the day!</li>
            <li>Belt - Leather belts are always a popular choice. An essential tip is to always match your belt with your
              formal shoes.</li>
            <li>Footwear - Footwear is arguably one of the most important pieces of clothing in an outfit for men. Always
              opt for leather or suede as it rounds off your formal look with a refined touch.</li>
          </ul>

          <h6 className="section-title">Accessories For Women - Tips:</h6>
          <ul>
            <li>Scarves - If you’re feeling chilly or if the weather allows for it, it’s always good to wear a
              professional-looking scarf with a suit. Just keep in mind that the scarves you choose should be accessory
              ones, and not winter scarves.</li>
            <li>Belt - A thin belt accentuates any woman’s figure, so it’s essential for you to choose a slim one that
              is in a contrast colour from your outfit. The belt and shoe rule that is a must for men doesn’t usually
              apply for women, though.</li>
            <li>Jewellery - If you’re heading for any formal event, avoid wearing large costume jewellery. Earrings
              should be conservative and small. Necklaces are acceptable, as long as they are delicate or are pendants. An
              elegant watch is a must.</li>
            <li>Purse/Handbag - Always opt for a classy leather bag that can fit all your essentials like your laptop.
              This adds a touch of professionalism to your look.</li>
            <li>Hosiery - If you’re wearing hosiery, it should always suit your skin tone and should not have any
              distracting patterns or designs.</li>
            <li>Footwear - Footwear is arguably one of the most important pieces of clothing in an outfit for men. Always
              opt for leather or suede as it rounds off your formal look with a refined touch.</li>
          </ul>

          <h6 className="section-title">Conclusion</h6>
          <p style={{color:'black'}}>For both men and women, getting your accessories right is an integral part of nailing the formal look.
            However, unless the base is right, the impact you create won’t be an effective one - start by finding
            customised workwear that complements your frame to a tee at Acecraft!</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
    <div className="container">
      <hr/>
      <h3>0 comment</h3>
      <hr />
      <Commentbox />
    </div>
    </div>
  );
};

export default NoteDetail;
