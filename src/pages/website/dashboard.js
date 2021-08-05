
export default function Dashboard(props) {
  

  return (
    <div>
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h1 className="h2">Danh sách sản phẩm</h1>
        <div className="btn-toolbar mb-2 mb-md-0">
        </div>
      </div>
      <div className="table-responsive">
        <table className="table table-striped table-sm">
          <thead>
            <tr>
              <th style={{ color: "#585858" }} scope="col">
                <h4>Stt</h4>
              </th>
              <th style={{ color: "#585858" }} scope="col">
                <h4>Tên</h4>
              </th>
              <th style={{ color: "#585858" }} scope="col">
                <h4>Giá</h4>
              </th>
              <th style={{ color: "#585858" }} scope="col">
                <h4>Trạng thái</h4>
              </th>
              <th style={{ color: "#585858" }} scope="col">
                <h4>Chi tiết</h4>
              </th>
              <th style={{ color: "#585858" }} scope="col">
                <h4>Ảnh</h4>
              </th>
            </tr>
          </thead>
          <tbody>
            {props.products.map((product, index) => (
              <tr key={index}>
                <td>
                  <h5>{index + 1}</h5>
                </td>
                <td>
                  <h5>{product.name}</h5>
                </td>
                <td>
                  <h5>{product.price}</h5>
                </td>
                <td>
                  {product.status == "1" || product.status == "true" ? (
                    <span style={{ color: "#088A08" }}>
                      <b>
                        <h4>Còn hàng</h4>
                      </b>
                    </span>
                  ) : (
                    <span style={{ color: "red" }}>
                      <b>
                        <h4>Hết hàng</h4>
                      </b>
                    </span>
                  )}
                </td>
                <td>
                  <h5>{product.detail}</h5>
                </td>
                <td>
                  <img src={product.link} width="170px" height="200px" alt="" />
                </td>
                <td>          
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
