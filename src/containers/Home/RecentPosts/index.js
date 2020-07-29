import React from "react";
import "./style.css";
import Card from "../../../components/UI/Card";

/**
 * @author
 * @function RecentPosts
 **/

const RecentPosts = (props) => {
  return (
    <div style={props.style}>
      <Card style={{ marginBottom: "20px" }}>
        <div className="postImageWrapper">
          <img
            src={
              "https://dynaimage.cdn.cnn.com/cnn/q_auto,w_727,c_fit/http%3A%2F%2Fcdn.cnn.com%2Fcnnnext%2Fdam%2Fassets%2F191029115047-08-most-famous-paintings-birth-of-venus.jpg"
            }
            alt=""
          />
        </div>

        <div style={{ textAlign: "center" }}>
          <span>Painting</span>
          <h2>the Birth of Venus</h2>
          <span>Painted in 1485 by Sandro Botticelli</span>
          <p>
            The oldest painting in the top 10 and competing with "The Kiss" for
            most sensuous, "The Birth of Venus" was probably commissioned by a
            member of the wealthy and art-loving Medici family, which ruled
            Florence and nearby areas for centuries. Marrying a renewed interest
            in classic Greek culture with Early Renaissance style, Botticelli
            creates an unforgettable figure with the Goddess of Love emerging
            from a huge scallop shell. Botticelli's "Venus" features two
            significant departures from most other works of his contemporaries.
            First, he painted on canvas instead of the more popular wood.
            Secondly, nudity was rare at this time -- so it was daring that
            Venus is completely exposed minus her long, flowing hair and a hand
            (barely) covering her most intimate body parts.
          </p>
        </div>
      </Card>
    </div>
  );
};

export default RecentPosts;
