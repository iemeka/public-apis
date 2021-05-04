import Form from "./Form";
import "./App.css";
import SearchProvider from './search/SearchProvider';

export default function App() {
  return (
    <div className="container">
      <SearchProvider>
        <Form />
      </SearchProvider>
    </div>
  );
}
