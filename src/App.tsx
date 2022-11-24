import Nav from "./components/Nav";
import SideBar from "./components/SideBar";
import StatsSection from "./components/StatsSection";
import { useThemeContext } from "./context/ThemeProvider";

function App() {
  const { navOpened } = useThemeContext()

  return (
    <div className={`w-screen ${navOpened ? "overflow-hidden h-screen" : "h-full"} md:h-full bg-background pb-10`}>
      <Nav />
      <main className="flex">
        <SideBar />
        <StatsSection />
      </main>
    </div>
  );
}

export default App;
