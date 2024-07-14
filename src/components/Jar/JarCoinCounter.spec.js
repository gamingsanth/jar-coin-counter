import { render } from "@testing-library/react";
import JarCoinCounter from "./JarCoinCounter.js";

test('should render the counter', () => {
    const { getByText } = render(<JarCoinCounter />);
    const counterText = getByText("0");

    expect(counterText).toBeInTheDocument();
});

test('should render the increment button', () => {
    const { getByRole } = render(<JarCoinCounter />);
    const buttonElement = getByRole('button', { name : "Increment" });

    expect(buttonElement).toBeInTheDocument();
});

test('should render the jar component', () => {
    const { getByRole } = render(<JarCoinCounter />);
    const buttonElement = getByRole('button', { name : "Increment" });

    expect(buttonElement).toBeInTheDocument();
});