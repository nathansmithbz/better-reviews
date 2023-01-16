import "./App.css";
import Form from "./components/Form";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { Paper } from "@mui/material";



function App() {
  return (
    <div className="App">
      <Paper>
      <Header/>
        <Form />
        {/* <Footer /> */}
      </Paper>
    </div>
  );
}

export default App;
