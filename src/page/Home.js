

import { filterData, myApi } from "../data";
import Card from "../component/Card";
import Cards from "../component/Cards";
import Spinner from "../component/Spinner";
import Header from "../component/Header";
import Filter from "../component/Filter";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";

const Home = (props) => {


  let isLoggedIn=props.isLoggedIn;
  let setIsLoggedIn=props.setIsLoggedIn ;

  const [courses, setCourses] = useState(null);

  const [loading, setLoading] = useState(true);

  const[category,setCategory] =useState(filterData[0].title);

  async function fetchData() {
    setLoading(true);
    try {
      const response = await fetch(myApi);
      const output = await response.json();
      setCourses(output.data);
    } catch (error) {
      toast.error("no data");
    }
    setLoading(false);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="app">
      <div>
        <Header></Header>
      </div>

      <div className="main-content">
        <div>
          <Filter category={category} setCategory={setCategory} filterData={filterData}></Filter>
        </div>

        <div>
          {loading ? <Spinner></Spinner> : <Cards isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} category={category} setCategory={setCategory} courses={courses}></Cards>}
        </div>
      </div>
    </div>
  );
}

export default Home