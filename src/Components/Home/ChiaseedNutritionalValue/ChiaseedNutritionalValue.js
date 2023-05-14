import React from "react";

const ChiaseedNutritionalValue = () => {

  // const imageHostKey = process.env.REACT_APP_image_key;
    
  const NutritionalValueHandler = (event) => {
      
    event.preventDefault()
    
    const form = event.target;
    const headline = form.headline.value;
    const details = form.details.value;

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
      saveData(headline, details, image)
      form.reset("")
    })
    .catch(e => console.log(e))

    console.log(headline, image, details)

  }

  const saveData = (headline, details, image) => {

     const saveDatabase = {
      headline: headline,
      details:details,
      image: image
     }

      fetch(`http://localhost:5000/nutritionalValue`, {
         
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(saveDatabase), 

      })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      })
      .catch((e) => console.error(e));

  }

  return (
    <div>
      <div className="font-semibold text-center my-5">
        <h1 className="text-2xl xl:text-3xl lg:text-3xl text-green-700">
          নিয়মিত চিয়া সিড কেন খাবেন ? এবং পুষ্টিগুণ কি ?
        </h1>
      </div>

      <div className="flex justify-center items-center w-full rounded-md mt-10">

        <form onSubmit={NutritionalValueHandler} className="shadow-md p-5 bg-green-200">

          <div>

            <p className="font-semibold my-3">Icon Image</p>


            <input name="image" required type="file" className="file-input file-input-bordered file-input-accent w-full" />
             
             <p className="font-semibold my-3">Right a Head line</p>

             <input
              required
              name="headline"
              type="text"
              placeholder=""
              className="input input-bordered w-full"
            />

            <p className="font-semibold my-3">Details</p>

            <textarea required name="details" className="textarea textarea-bordered w-full" placeholder="Like This: যারা 'প্রিডায়াবেটিস' বা 'টাইপ টু ডায়াবেটিস'য়ে ভুগছেন তাদের জন্য 'চিয়া সিডস' বা চিয়া বীজ হতে পারে আদর্শ খাবার। এতে প্রচুর পরিমাণে প্রোটিন আর ভোজ্য আঁশ থাকে । যা হজম, ওজন নিয়ন্ত্রণ এবং হৃদযন্ত্র সুস্থ রাখতে অত্যন্ত উপকারী।">  </textarea>
 
          </div>
          
             <button type="submit" className="btn-ghost bg-green-700 text-white font-semibold px-4 py-2 w-full my-5 rounded-md">Upload</button>

        </form>

      </div>
    </div>
  );
};

export default ChiaseedNutritionalValue;
