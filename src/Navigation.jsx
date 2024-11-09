import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeView from "./pages/HomeView";
import NotFound from "./pages/NotFound";
import WindowView from "./pages/WindowView";
import Layout from "./pages/Layout";

export default function Navigation() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" index element={<HomeView />} />
        <Route path="*" element={<NotFound />} />
        <Route
          path="google"
          element={
            <WindowView>
              <iframe className="w-full h-full rounded-[90px]" src="https://www.bing.com/search?q=dogs"></iframe>
            </WindowView>
          }
        /> */}

        <Route path="/" element={<Layout />}>
          <Route index element={<HomeView />} />
          <Route path="*" element={<NotFound />} />
          <Route
            path="google"
            element={
              <WindowView>
                <iframe
                  className="w-full h-full rounded-[90px]"
                  src="https://www.bing.com/search?q=dogs"
                ></iframe>
              </WindowView>
            }
          />

          <Route
            path="whatsapp"
            element={
              <WindowView>
                <iframe
                  className="w-full h-full rounded-[90px]"
                  src="https://www.linkedin.com/in/kevin-león-242891217/"
                ></iframe>
              </WindowView>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
