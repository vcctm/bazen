import { NextUIProvider } from "@nextui-org/react";
import { Typography } from "./components";
import theme from "./theme/theme";

function App() {
  return (
    <NextUIProvider theme={theme}>
      <Typography text="something" />
    </NextUIProvider>
  );
}

export default App;
