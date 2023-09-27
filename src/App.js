import './components/calculator.css';
import './components/quotes.css';
import './lauout/layout.css';
import './pages/calculatorpage.css';
import './pages/quotespage.css';
import './pages/home.css';
import {
  createBrowserRouter, Route, createRoutesFromElements, RouterProvider,
} from 'react-router-dom';
import Calpage from './pages/CalculatorPage';
import Quotepage from './pages/Quotespage';
import Home from './pages/Home';
import Layout from './lauout/layout';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Layout />}>
      <Route path="/" element={<Home />} />
      <Route path="/Calculator" element={<Calpage />} />
      <Route path="/Quotes" element={<Quotepage />} />
    </Route>,
  ),
);

export default function App() {
  return <RouterProvider router={router} />;
}
