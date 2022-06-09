import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Wallet from "./components/Wallet/Wallet";
function App() {
  return (
    <div className="">
      <Header />
      <div className="grid grid-cols-12" style={{
        height: "calc( 100vh - 55px )"
      }}>
        <Navbar />
        <div className=" col-span-9 bg-[#0A1018]">
          <Wallet/>
        </div>
      </div>
    </div>
  );
}

export default App;
