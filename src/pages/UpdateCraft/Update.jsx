import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";

const Update = () => {
  const {id} = useParams();
  const [item, setItem] = useState({});

  useEffect(() => {
    fetch(`http://localhost:5000/singleItem/${id}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setItem(data);
      });
  }, [id]);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const category = form.category.value;
    const price = form.price.value;
    const customization = form.customization.value;
    const stockStatus = form.stockStatus.value;
    const image = form.image.value;
    const rating = form.rating.value;
    const processingTime = form.processingTime.value;
    const description = form.description.value;

    const formData = {
      name,
      category,
      price,
      customization,
      stockStatus,
      image,
      rating,
      processingTime,
      description,
    };

    fetch(`http://localhost:5000/updateCraft/${id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };

  return (
    <div className="md:max-w-7xl mx-auto shadow-lg rounded-lg px-8 py-8 border my-12">
      <div>
        <h1 className="text-4xl text-center font-bold">Add New Craft</h1>
      </div>
      <form onSubmit={handleFormSubmit}>
        <div className="md:flex gap-4">
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
                defaultValue={item.name}
              />
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
                defaultValue={item.category}
              />
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
                defaultValue={item.price}
              />
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
                defaultValue={item.customization}
              />
            </div>
          </div>
          {/* part 2 */}
          <div className="md:w-1/2">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Stock Status</span>
              </label>
              <input
                type="text"
                placeholder="Stock Status"
                name="stockStatus"
                className="input input-bordered"
                defaultValue={item.stockStatus}
              />
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
                defaultValue={item.image}
              />
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
                defaultValue={item.rating}
              />
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
                defaultValue={item.processingTime}
              />
            </div>
          </div>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Short Description</span>
          </label>
          <textarea
            type="text"
            placeholder="Short description"
            name="description"
            className="input input-bordered"
            defaultValue={item.description}
          />
        </div>
        <div className="form-control">
          <input
            className="bg-[#E47E98] text-white input mt-4 text-lg cursor-pointer"
            type="submit"
            value="Update"
          />
        </div>
      </form>
    </div>
  );
};

export default Update;
