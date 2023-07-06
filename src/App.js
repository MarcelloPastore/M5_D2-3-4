/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import NavigationBar from "./components/NavigationBar";
import MyFooter from "./components/MyFooter";
import WelcomeHero from "./components/WelcomeHero";
import LatestRelease from "./components/LatestRelease";

import { allBooks, getBooks, isBookLoading} from "./states/booksState";

// red toolkit
import {useDispatch, useSelector} from "react-redux";
import FormComponent from "./components/FormComponent";


const App = () => {
  const dispatch = useDispatch();


  const myBooks = useSelector(allBooks);
  const myBooksLoadingState = useSelector(isBookLoading);


  console.log("redux", myBooks, myBooksLoadingState);
  

  useEffect(() => {
    dispatch(getBooks());
  }, [])
  
  return (
    <>
      <NavigationBar />
      <WelcomeHero />
      <FormComponent />
      <LatestRelease />
      <MyFooter />
    </>
  );
}

export default App;

