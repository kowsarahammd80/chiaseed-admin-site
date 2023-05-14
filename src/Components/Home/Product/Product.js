import React from "react";

const Product = () => {
     
  const productHandler = (event) =>{

     event.preventDefault()

     const form = event.target;
     
     const productVideoLink = form.videoLink.value;
     const productName = form.productName.value;
     const price = form.price.value;

     const image = event.target.image.files[0];
     const formData = new FormData();
     formData.append("image", image);
     fetch(`https://api.imgbb.com/1/upload?key=fd8517255349a959d54c825bc574584f`, {
       method: "POST",
       body: formData,
     })
     .then((res) => res.json())
     .then((imageData) => {
       const image = imageData.data.display_url;
       console.log(image);
       productSave(productVideoLink, productName, price, image)
       form.reset("")
     })
     .catch(e => console.log(e))

     console.log(productVideoLink, productName, price, image)

  }

  const productSave = (productVideoLink, productName, price, image) => {
      
    const productDataSave = {

      productVideoLink: productVideoLink,
      productName: productName,
      price: price,
      image: image,

    }

    fetch(`http://localhost:5000/product`, {  
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(productDataSave), 

      })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      })
      .catch((e) => console.error(e));

  }

  return (

    <div>

      <div className="text-center my-4">
          <h1 className="text-2xl xl:text-3xl lg:text-3xl md:text-3xl font-semibold">
            Product Post
          </h1>
      </div>

      <div className="flex justify-center items-center w-full rounded-md mt-10 my-5">

        <form onSubmit={productHandler} className="shadow-md p-5 bg-green-200 mx-3">

          <div>
            <p className="font-semibold my-3"> Product Image </p>

            <input
              name="image"
              required
              type="file"
              className="file-input file-input-bordered file-input-accent w-full"
            />

            <p className="font-semibold mt-3">Video link Upload</p>

            <p className="font-semibold my-3 opacity-50">
              please upload a youtube embed link's https link
            </p>

            <input
              required
              name="videoLink"
              type="text"
              placeholder="please upload a youtube embed link's https link"
              className="input input-bordered w-full"
            />

            <p className="font-semibold my-3">Product name and kg/gm </p>

            <input
              required
              name="productName"
              type="text"
              placeholder=""
              className="input input-bordered w-full"
            />

            <p className="font-semibold my-3">Product Price </p>

            <input
              required
              name="price"
              type="number"
              placeholder=""
              className="input input-bordered w-full"
            />
          </div>

          <button
            type="submit"
            className="btn-ghost bg-green-700 text-white font-semibold px-4 py-2 w-full my-5 rounded-md"
          >
            Upload
          </button>

        </form>

      </div>

    </div>

  );

};

export default Product;
