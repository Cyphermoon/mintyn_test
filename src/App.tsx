import Nav from "./components/Nav";
import SideBar from "./components/SideBar";

function App() {
  return (
    <div className="w-screen h-screen overflow-hidden bg-background text-gray-700: pb-10">
      <Nav />
      <main>
        <SideBar />
      </main>
    </div>
  );
}

export default App;
