import Form from "./Form";
import "./App.css";
import CategoryProvider from "./category/CategoryProvider";

export default function App() {
  return (
    <div className="container">
      <CategoryProvider>
        <Form />
      </CategoryProvider>
    </div>
  );
}
