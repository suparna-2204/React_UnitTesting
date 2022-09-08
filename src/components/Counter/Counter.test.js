import { render, screen, fireEvent } from "@testing-library/react"
import Counter from "./Counter"

describe("Test counter component", () => {
    test("renders two buttons on the page", async () => {
        render(<Counter/>);
    
        const count = screen.getByTestId("count");
        const buttons = await screen.findAllByRole("button");
    
        expect(buttons).toHaveLength(2);
        expect(count).toBeInTheDocument();
    });

    test("interacts with respect to buttons", async () => {
        render(<Counter/>);
        
        const increase = screen.getByTestId("increment");
        const decrease = screen.getByTestId("decrement");
        
        fireEvent.click(increase);
        fireEvent.click(decrease);
    });

    test("count should not be null", async () => {
        render(<Counter/>);
        
        const countType = screen.getByTestId("count");
        
        expect(countType).not.toEqual(null);
    });

    // test("count should only be number", async () => {
    //     render(<Counter/>);
        
    //     const countType = screen.getByTestId("count");
        
    //     expect(typeof countType).toBe("number");
    // });
})