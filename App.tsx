import React from 'react';
import logo from './logo.svg';
import './App.css';
import { callbackify } from 'util';
interface adss{
  province:string,
  city:string,
  address:string
}
interface users{
  FirstName:string,
  Lastname:string,
  Gender:string,
  Birthday:string,
  Address:adss,
  Phone:string,
  Email:string,
  Active:string,
  created_at:string,
  updated_at:string,
  deletet_at:string
}
const data: users[]=[
  {
  FirstName:'Alfreds Futterkiste',
  Lastname:'Maria Anders',
  Gender:'Female',
  Birthday:'08/01/2001',
  Address:{
    province:'hai duong',
    city:'gia loc',
    address:'tt gia loc'
  },
  Phone:'0392512633',
  Email:'haigl0801@gmail.com',
  Active:'none1',
  created_at:'none1',
  updated_at:'none1',
  deletet_at:'none1',
},
{
  FirstName:'hai',
  Lastname:'nguyen',
  Gender:'nam',
  Birthday:'09/01/2001',
  Address:{
    province:'hai duong 2',
    city:'gia loc 2',
    address:'tt gia loc 2'
  },
  Phone:'0392512634',
  Email:'haigl0802@gmail.com',
  Active:'none2',
  created_at:'none2',
  updated_at:'none2',
  deletet_at:'none2',
},
{
  FirstName:'hai3',
  Lastname:'nguyen3',
  Gender:'nam',
  Birthday:'09/01/20013',
  Address:{
    province:'hai duong 23',
    city:'gia loc 23',
    address:'tt gia loc 23'
  },
  Phone:'03925126343',
  Email:'haigl0802@gmail.com3',
  Active:'none2',
  created_at:'none23',
  updated_at:'none23',
  deletet_at:'none23',
},
{
  FirstName:'hai4',
  Lastname:'nguyen4',
  Gender:'nam',
  Birthday:'09/01/20014',
  Address:{
    province:'hai duong 24',
    city:'gia loc 2',
    address:'tt gia loc 24'
  },
  Phone:'03925126344',
  Email:'haigl0802@gmail.com4',
  Active:'none24',
  created_at:'none24',
  updated_at:'none24',
  deletet_at:'none24',
},
{
  FirstName:'hai5',
  Lastname:'nguyen5',
  Gender:'nam5',
  Birthday:'09/01/20015',
  Address:{
    province:'hai duong 25',
    city:'gia loc 25',
    address:'tt gia loc 25'
  },
  Phone:'03925126345',
  Email:'haigl0802@gmail.com5',
  Active:'none25',
  created_at:'none25',
  updated_at:'none25',
  deletet_at:'none25',
},
{
  FirstName:'hai0',
  Lastname:'nguyen0',
  Gender:'nam0',
  Birthday:'09/01/20010',
  Address:{
    province:'hai duong 20',
    city:'gia loc 20',
    address:'tt gia loc 20'
  },
  Phone:'03925126340',
  Email:'haigl0802@gmail.com0',
  Active:'none20',
  created_at:'none20',
  updated_at:'none20',
  deletet_at:'none20',
},
{
  FirstName:'hai6',
  Lastname:'nguyen6',
  Gender:'nam6',
  Birthday:'09/01/20016',
  Address:{
    province:'hai duong 26',
    city:'gia loc 26',
    address:'tt gia loc 26'
  },
  Phone:'03925126346',
  Email:'haigl0802@gmail.com6',
  Active:'none26',
  created_at:'none26',
  updated_at:'none26',
  deletet_at:'none26',
},
{
  FirstName:'hai7',
  Lastname:'nguyen7',
  Gender:'nam7',
  Birthday:'09/01/20017',
  Address:{
    province:'hai duong 27',
    city:'gia loc 27',
    address:'tt gia loc 27'
  },
  Phone:'03925126347',
  Email:'haigl0802@gmail.com7',
  Active:'none27',
  created_at:'none27',
  updated_at:'none27',
  deletet_at:'none27',
},
{
  FirstName:'hai8',
  Lastname:'nguyen8',
  Gender:'nam8',
  Birthday:'09/01/20018',
  Address:{
    province:'hai duong 28',
    city:'gia loc 28',
    address:'tt gia loc 28'
  },
  Phone:'03925126348',
  Email:'haigl0802@gmail.com8',
  Active:'none28',
  created_at:'none28',
  updated_at:'none28',
  deletet_at:'none28',
},
{
  FirstName:'hai9',
  Lastname:'nguyen9',
  Gender:'nam9',
  Birthday:'09/01/20019',
  Address:{
    province:'hai duong 29',
    city:'gia loc 29',
    address:'tt gia loc 29'
  },
  Phone:'03925126349',
  Email:'haigl0802@gmail.com9',
  Active:'none29',
  created_at:'none29',
  updated_at:'none29',
  deletet_at:'none29',
}]
function App() {
  return (
    <div className="App">
      <div className="tieude">
			<div className="tieude-con">Hai<strong>Nguyen</strong></div>
			<div className="wrapper-search">
				<span className="icon"><i className="fa fa-search"></i></span>
				<input type="search" placeholder="Search 5.587.352 values..." id="search" />
        <button type="submit">Submit</button>
			</div>
			<div className="in Login"><a href="*/">Log in</a></div>
			<div className="in Signin"><a href="*/">Sign in</a></div>
			<div className="upgrade"><a href="*/"><strong>Upgrade</strong></a></div>
		</div>
		<ul className="tab">
			<li className="tab-child"><a href="*/">HOME</a></li>
			<li className="tab-child"><a href="*/">VIDEOS</a></li>
			<li className="tab-child"><a href="*/">CATEGORIES</a></li>
			<li className="tab-child"><a href="*/">LIVE</a></li>
			<li className="tab-child"><a href="*/">STAR</a></li>
			<li className="tab-child"><a href="*/">GAMES</a></li>
			<li className="tab-child"><a href="*/">COMMUNITY</a></li>
			<li className="Boss"><a href="*/">Link <strong>Dậy đi không có link đâu ông cháu ơi!!!</strong></a></li>
		</ul>
      <tr>
        <th>Firstname</th>
        <th>Lastname</th>
        <th>Gender</th>
        <th>Birthday</th>
        <th>province</th>
        <th>city</th>
        <th>address</th>
        <th>Phone</th>
        <th>Email</th>
        <th>Active</th>
        <th>created_at</th>
        <th>updated_at</th>
        <th>deletet_at</th>
      </tr>
      {
        data.map((nhanto)=>{
          return(
            <tr>
              <td>{nhanto.FirstName}</td>
              <td>{nhanto.Lastname}</td>
              <td>{nhanto.Gender}</td>
              <td>{nhanto.Birthday}</td>
              <td>{nhanto.Address.province}</td>
              <td>{nhanto.Address.city}</td>
              <td>{nhanto.Address.address}</td>
              <td>{nhanto.Phone}</td>
              <td>{nhanto.Email}</td>
              <td>{nhanto.Active}</td>
              <td>{nhanto.created_at}</td>
              <td>{nhanto.updated_at}</td>
              <td>{nhanto.deletet_at}</td>
            </tr>
        )
        })
      }
    </div>
  );
}

export default App;
