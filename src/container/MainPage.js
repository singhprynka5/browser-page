import React, { useState } from 'react';
import Header from '../component/Header';
import ViewComponent from '../component/ViewComponent';

function MainPage() {
  const [inputOne, changeInputOne] = useState("");
  const [inputTwo, changeInputTwo] = useState("");

  return (
    <>
      <Header changeInputOne={changeInputOne} changeInputTwo={changeInputTwo} />
      <ViewComponent inputOne={inputOne} inputTwo={inputTwo} />
    </>
  );
}

export default MainPage;