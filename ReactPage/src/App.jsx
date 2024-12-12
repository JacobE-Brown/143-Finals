import Home from "./components/Home";
import NavigationBar from "./components/NavigationBar";

function App() {
    return (
        <>
            <div className="h-screen bg-zinc-600">
                <NavigationBar />
                <Home />
            </div>
        </>
    );
}

export default App;
