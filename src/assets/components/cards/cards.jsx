import "./cards.css";
import imageColton from "./image-colton.jpg";
import imageAnne from "./image-anne.jpg";
import imageIrena from "./image-irene.jpg";

const Cards = function cards() {
  return (
    <div className="cards">
      <div className="card">
        <div className="card-header">
          <img src={imageColton} alt="" />
          <div className="head">
            <p className="head-p">Colton Smith</p>
            <span>Verified Buyer</span>
          </div>
        </div>
        <p className="mian-p">
          “ We needed the same printed design as the one we had ordered a week
          prior. Not only did they find the original order, but we also received
          it in time. Excellent! ”
        </p>
      </div>
      <div className="card sec">
        <div className="card-header">
          <img src={imageAnne} alt="" />
          <div className="head">
            <p className="head-p">Colton Smith</p>
            <span>Verified Buyer</span>
          </div>
        </div>
        <p className="mian-p">
          “ We needed the same printed design as the one we had ordered a week
          prior. Not only did they find the original order, but we also received
          it in time. Excellent! ”
        </p>
      </div>{" "}
      <div className="card thir">
        <div className="card-header">
          <img src={imageIrena} alt="" />
          <div className="head">
            <p className="head-p">Colton Smith</p>
            <span>Verified Buyer</span>
          </div>
        </div>
        <p className="mian-p">
          “ We needed the same printed design as the one we had ordered a week
          prior. Not only did they find the original order, but we also received
          it in time. Excellent! ”
        </p>
      </div>
    </div>
  );
};

export default Cards;
