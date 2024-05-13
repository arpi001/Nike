import End from "./End"
import Firsts from "./Firsts"
import Latest from "./Latest"
import Navbar from "./Navbar"
import Point from "./Point"
import Seconds from "./Seconds"
import Trending from "./Trending"


const App = () => {
  return (
    <div>
      <Navbar />
      <Firsts />
      <Seconds />
      <Latest />
      <Trending />
      <Point />
      <End />
    </div>
  )
}

export default App