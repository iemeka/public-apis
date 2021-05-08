import Form from "./Form";
import "./App.css";
import SearchProvider from "./search/SearchProvider";

export default function App() {
  return (
    <div className="container">
      <SearchProvider>
        <Form />
      </SearchProvider>
      <footer>
        <a href="https://iemeka.github.io">Created by Emeka</a>
      </footer>
    </div>
  );
}
