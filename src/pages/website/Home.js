import { Link } from "react-router-dom";

export default function Home(props) {
  return (
    <div>
      <div
        className="d-flex row text-center border-bottom"
        style={{ color: "pink" }}
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              className="d-block w-100"
              src="https://i.pinimg.com/originals/55/55/8e/55558ea1bb1885d2925d15205b7b0b93.png"
              alt="First slide"
              style={{ height: "550px" }}
            />
            <div className="carousel-caption">
              <h3>LIMITED</h3>
            </div>
          </div>
        </div>
      </div>
      <div>
        <hr />
      </div>
      <div className="container-fluid padding">
        <div className="row">
          {props.products.map((product, index) => (
            <div key={index} className="col-3">
              <div>
                <div className="card">
                  <div>
                    <img
                      className="card-img-top"
                      src={product.link}
                      width="200px"
                      height="450px"
                      alt=""
                    />
                    <div className="card-body">
                      <div className="text-center border-bottom">
                        <h3 className="card-title">
                          <b>{product.name}</b>
                        </h3>
                      </div>
                      <div>
                        <br />
                      </div>
                      <h5 style={{ color: "black" }} className="card-title">
                        {product.detail}
                      </h5>
                      <div>
                        <br />
                      </div>

                      <div className="d-flex justify-content-between border-bottom">
                        <h4 style={{ color: "#2E9AFE" }} className="card-text">
                          {product.price}VND
                        </h4>
                        <h5>
                          {product.status == "1" || product.status == "true" ? (
                            <span style={{ color: "#00FF00" }}>
                              <b>Còn hàng</b>
                            </span>
                          ) : (
                            <span style={{ color: "#DF0101" }}>
                              <b>Hết hàng</b>
                            </span>
                          )}
                        </h5>
                      </div>
                      <div>
                        <br />
                      </div>
                      <div className="row text-center">
                        <a
                          href=""
                          style={{ color: "black" }}
                          className="btn btn-success"
                        >
                          <i
                            className="fa fa-share-square"
                            aria-hidden="true"
                          />
                          Mua
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <hr />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <br />
      </div>
    </div>
  );
}
