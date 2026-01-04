import "./App.css";
import DisplayCounter from "./components/DisplayCounter";
import Header from "./components/Header";
import Container from "./components/Container";
import ButtonsContainer from "./components/ButtonsContainer";
import PrivacyMessage from "./components/PrivacyMessage";
import { useSelector } from "react-redux";

function App() {
  const privacy = useSelector((state) => state.privacy);
  return (
    <>
      <center className="px-4 py-5 my-5 text-center">
        <Container>
          <Header></Header>
          <div className="col-lg-6 mx-auto">
            {privacy ? <PrivacyMessage /> : <DisplayCounter />}
            <ButtonsContainer />
          </div>
        </Container>
      </center>
    </>
  );
}

export default App;
