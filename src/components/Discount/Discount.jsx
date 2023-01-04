import "./Discount.css";

import discountImage from "../../assets/images/discount.png";

const Discount = () => {
  return (
    <div className="discount" id="discount">
      <div className="image">
        <div className="content">
          <h2>We Have A Discount</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi
            asperiores consectetur, recusandae ratione provident necessitatibus,
            cumque delectus commodi fuga praesentium beatae. Totam vel similique
            laborum dicta aperiam odit doloribus corporis.
          </p>
          <img src={discountImage} alt="" />
        </div>
      </div>
      <div className="form">
        <div className="content">
          <h2>Request A Discount</h2>
          <form action="">
            <input
              className="input"
              type="text"
              placeholder="Your Name"
              name="name"
            />
            <input
              className="input"
              type="email"
              placeholder="Your Email"
              name="email"
            />
            <input
              className="input"
              type="text"
              placeholder="Your Phone"
              name="mobile"
            />
            <textarea
              className="input"
              placeholder="Tell Us About Your Needs"
              name="message"
            ></textarea>
            <input
              type="submit"
              value="Send"
              onClick={(e) => e.preventDefault()}
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Discount;
