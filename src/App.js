import { useState, useEffect } from 'react';
import axios from 'axios';
import response from './mylist.json'
import './App.css';

function App() {
  const [now, setNow] = useState(0)
  const [count, setCount] = useState(0)
  let time = response[now].playtime.split(':')
  let hour = Number(time[0])
  let min = Number(time[1])
  let full_time = hour * 60 + min

  useEffect(() => {
    const id = setInterval(() => {
      setCount((count) => count + 1);
    }, 1000);

    if (count === full_time) {
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
            if (response[now - 1]) { setNow((now) => now - 1) }
            setCount(0)
          }}>이전곡</button>
          <button onClick={() => {

          }}>재생</button>
          <button onClick={() => {
            const { imgCoord } = this.state;
            clearInterval(this.interval);
            setTimeout(() => {
              this.interval = setInterval(this.changeHand, 100);
            }, 1000);
          }}>정지</button>
          <button onClick={() => {
            if (response[now + 1]) { setNow((now) => now + 1) }
            setCount(0)
          }}>다음곡</button>
          <span>{parseInt(count / 60).toString().padStart(2, "0")}:{(count % 60).toString().padStart(2, "0")} / {response[now].playtime}</span>
        </div>
        <div>
          {response[now].lyric.map(function (a, i) {
            return (
              <div>
                <p>{a.timestamp}{a.text}</p>
              </div>
            )
          })
          }
        </div>
      </div>
      <div className="right">
        {response.map(function (a, i) {
          return (
            <button onClick={() => { 
              setNow(i) 
              setCount(0)
              }}>
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
