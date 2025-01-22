// import FaceExpression from "./app/face-expression/FaceExpression"

import QLolaPage from "./app/qlola/QlolaPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>Welcome</h1>
    </div>
  );
}
function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/test-reactjs" element={<QLolaPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
