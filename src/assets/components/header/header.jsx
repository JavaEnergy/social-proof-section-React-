import "./header.css";
const icon = (
  <svg width="17" height="16" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M16.539 6.097a.297.297 0 00-.24-.202l-5.36-.779L8.542.26a.296.296 0 00-.53 0L5.613 5.117l-5.36.779a.297.297 0 00-.165.505l3.88 3.78-.917 5.34a.297.297 0 00.43.312l4.795-2.52 4.794 2.52a.296.296 0 00.43-.313l-.916-5.338L16.464 6.4c.08-.08.11-.197.075-.304z"
      fill="#EF9546"
      fill-rule="nonzero"
    />
  </svg>
);

const Header = function header() {
  return (
    <main>
      <header>
        <h1>10,000+ of our users love our products.</h1>
        <p>
          We only provide great products combined with excellent customer
          service. See what our satisfied customers are saying about our
          services.
        </p>
      </header>
      <section>
        <div className="star-div">
          <div className="stars">
            {icon}
            {icon}
            {icon}
            {icon}
            {icon}
          </div>
          <div className="text">
            <p>Rated 5 Stars in Reviews</p>
          </div>
        </div>
        <div className="star-div second">
          <div className="stars">
            {icon}
            {icon}
            {icon}
            {icon}
            {icon}
          </div>
          <div className="text">
            <p>Rated 5 Stars in Report Guru</p>
          </div>
        </div>{" "}
        <div className="star-div third">
          <div className="stars">
            {icon}
            {icon}
            {icon}
            {icon}
            {icon}
          </div>
          <div className="text">
            <p>Rated 5 Stars in BestTech</p>
          </div>
        </div>
      </section>{" "}
    </main>
  );
};

export default Header;
