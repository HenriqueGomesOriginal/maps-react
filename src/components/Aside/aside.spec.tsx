import { render, waitFor } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import userEvent from "@testing-library/user-event";

// Assets
import Dashboard from "../Dashboard";
import { defaultTheme } from "../../themes/theme";

/**
 * Aside component tests
 */

describe("Aside InputText", () => {
  it("should render array of inputs", () => {
    const { getAllByTestId, getByTestId } = render(
      <ThemeProvider theme={defaultTheme}>
        <Dashboard />
      </ThemeProvider>
    );

    // See if initial is two input text
    const arr = getAllByTestId("input-aside");
    expect(arr.length).toBe(2);

    // If add more input text
    const button = getByTestId("button-aside");

    userEvent.click(button);
    expect(getAllByTestId("input-aside").length).toBe(3);
  });
});

// Get results from API
// describe("Result from API", () => {
//   it("should get result from API", async () => {
//     const { getByTestId, getAllByTestId } = render(
//       <ThemeProvider theme={defaultTheme}>
//         <Dashboard />
//       </ThemeProvider>
//     );

//     const arr = getAllByTestId("input-aside");

//     const button = getByTestId("submit-aside");
//     userEvent.click(button);

//     await waitFor(async () => {
//       expect(getByTestId("home-div")).toBeInTheDocument();
//     });
//   });
// });
