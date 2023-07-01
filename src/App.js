import MyBalance from "./Components/MyBalance";
import SpendingChart from "./Components/SpendingChart";

function App() {
  return (
    <div className="App min-h-screen flex flex-col justify-center items-center gap-y-4 bg-cream">
      <MyBalance></MyBalance>
      <SpendingChart></SpendingChart>
    </div>
  );
}

export default App;
