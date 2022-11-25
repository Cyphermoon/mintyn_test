import Nav from "./components/Nav";
import SideBar from "./components/SideBar";
import StatsSection from "./components/StatsSection";
import { useThemeContext } from "./context/ThemeProvider";

function App() {
  const { navOpened, profileOpened } = useThemeContext()

  return (
    <div className={`w-screen  ${navOpened || profileOpened ? "overflow-hidden h-screen" : "h-full"} md:h-full bg-background pb-10`}>
      <Nav />
      <main className="flex">
        {!profileOpened && <SideBar />}
        {!profileOpened && <StatsSection />}
      </main>
    </div>
  );
}

export default App;
