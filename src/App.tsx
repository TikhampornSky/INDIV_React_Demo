import React, {useState } from 'react';
import { SeriesProps } from './interfaces/SeriesProps';
import List from './components/List'
import Form from './components/Form'
import DataShow from './data/ShowData'
import './App.css';

function App() {

  const [seriesList, setSeriesList] = useState<SeriesProps["seriesList"]>([])     //<SeriesProps["seriesList"]> คือ การเรียกใช้ interface โดยเรียกใช้ตัวไหนให้ระบุใน []

  return (
    <div className="App">
      <DataShow />
      { /* <DataFetching /> */ }
      <h1>My Favourite TY Series</h1>
      <Form seriesList={seriesList} setSeriesList={setSeriesList}/>        
      <List seriesList={seriesList} />
    </div>
  );

  //<Form seriesList={seriesList} setSeriesList={seriesList}/>    คือ การส่งค่า Props
  //<ชื่อComponent ชื่อProperty = ค่าที่กำหนดไว้ให้Property>
}

export default App;
