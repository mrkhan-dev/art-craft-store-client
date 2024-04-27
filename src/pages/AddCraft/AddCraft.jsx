import {useForm} from "react-hook-form";

const AddCraft = () => {
  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm();

  const handleFormSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="md:max-w-7xl mx-auto shadow-lg rounded-lg px-8 py-8 border my-12">
      <div>
        <h1 className="text-4xl text-center font-bold">Add New Craft</h1>
        {/* <p className="text-center mt-8 text-lg ">
          Welcome to our craft item addition page! Please follow the steps below
          to list <br /> your new craft item on our platform.
        </p> */}
      </div>
      <form onSubmit={handleSubmit(handleFormSubmit)}>
        <div className="flex gap-4">
          <div className="md:w-1/2">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="Item Name"
                name="name"
                className="input input-bordered"
                {...register("name", {required: true})}
              />
              {errors.name && (
                <span className="text-[#FF900E] text-sm mt-1 ml-1">
                  This field is required!
                </span>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Category</span>
              </label>
              <input
                type="text"
                placeholder="Sub Category"
                name="category"
                className="input input-bordered"
                {...register("category", {required: true})}
              />
              {errors.category && (
                <span className="text-[#FF900E] text-sm mt-1 ml-1">
                  This field is required!
                </span>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Price</span>
              </label>
              <input
                type="text"
                placeholder="Price"
                name="price"
                className="input input-bordered"
                {...register("price", {required: true})}
              />
              {errors.price && (
                <span className="text-[#FF900E] text-sm mt-1 ml-1">
                  This field is required!
                </span>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Customization</span>
              </label>
              <input
                type="text"
                placeholder="Customization"
                name="customization"
                className="input input-bordered"
                {...register("customization", {required: true})}
              />
              {errors.customization && (
                <span className="text-[#FF900E] text-sm mt-1 ml-1">
                  This field is required!
                </span>
              )}
            </div>
          </div>
          {/* part 2 */}
          <div className="w-1/2">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Stock Status</span>
              </label>
              <input
                type="text"
                placeholder="Stock Status"
                name="name"
                className="input input-bordered"
                {...register("stockStatus", {required: true})}
              />
              {errors.stockStatus && (
                <span className="text-[#FF900E] text-sm mt-1 ml-1">
                  This field is required!
                </span>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Image</span>
              </label>
              <input
                type="text"
                placeholder="Image URL"
                name="image"
                className="input input-bordered"
                {...register("image", {required: true})}
              />
              {errors.image && (
                <span className="text-[#FF900E] text-sm mt-1 ml-1">
                  This field is required!
                </span>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Rating</span>
              </label>
              <input
                type="text"
                placeholder="Rating"
                name="rating"
                className="input input-bordered"
                {...register("rating", {required: true})}
              />
              {errors.rating && (
                <span className="text-[#FF900E] text-sm mt-1 ml-1">
                  This field is required!
                </span>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Processing Time</span>
              </label>
              <input
                type="text"
                placeholder="processing time"
                name="processingTime"
                className="input input-bordered"
                {...register("processingTime", {required: true})}
              />
              {errors.processingTime && (
                <span className="text-[#FF900E] text-sm mt-1 ml-1">
                  This field is required!
                </span>
              )}
            </div>
          </div>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Short Description</span>
          </label>
          <input
            type="text"
            placeholder="Short description"
            name="description"
            className="input input-bordered"
            {...register("description", {required: true})}
          />
          {errors.description && (
            <span className="text-[#FF900E] text-sm mt-1 ml-1">
              This field is required!
            </span>
          )}
        </div>
        <div className="form-control">
          <input
            className="bg-[#E47E98] text-white input mt-4 text-lg cursor-pointer"
            type="submit"
            value="Add"
          />
        </div>
      </form>
    </div>
  );
};

export default AddCraft;
