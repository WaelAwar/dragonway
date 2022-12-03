import Text from "./components/animatedText/AnimatedText";
import Counter from "./components/counter";
import MainPage from "./components/main_page";
import Manuals from "./components/manuals";
import Navbar from "./components/navbar";
import Video from "./components/video";

function App() {
  return (
    <>
      <Navbar />
      <Text />
      <Video />
      <MainPage />
      <Counter />
      <Manuals />
    </>
  );
}

export default App;
