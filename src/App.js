import React from 'react';
import './App.css';
import requests from './request';
import Row from './Row';

function App() {
  return (
    <div className="App">
      <h1>Netflix Clone Built with React!</h1>
      <Row title="NETFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow={true}
      />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending}
        isLargeRow={false}
      />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated}
        isLargeRow={false}
      />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies}
        isLargeRow={false}
      />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies}
        isLargeRow={false}
      />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies}
        isLargeRow={false}
      />
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies}
        isLargeRow={false}
      />
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries}
        isLargeRow={false}
      />
    </div>
  );
}

export default App;
