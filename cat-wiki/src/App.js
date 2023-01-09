import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Menu from "./components/Menu";
import BreedPage from "./pages/BreedPage";
import FavouritesPage from "./pages/FavouritesPage";
import Mainpage from "./pages/Mainpage";

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Menu></Menu>
				<Routes>
					<Route path="/" exact element={<Mainpage></Mainpage>} />
					<Route path="/mostSearched" exact element={<FavouritesPage></FavouritesPage>} />
					<Route path="/breed" exact element={<BreedPage></BreedPage>} />
				</Routes>
				<Footer></Footer>
			</BrowserRouter>
		</div>
	);
}

export default App;
