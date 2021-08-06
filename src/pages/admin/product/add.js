import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import swal from "sweetalert";
import { v4 as uuidv4 } from "uuid";
const AddFormProduct = (props) => {
  const history = useHistory();
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();
  const onSubmit = (data) => {
    const fakeValue = {
      id: uuidv4(),
      ...data
    };
    history.push("/admin");
    console.log(fakeValue);
    props.onAdd(fakeValue);
  };
  const confirm = (value) => {
    console.log(value);
    swal({
      title: "Bạn muốn thêm",
      text: "Bạn ấn ok sẽ được thêm",
      icon: "warning",
      buttons: true,
      dangerMode: true
    }).then((willDelete) => {
      if (willDelete) {
        onSubmit(value);
        swal("Thêm thành công", {
          icon: "success"
        });
      } else {
        swal("Bạn chọn không thêm");
      }
    });
  };
  return (
    <div>
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h2 className="h2">Thêm sản phẩm</h2>
      </div>
      <form onSubmit={handleSubmit(confirm)}>
        <div className="mb-3">
          <label className="form-label">Tên sản phẩm</label>
          <input
            type="text"
            className="form-control"
            // name="name"
            {...register("name", { required: true })}
            // onChange={onHandleChange}
          />
          {errors.name && (
            <span className="d-block text-danger mt-3">
              This field is required
            </span>
          )}
        </div>
        <div className="mb-3">
          <label className="form-label">Giá sản phẩm</label>
          <input
            type="number"
            className="form-control"
            // name="price"
            // onChange={onHandleChange}
            {...register("price", { required: true })}
          />
          {errors.price && (
            <span className="d-block text-danger mt-3">
              This field is required
            </span>
          )}
        </div>
        <div className="mb-3">
          <label className="form-label">Tình trạng</label>
          <select
            className="form-control"
            // name="status"
            // onChange={onHandleChange}
            {...register("status")}
            defaultValue="0"
          >
            <option value="0">Hết hàng</option>
            <option value="1">Còn hàng</option>
          </select>
        </div>
        <div className="mb-3">
          <label className="form-label">Chi tiết</label>
          <input
            type="text"
            className="form-control"
            // name="price"
            // onChange={onHandleChange}
            {...register("detail", { required: true })}
          />
          {errors.detail && (
            <span className="d-block text-danger mt-3">
              This field is required
            </span>
          )}
        </div>
        <div className="mb-3">
          <label className="form-label">link ảnh</label>
          <input
            type="text"
            className="form-control"
            // name="price"
            // onChange={onHandleChange}
            {...register("link", { required: true })}
          />
          {errors.link && (
            <span className="d-block text-danger mt-3">
              This field is required
            </span>
          )}
        </div>

        <button type="submit" className="btn btn-outline-primary">
          Thêm sản phẩm
        </button>
      </form>
    </div>
  );
};
export default AddFormProduct;
