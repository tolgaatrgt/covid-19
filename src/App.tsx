import React from 'react';
import Header from './components/Header'
import Panel from './pages/Panel'
import './App.css';
import data from './data.json'
export type Each = {
  name: string,
  id: number
}

export type Country = {
code: string
ourid: number
source: string
title: string
total_active_cases: number
total_cases: number
total_deaths: number
total_new_cases_today: number
total_new_deaths_today: number
total_recovered: number
total_serious_cases: number
total_unresolved: number
}


function App() {
const [countries,setCountries] = React.useState<Country[]>([])
const [item,setItem] = React.useState<Country>()
const[selected,setSelected] = React.useState(0)
let copy = [...countries]
React.useEffect(() => {
  fetch(`https://api.thevirustracker.com/free-api?countryTotals=ALL`)
.then(response => response.json())
.then(data => {Object.values(data['countryitems'][0]).map((item: any) => {
    copy.push(item)
})
setCountries(copy)
})
.catch(console.error);
},[])

/* React.useEffect(() => {
  Object.values(data['countryitems'][0]).map((item: any) => {
  copy.push(item)
})
setCountries(copy)
},[])  */

const List: Each[] = React.useMemo(
  () => 
  countries.map((country) => {
return {
  name: country.title ,
  id: country.ourid
}
  })
,[countries])

const changeSelected = (id: number) => {
setSelected(id)
}


React.useEffect(() => {
  countries.forEach((item) => {
    if(item.ourid === selected){
    setItem(item)
    }
  })
  
},[selected])

  return (
      <div className="App">
      <Header />
      <div className='Container'>
      <Panel isGet = {Boolean(countries.length)} List={List} changeSelected={changeSelected} data={item} isSelect={Boolean(item)} /> 
      </div>
      </div>
  );
}

export default App;
