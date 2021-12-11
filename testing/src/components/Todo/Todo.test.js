import {render, screen} from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Todo from "./index";

describe("todo testleri", () => {
    let button, input;

    beforeEach(() => {
        render(<Todo />);

        button = screen.getByText("add");
        input  = screen.getByLabelText("Text")
    })

    test('Varsayılan olarak verilen 3 nesne render edilmeli', () => {
        const items = screen.getAllByText(/Item/i);
        
        expect(items.length).toEqual(3)
    })

    test('input ve button dokumanda bulunmalı', () => {
        expect(button).toBeInTheDocument();
        expect(input).toBeInTheDocument();
    });

    test("inputa string girilip butona basılınca listeye eklenmeli", () =>{
        //inputu doldur
        const name = "BERKAY";
        userEvent.type(input, name);

        //butona tıkla
        userEvent.click(button)

        //assertion
        expect(screen.getByText("BERKAY")).toBeInTheDocument();

    })
})