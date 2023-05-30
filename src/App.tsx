import { Provider } from "react-redux";
import { store } from "./components/store/store";
import { FormikForm } from "./components/form";
import { TblUsers } from "./components/tblUsers/tblUsers";

function App() {

  return (
    <Provider store={store}>
      <div>
        <FormikForm />
        <TblUsers/>
      </div>
    </Provider>
  );
}

export default App;
