import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useParams, useHistory } from "react-router-dom";
import { get } from "../../../api/productAPI";
import swal from "sweetalert";

const EditFormProduct = (props) => {
  const [product, setProduct] = useState({});
  const { id } = useParams();
  const history = useHistory();

  // call API
  useEffect(() => {
    const getProduct = async () => {
      try {
        const { data } = await get(id);
        setProduct(data);
        reset(data);
      } catch (error) {}
    };
    getProduct();
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm();

  const onSubmit = (data) => {
    const fakeValue = {
      id: id,
      ...data
    };

    props.onEdit(fakeValue);
    console.log(fakeValue);
    history.push("/admin");
  };

  const confirm = (value) => {
    console.log(value);
    swal({
      title: "Bạn chắc chứ",
      text: "Bạn ấn ok sẽ được sửa",
      icon: "warning",
      buttons: true,
      dangerMode: true
    }).then((willDelete) => {
      if (willDelete) {
        onSubmit(value);
        swal("Sửa thành công", {
          icon: "success"
        });
      } else {
        swal("Bạn chọn không sửa");
      }
    });
  };
  return (
    <div>
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h2 className="h2">Cập nhật sản phẩm</h2>
      </div>
      <form onSubmit={handleSubmit(confirm)}>
        <div className="mb-3">
          <label className="form-label">Tên sản phẩm</label>
          <input
            type="text"
            className="form-control"
            // name="name"
            defaultValue={product.name}
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
            defaultValue={product.price}
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
            defaultValue={product.status}
          >
            <option value="0">Hết hàng</option>
            <option value="1">Còn hàng</option>
          </select>
        </div>

        <div className="mb-3">
          <label className="form-label">Chi tiết</label>
          <input
            defaultValue={product.detail}
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
            defaultValue={product.link}
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
          Sửa sản phẩm
        </button>
      </form>
    </div>
  );
};
export default EditFormProduct;
