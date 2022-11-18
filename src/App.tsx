import Nav from "./components/Nav";
import SideBar from "./components/SideBar";
import StatsSection from "./components/StatsSection";
import React from "react"

function App() {
  return (
    <div className="w-screen h-full bg-background text-gray-500: pb-10">
      <Nav />
      <main className="flex">
        <SideBar />
        <StatsSection />
      </main>
    </div>
  );
}

export default App;
