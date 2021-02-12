import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from '@testing-library/user-event';
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    render(<CheckoutForm/>)
    const header = screen.queryByText( /checkout form/i );
    expect( header ).toBeInTheDocument();
});

test("form shows success message on submit with form details", async () => {
    render(<CheckoutForm/>);

    const firstNameInput = screen.getByLabelText( /first name:/i );
    const lastNameInput = screen.getByLabelText( /last name:/i );
    const addressinput = screen.getByLabelText( /address:/i );
    const cityInput = screen.getByLabelText( /city:/i );
    const stateInput = screen.getByLabelText( /state:/i );
    const zipInput = screen.getByLabelText( /zip:/i );
    const btn = screen.getByTestId( /button/i );

    userEvent.type( firstNameInput, 'Terry' )
    userEvent.type( lastNameInput, 'Brown' )
    userEvent.type( addressinput, 'rosehill rd' )
    userEvent.type( cityInput, 'columbus' )
    userEvent.type( stateInput, 'ohio' )
    userEvent.type( zipInput, '43204' )
    userEvent.click(btn);

    expect( firstNameInput ).toHaveValue( 'Terry' );
    expect( lastNameInput ).toHaveValue( 'Brown' );
    expect( addressinput ).toHaveValue( 'rosehill rd' );
    expect( cityInput ).toHaveValue( 'columbus' );
    expect( stateInput ).toHaveValue( 'ohio' );
    expect( zipInput ).toHaveValue( '43204' );

    const msg = await screen.getByTestId( 'successMessage' );
    expect( msg ).toBeInTheDocument();
    

});
