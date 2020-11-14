import './assets/style/App.scss'
import {useState,useEffect} from 'react'
import FilmsGrid from './components/FilmsGrid'
import Header from './components/Header'
import Search from './components/Search'
import axios from 'axios'
const API={
  BASE:"http://www.omdbapi.com/",
  KEY:"6f633e37"
}
function App() {
  const [loading,setLoading]=useState(true)
  const [data,setData]=useState([])
  const [query,setQuery]=useState()


  useEffect(() => {
    const getFilms=async()=>{
      if(query){
        const data= await axios.get(`${API.BASE}?apikey=${API.KEY}&s=${query}`)
        setData(data.data)
        setLoading(false)
      }else{
        const data= await axios.get(`${API.BASE}?apikey=${API.KEY}&s=robot`)
        setData(data.data)
        setLoading(false)
      }
    }
    getFilms()
    
  }, [query])
  return (
    <div className="App">
      <Header/>
      <Search getQuery={(q) => setQuery(q)}/>
      <FilmsGrid loading={loading} data={data}/>
    </div>
  );
}

export default App;
