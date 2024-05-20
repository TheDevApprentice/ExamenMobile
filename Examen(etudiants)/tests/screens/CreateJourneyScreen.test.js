import CreateJourneyScreen from '../../screens/CreateJourneyScreen';
import React from "react";
import { render, fireEvent, screen } from "@testing-library/react-native"; 

describe("BtnItemTripAdd on click", () =>{
    it("Save but not all informations correct", () =>{
        const setState = jest.fn(); 
        jest.spyOn(React, "useState")
        .mockImplementationOnce(()=> [[], setState])
        .mockImplementationOnce(()=> ["trip", ()=>null]);
        render(<CreateJourneyScreen/>);  // si on a des props on peut les passer aussi. 
        fireEvent.changeText(screen.getByPlaceholderText("Voyage a Rome"), "");
        fireEvent.changeText(screen.getByPlaceholderText("Date de départ"), "");
        fireEvent.press(screen.getByTestId("btnAddTrip")); 
        expect(window.alert.mock.calls.length).toBe(1);
    }) 
})