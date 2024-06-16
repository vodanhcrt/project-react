import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import DefaultLayouts from "./layouts/DefaultLayouts";
import HomePage from "./pages/HomePage";
import PopularPage from "./pages/PopularPage";
import PlayingPage from "./pages/PlayingPage";
import NoPage from "./pages/NoPage";

const queryClient = new QueryClient();

function App() {

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Routes>
              <Route path='/' element= { <DefaultLayouts />}>
                  <Route index element =  { <HomePage />} />
                  <Route path ='/popular-movie' element = { <PopularPage /> } />
                  <Route path='/now-playing' element = { <PlayingPage />} />
                  <Route path='*' element = { <NoPage />} />
              </Route>
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
    </>
  )
}

export default App
