import { render } from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "./provider/ThemeProvider";
import { store } from "./store/store";
import { Provider } from "react-redux";

render(
  <BrowserRouter>
    <Provider store={store}>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </Provider>
  </BrowserRouter>,
  document.getElementById("root")
);
