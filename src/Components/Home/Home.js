import React from "react";

const Home = () => {

  const videoUploadHandler = (event) => {

    event.preventDefault();

    const form = event.target;

    const videoData = {
      
      videoLink: form.videoLink.value,
      headline: form.headline.value,
      
    }

    fetch(`http://localhost:5000/header`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(videoData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      })
      .catch((e) => console.error(e));

    console.log(videoData)
     
  }
  

  return (

    <div className="mx-2">

      <div className="text-2xl xl:text-3xl lg:text-3xl md:text-2xl text-center my-5">

        <h1 className="text-green-600 font-semibold">

          চিয়া সিড সম্পর্কে বিস্তারিত জানতে ভিডিও

        </h1>

      </div>

      {/* video upload form */}

      <div className="flex justify-center items-center w-full rounded-md mt-10">
             
        <form onSubmit={videoUploadHandler} className="shadow-md p-5 bg-green-200">

          <div>

            <p className="font-semibold">Video Upload</p>

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
             
             <p className="font-semibold my-3">Right a Head line</p>

             <textarea required name="headline" className="textarea textarea-bordered w-full" placeholder="Like This: বিশ্বের 1 নম্বর সুপার ফুড চিয়া সিড,আপনার ডায়াবেটিস রাখবে নিয়ন্ত্রণে">  </textarea>

          </div>
          
             <button type="submit" className="btn-ghost bg-green-700 text-white font-semibold px-4 py-2 w-full my-5 rounded-md">Upload</button>

        </form>

      </div>

    </div>

  );

};

export default Home;
