import VideogameList from "../components/VideogameList"
import Header from "../components/Header"
import { useState } from "react";

const Home = () => {

  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div>
      <Header searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <VideogameList searchQuery={searchQuery} />
    </div>
  )
}

export default Home