import ColorHarmonizer from "./components/ColorHarmonizer"
import ContrastChecker from "./components/ContrastChecker"
import GeometricColor from "./components/GeometricColor"
import RandomGeometricColor from "./components/RandomGeometricColor"
import TetrahedronColor from "./components/TetrahedronColor"

function App() {

  return (
    <div className="App">
      <h1>clase de teoria del color con React</h1>
      <ColorHarmonizer />
      <hr />
      
      <ContrastChecker />
      <hr />

      <GeometricColor />
      <hr />

      <RandomGeometricColor />
      <hr />

      <TetrahedronColor />
    </div>
   
  )
}

export default App
