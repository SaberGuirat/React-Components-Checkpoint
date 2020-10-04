import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import Card from "./Components/Profile/Card";
function App() {
  return (
    <>
      <Navbar />
      <main className="container">
        <Card />
      </main>
      <Footer />
    </>
  );
}

export default App;
