import Header from "./components/layouts/Header.jsx";
import Footer from "./components/layouts/Footer.jsx";

const App = () => {
  return (
    <div className="App">
      <Header />

      {/* Main content */}
      <main className="pt-20">
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-6xl font-bold text-gray-900 mb-4">
              UI/UX Portfolio
            </h1>
            <p className="text-xl text-gray-600">
              Layout components are ready.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default App;
