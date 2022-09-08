import { render, waitFor, screen } from "@testing-library/react";
import axios from "axios";
import Todos from "./Api"

jest.mock("axios");

const data = [
    {
    userId: 1,
    id: 1,
    title: "todo 1",
    completed: false,
    },
    {
    userId: 1,
    id: 2,
    title: "todo 2",
    completed: false,
    },
    {
    userId: 1,
    id: 3,
    title: "todo 3",
    completed: false,
    },
];

describe("Test API", () => {
    test("Api testing", async () => {
        axios.get.mockResolvedValue({ data: data });
        render(<Todos/>);

        const todos = await waitFor(() => screen.findAllByTestId("todo"));
        expect(todos).toHaveLength(3);
    });
})