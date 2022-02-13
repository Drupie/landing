import React from 'react'
import Header from './components/Header';
import Cards from './components/Cards'
import './Main.css';
function App() {
  return (
  <>
  <Header
  title="Architecs"
  item1="Home"
  item2="Collection"
  item3="About"
  item4="Contact"
  />
  <Cards
  titleCard="Dark interior "
  abstract="Learn more"
  img1="https://firebasestorage.googleapis.com/v0/b/hackerprojects-63840.appspot.com/o/pexels-max-vakhtbovych-6198655.jpg?alt=media&token=412e00d4-49aa-4c74-ba75-b0164ce1f11f"
  img2="https://firebasestorage.googleapis.com/v0/b/hackerprojects-63840.appspot.com/o/pexels-ksenia-chernaya-3965520.jpg?alt=media&token=0fb8c0d3-a2df-4711-8c83-1dd65bba7942"
  img3="https://firebasestorage.googleapis.com/v0/b/hackerprojects-63840.appspot.com/o/1.jpg?alt=media&token=9d42d3c4-6b4d-4ffb-a297-4e28141596d5"
  />
  </>
  );
}

export default App;
