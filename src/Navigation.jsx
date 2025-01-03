import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeView from "./pages/HomeView";
import NotFound from "./pages/NotFound";
import WindowView from "./pages/WindowView";
import Layout from "./pages/Layout";
import Information from "./pages/Information";
import { INFO } from "./constants";

export default function Navigation() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/portfolio" element={<Layout />}>
          <Route index element={<HomeView />} />
          <Route path="*" element={<NotFound />} />

          <Route
            path="bing"
            element={<WindowView url={"https://www.bing.com/search?q=dogs"} />}
          />

          <Route
            path="tools"
            element={
              <WindowView>
                <Information content={INFO[0].description} />
              </WindowView>
            }
          />

          <Route
            path="work"
            element={
              <WindowView>
                <Information content={INFO[1].description} />
              </WindowView>
            }
          />

          <Route
            path="info"
            element={
              <WindowView>
                <Information content={INFO[2].description} />
              </WindowView>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
