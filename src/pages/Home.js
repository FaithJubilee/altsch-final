import { useEffect, useState } from "react";
import Button from "../components/Button";
import Nav from "../components/Nav";
import treatment from "./../assets/treatment.png";
import "./home.scss";
import axios from "axios";
import ReactPaginate from "react-paginate";
import BrandLoader from "../components/BrandLoader";
import groups from './../assets/group2.png'

const Home = () => {
  const [loading, setLoading] = useState(false);
  const [hospitalData, setHospitalData] = useState([]);
  const [searchHospital, setSearchHospital] = useState("");

  useEffect(() => {
    const url = "https://api.reliancehmo.com/v3/providers";

    const fetchData = async () => {
      setLoading(true);
      const res = await axios.get(url);
      setHospitalData(res.data.data);
      setLoading(false);
    };
    fetchData();
  }, []);

  const filterHospitalData = hospitalData.filter((value) => {
    if (searchHospital === "") {
      return value;
    } else if (
      value.name.includes(searchHospital) ||
      value.state.name.includes(searchHospital)
    ) {
      return value;
    }
    return false;
  });

  const [hospCardNum, setHospitalCardNum] = useState(0);
  const cardPerPage = 4;
  const cardVisited = hospCardNum * cardPerPage;

  const hospitalList = filterHospitalData.slice(
    cardVisited,
    cardVisited + cardPerPage
  );

  const hospCardCount = Math.ceil(filterHospitalData.length / cardPerPage);

  const changeHospCard = ({ selected }) => {
    setHospitalCardNum(selected);
  };
  return (
    <>
      <Nav />
      <div className="home">
        <div className="subtitle-container">
          <h1>Find the nearest hospital to you and make an apppointment</h1>
          <p>
            Discober Your Perfect Care: Find Your Hospital, Anytime, Anywhere!
          </p>
          <Button text="Get Started" />
          <p>Learn more</p>
        </div>
        <div className="treatment-img">
          <img src={treatment} alt="treatment" />
        </div>
      </div>
      <form className="search-form">
        <h3>Find a nearby hospital</h3>
        <input
          type="text"
          placeholder="search Hospital by Name or State"
          value={searchHospital}
          onChange={(e) => setSearchHospital(e.target.value)}
        />
      </form>
      {loading ? (
        <>
          <BrandLoader />
        </>
      ) : (
        <div className="finde-search">
          {hospitalList.map((data) => {
            return (
              <div key={data.id} className="hospital-card">
                <h3>{data.name}</h3>
                <p>{data.address}</p>
                <h4>{data.location}</h4>
              </div>
            );
          })}
        </div>
      )}

      <div className="paginatin-container">
        <ReactPaginate
          previousLabel={"Prev"}
          nextLabel={"Next"}
          pageCount={hospCardCount}
          onPageChange={changeHospCard}
          containerClassName={"paginate-btn"}
          activeClassName="paginate-active"
        />
      </div>
      <div className="groups-img">
        <img src={groups} alt="img" />
      </div>
    </>
  );
};
export default Home;
