import Featured from "../../components/featured/Featured"
import NavBar from "../../components/navbar/NavBar"
import "./Home.scss"

const Home = () => {
  return (
    <div className="home">
      <NavBar />
      <Featured type="movie" />
    </div>
  )
}

export default Home