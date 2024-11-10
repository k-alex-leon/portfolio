import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeView from "./pages/HomeView";
import NotFound from "./pages/NotFound";
import WindowView from "./pages/WindowView";
import Layout from "./pages/Layout";
import Gallery from "./pages/Gallery";

export default function Navigation() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomeView />} />
          <Route path="*" element={<NotFound />} />
          <Route
            path="bing"
            element={<WindowView url={"https://www.bing.com/search?q=dogs"} />}
          />
          <Route
            path="cube"
            element={
              <WindowView
                url={"https://k-alex-leon.github.io/3d-react-rubikcube/"}
              />
            }
          />
          <Route
            path="tetris"
            element={
              <WindowView
                url={"https://k-alex-leon.github.io/tetris-react-project/"}
              />
            }
          />
          <Route
            path="gallery"
            element={
              <WindowView>
                <Gallery />
              </WindowView>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
