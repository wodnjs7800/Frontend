import { useState, useEffect } from 'react';
import axios from 'axios';
import response from './mylist.json'
import './App.css';

function App() {
  const [now, setNow] = useState(0)
  const [count, setCount] = useState(0)

  useEffect(() => {
    const id = setInterval(() => {
      setCount((count) => count + 1);
    }, 1000);

    if (count === 10) {
      clearInterval(id);
    }
    return () => clearInterval(id);
  }, [count]);

  return (
    <div className="App">
      <div className='left'>
        <img src={`${process.env.PUBLIC_URL}/images/${response[now].album_image}`} width='450px' height='350px' />
        <div className='text'>
          <h4>title : {response[now].title}</h4>
          <p>singer : {response[now].singer}</p>
          <p>album : {response[now].album}</p>
          <p>genre : {response[now].genre}</p>
          <p>rel_date : {response[now].rel_date}</p>
          <p>playtime : {response[now].playtime}</p>
        </div>
        <div className='bar'>
          <button onClick={() => {
            if (response[now - 1]) { setNow((now)=>now - 1) }
          }}>이전곡</button>
          <button onClick={() => {

          }}>재생</button>
          <button onClick={() => {
            
          }}>정지</button>
          <button onClick={() => {
            if (response[now + 1]) { setNow((now)=>now + 1) }
          }}>다음곡</button>
          <span>{parseInt(count/60).toString().padStart(2, "0")}:{(count%60).toString().padStart(2, "0")} / {response[now].playtime}</span>
        </div>
        <div>
          {response[now].lyric.map((ly)=>{
            <p>ly.text</p>
        })}
        </div>
      </div>
      <div className="right">
        {response.map(function (a, i) {
          return (
            <button onClick={() => { setNow(i) }}>
              <div className="col-md-4">
                <img src={`${process.env.PUBLIC_URL}/images/${a.album_image}`} width="100px" height="100px" />
                <div className='text'>
                  <p>title : {a.title}</p>
                  <p>singer : {a.singer}</p>
                  <p>playtime : {a.playtime}</p>
                </div>
              </div >
            </button>
          )
        })
        }
      </div>
    </div>
  );
}

export default App;
