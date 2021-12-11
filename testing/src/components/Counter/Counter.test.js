import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"

import Counter from "./index"

describe("Counter Tests", () => {
    let count, increaseBtn, decreaseBtn;

    beforeEach(() => {
        console.log("testlerden önce bu blok çalışır, her test blokundan önce bu blok çalışır");
        render(<Counter />)
        count = screen.getByText("0");
        increaseBtn = screen.getByText("increase");
        decreaseBtn = screen.getByText("decrease");
    })

    beforeAll(()=>{
        console.log("tüm testlerden önce bir defa çalışır, SONRA çalışmaz");
    })

    afterEach(()=>{
        console.log("hertersten sonra çalışır");
    })

    afterAll(()=>{
        console.log("en son birkere çalışacağım");
    })


    test("increase btn", () => {
        userEvent.click(increaseBtn);
        expect(count).toHaveTextContent("1");
    });
    
    test("decrease btn", () => {
        userEvent.click(decreaseBtn);
        expect(count).toHaveTextContent("-1");
    });
})

