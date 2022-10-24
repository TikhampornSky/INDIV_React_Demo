import React, {useState } from 'react';
import { SeriesProps } from './interfaces/SeriesProps';
import List from './components/List'
import Form from './components/Form'
//import GetData from './data/GetData';
//import ThemeContext from './data/DataContext';
import ShowDataHandle from './pages/ShowDataView'
// import ShowDataView from './pages/ShowDataView'
import DataPost from './pages/SendData_post'
import DataUpdateCall from './pages/SendData_update'
import DataDeleteCall from './pages/SendData_delete'
// import { inversifyOutput } from './services/inverse_main';
import ShowInverse from './pages/inverse-show';

import './App.css';

import { observable, autorun } from 'mobx';             //ติดตามการเปลี่ยนแปลงของข้อมูล
let state = observable({
  name: ''
})
autorun(() => {
  console.log(state.name);
})
state.name = 'Test';

function App() {

  const [seriesList, setSeriesList] = useState<SeriesProps["seriesList"]>([])     //<SeriesProps["seriesList"]> คือ การเรียกใช้ interface โดยเรียกใช้ตัวไหนให้ระบุใน []

  return (
    <div className="App">
      
      <ShowInverse />
      <div>

        {/* {JSON.stringify(posts)} */}
      </div>

      <DataDeleteCall/>
      <DataUpdateCall/>
      <DataPost/>
      <ShowDataHandle />
      {/* < ShowDataView /> */}
      {/* <ShowDataView/> */}
      {/*
      <ThemeContext.Provider value={
        [{
          id: 0, 
          userId: 0, 
          title: '', 
          body: ''
        }]
      }>
        <DataShow /> 
      </ThemeContext.Provider>
      */}
      <h1>My Favourite TY Series</h1>
      <Form seriesList={seriesList} setSeriesList={setSeriesList}/>        
      <List seriesList={seriesList} />
    </div>
  );

  //<Form seriesList={seriesList} setSeriesList={seriesList}/>    คือ การส่งค่า Props
  //<ชื่อComponent ชื่อProperty = ค่าที่กำหนดไว้ให้Property>
}

export default App;
