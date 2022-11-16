import {fireEvent, render, screen} from '@testing-library/react'
import {Provider} from "react-redux";
import React from "react";
import Modal from "./modal";
import {store} from "../../store";

const MockModal = () =>
    <Provider store={store}>
        <Modal />
    </Provider>

const mockOnChange = jest.fn();

test('should show login formmmm', () => {
    render(<MockModal />)
    const modalContainer = screen.getByTestId('modalContainer')
    const modalContainerStyle = window.getComputedStyle(modalContainer)
    const modalVeil = screen.getByTestId('modalVeil')
    const modalDialog = screen.getByTestId('modalDialog')

    // expect(productMaxCount).toBeInTheDocument();
    expect(modalContainerStyle.visibility).toHaveStyleRule('hidden');
    fireEvent.click(modalVeil);
    console.log(modalContainerStyle.visibility)
    expect(modalContainerStyle.visibility).not.toBe('hidden');

    // expect(productButton).toBeDisabled()


    // Events and assertions...
})