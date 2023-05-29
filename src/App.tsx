import { Provider } from "react-redux";
import { store } from "./components/store/store";
import { FormikForm } from "./components/form";

function App() {

  return (
    <Provider store={store}>
      <div>
        <FormikForm />
      </div>
    </Provider>
  );
}

export default App;
