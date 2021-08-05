import { Link } from "react-router-dom";
import swal from "sweetalert";
export default function List(props) {
  const confirm = (value) => {
    swal({
      title: "Bạn chắc chứ",
      text: "nếu xóa bạn sẽ k khôi phục lại được file",
      icon: "warning",
      buttons: true,
      dangerMode: true
    }).then((willDelete) => {
      if (willDelete) {
        props.onRemove(value);
        swal("Bạn đã xóa", {
          icon: "success"
        });
      } else {
        swal("Bạn đã chọn k xóa");
      }
    });
  };

  return (
    <div>
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h1 className="h2">Quản lý sản phẩm</h1>
        <div className="btn-toolbar mb-2 mb-md-0">
          <Link
            type="button"
            className="btn btn-sm btn-outline-primary"
            to={`/admin/product/add`}
          >
            <h5>Thêm sản phẩm</h5>
          </Link>
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
              <th style={{ color: "#585858" }} scope="col">
                <h4>Sự kiện</h4>
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
                  <button
                    className="btn btn-outline-danger"
                    onClick={() => {
                      confirm(product.id);
                    }}
                  >
                    Delete
                  </button>
                  <Link
                    className="btn btn-outline-primary ms-1"
                    to={`/admin/product/${product.id}/edit`}
                  >
                    Edit
                  </Link>
                  
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
