import Calculator from './components/Calculator';
import './components/calculator.css';
import ShowQuotes from './components/ShowQuotes';
import './components/quotes.css';

export default function App() {
  return (
    <div>
      <Calculator />
      {' '}
      <ShowQuotes />
    </div>
  );
}
