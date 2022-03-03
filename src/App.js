//default imports
import './App.css';

//router
import { BrowserRouter, Routes, Route } from "react-router-dom";

//Components
import A_boilerplate from './components/A_boilerplate.js';
import B_JSX_javascript from './components/B_JSX_javascript.js';
import C_styling from './components/C_styling.js';
import D_bootstrap from './components/D_bootstrap';
import E_navbar from './components/E_navbar'
import F_footer from './components/F_footer'

//pages
import G_tutorial1 from './pages/G_tutorial1';
import H_portfolioContent1 from './pages/H_portfolioContent1';
import I_portfolioContent2 from './pages/I_portfolioContent2';
import J_portfolioContent3 from './pages/J_portfolioContent3';
import K_portfolioContent4 from './pages/K_portfolioContent4';
import L_portfolioContent5 from './pages/L_portfolioContent5';
import M_portfolioContent6 from './pages/M_portfolioContent6';

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<E_navbar />}>
          <Route path="g_tutorial1" element={<G_tutorial1 />} />
          <Route path="h_portfolioContent1" element={<H_portfolioContent1 />}/>
          <Route path="i_portfolioContent2" element={<I_portfolioContent2/>}/>
          <Route path="j_portfolioContent3" element={<J_portfolioContent3/>}/>
          <Route path="k_portfolioContent4" element={<K_portfolioContent4/>}/>
          <Route path="l_portfolioContent5" element={<L_portfolioContent5/>}/>
          <Route path="m_portfolioContent6" element={<M_portfolioContent6/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
    <F_footer/>
    </>
  );
}

export default App;
