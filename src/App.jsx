import React, { useEffect, useState } from "react";
const App = () => {
  const [api, setApi] = useState(null);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchApi = async () => {
      try {
        let apiUrl = await fetch("https://type.fit/api/quotes");
        if (!apiUrl.ok) {
          throw new Error("got Some errors in fetching Api");
        }
        let responseData = await apiUrl.json();
        setApi(responseData);
        // console.log(responseData)
      } catch (err) {
        setError(err);
      }
    };
    fetchApi();
  }, []);
  if (error) {
    return <div>ERROR ~:~: {error} </div>;
  }
  if (!api) {
    return <div>Loading... </div>;
  }
  return (
    <div
      className=""
      style={{
        backgroundImage: `url('https://source.unsplash.com/1000x1000/?background-abstract')`,
        backgroundRepeat: "no-repeat",
        width: "100%",
        backgroundSize: "cover",
      }}
    >
      <h1 className=" text-5xl bg-zinc-400 py-8 sticky top-0 text-red-600 text-center ">
        Fetching Api Qoutes
      </h1>
      <div className="card flex gap-5 flex-wrap justify-center">
        {api.map((qoute, index) => (
          <div
            className=" bg-yellow-200 m-3 flex-grow p-4  border-2 border-red-500 outline-gray-700 outline-offset-2 outline"
            key={index}
          >
            <p className="h-20">{qoute.text}</p>
            <h1 className="flex items-center gap-2 italic">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-person-heart"
                viewBox="0 0 16 16"
              >
                <path d="M9 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0m-9 8c0 1 1 1 1 1h10s1 0 1-1-1-4-6-4-6 3-6 4m13.5-8.09c1.387-1.425 4.855 1.07 0 4.277-4.854-3.207-1.387-5.702 0-4.276Z" />
              </svg>
              ~ {qoute.author}
            </h1>
          </div>
        ))}
      </div>
    </div>
  );
};
export default App;
