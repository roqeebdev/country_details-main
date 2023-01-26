import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const CountryInfo = () => {
  const [info, setInfo] = useState([]);
  const { id } = useParams();
  
  useEffect(() => {
    fetch(`https://restcountries.com/v2/name/${id}?fullText=true`)
      .then((res) => res.json())
      .then((data) => {
        setInfo(data);
        // setIsLoading(false);
        //console.log(info.flag);
      })
      .catch((err) => console.log(err));
  },[id]);

  return (
    <div className=" p-6 py-8 md:px-14 md:p-12 h-screen">
      <Link to={`/`}>
        <button className="dark:text-white border inline-flex items-center py-2 px-4 rounded dark:border-slate-800 dark:bg-slate-700 shadow-lg">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="15"
            height="15"
          >
            <path fill="none" d="M0 0h24v24H0z" />
            <path d="M7.828 11H20v2H7.828l5.364 5.364-1.414 1.414L4 12l7.778-7.778 1.414 1.414z" />
          </svg>

          <div className="px-3">Back</div>
        </button>
      </Link>

      {info.map((info) => (

        <div className="grid grid-cols-2 gap-2 pt-5">
          <div
            className="container mx-auto relative  pr-20 md:flex md:basis-1/2"
            key={info.flag}
          >
            <a href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">
              <img
                className="min-h-full min-w-full md:w-full md:h-full object-cover"
                src={info.flag}
                alt="country-imag"
              />
            </a>
          </div>
          <div className="container md:basis-1/2 py-6 ">
            <h1 className="text-md font-extrabold pb-2">{info.name}</h1>

            <div className="flex flex-col md:flex md:flex-row ">
              <div className="basis-1/2">
                <div className="pb-2">
                  <b className="pr-4">Native Name:</b>
                  {info.name}
                </div>
                <p className="pb-2">
                  <b className="pr-4">Population:</b>{" "}
                  <span>{info.population}</span>
                </p>
                <p className="pb-2">
                  <b className="pr-4">Region:</b> <span>{info.region}</span>
                </p>
                <p className="pb-2">
                  <b className="pr-4">Sub Region:</b>{" "}
                  <span>{info.subregion}</span>
                </p>
                <p className="pb-2">
                  <b className="pr-4">Capital:</b> <span>{info.capital}</span>
                </p>
              </div>
              <div className="basis-1/2">
                <p className="pb-2">
                  <b className="pr-4">Top Level Domain:</b>{" "}
                  <span>{info.topLevelDomain}</span>
                </p>
                <p className="pb-2">
                  <b className="pr-4">Currencies:</b>{" "}
                  <span>{info.currencies[0]["name"]}</span>
                </p>
                <p className="pb-2">
                  <b className="pr-4">Laguages:</b>{" "}
                  <span>{info.languages[0]["name"]}</span>
                </p>
              </div>
            </div>
            <div className="pt-10 flex-col md:inline-flex md:flex-row">
              <p className="text-lg font-medium">Border Countries:</p>
              {info.borders.map((border) => (
            <button key={info.id} className="dark:text-white border items-center py-1 px-5 mx-3 mb-3 rounded dark:bg-slate-700 border-slate-700 shadow-md">
          <div className="px-3">{border}</div>
        </button>))}
            </div>
          </div>
        </div>
      
          ))}

    </div>
  );
};

export default CountryInfo;
