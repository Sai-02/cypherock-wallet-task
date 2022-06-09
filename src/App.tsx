import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
function App() {
  return (
    <div className="">
      <Header />
      <div className="grid grid-cols-12" style={{
        height: "calc( 100vh - 55px )"
      }}>
        <Navbar />
        <div className="p-4 flex items-center justify-center col-span-9 bg-[#0A1018]">
          Good enough
        </div>
      </div>
    </div>
  );
}

export default App;
