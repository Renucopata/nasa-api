import { useEffect, useState } from 'react'
import Footer from "./components/Footer"
import SideBar from './components/SideBar'
import Main from './components/Main'


function App() {
  

const [showModal, setShowModal] = useState(false)
const [data, setData] = useState(null)
const [loading, setLoading] = useState(false)

function handleToggleModal () {
  setShowModal(!showModal)
}

useEffect(() =>{
  const NASA_KEY = import.meta.env.VITE_NASA_API_KEY
  async function fetchApiData() {
    
    const url = 'https://api.nasa.gov/planetary/apod' + `?api_key=${NASA_KEY}`
    
    
    
    try {
      const res = await fetch(url)
      const apiData = await res.json()
  
      setData(apiData)
      console.log("Fetch from API today")
      console.log('DATA \n,', data)
    } catch (err) {
      console.log(err.message)
      
    }
  }
  fetchApiData()
}, [])
  return (
    <>
    {data ? (<Main data={data} />) : (
      <div className='loadingState'>
        <i class="fa-solid fa-gear"></i> </div>
    )}

    { showModal && (<SideBar data={data} handleToggleModal={handleToggleModal} />)} 
     {data && (<Footer data={data} setShowModal={setShowModal}></Footer>)}

    </>
  )
}

export default App
