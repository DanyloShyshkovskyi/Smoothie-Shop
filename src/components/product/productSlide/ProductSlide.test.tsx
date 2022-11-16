export {}

// import {fireEvent, render, screen} from '@testing-library/react'
// import {ProductSlide} from "./ProductSlide";
// import {defaultProduct} from "../../../utils/constants/product.constants";
// import {store} from "../../../store";
// import App from "../../../App";
// import {Provider} from "react-redux";
// import React from "react";
//
// const productSlideProps = {
//     productDetails: defaultProduct,
//     counts: {
//         count: 1,
//         maxCount: 5
//     }
//
// }
//
// const MockProductSlide = () =>
//     <Provider store={store}>
//         <ProductSlide {...{...productSlideProps}}/>
//     </Provider>
//
// const mockOnChange = jest.fn();
//
// test('should show login form', () => {
//     render(<MockProductSlide />)
//     const productMaxCount = screen.getByTestId('productMaxCount')
//     const productPrice = screen.getByTestId('productPrice')
//     const productCount = screen.getByTestId('productCount')
//     const productTitle = screen.getByTestId('productTitle')
//     const productImage = screen.getByTestId('productImage')
//     const productButton = screen.screengetByTestId('productButton')
//
//     // expect(productMaxCount).toBeInTheDocument();
//     fireEvent.click(productButton, {target: {onClick: mockOnChange}});
//     // expect(productButton).toHaveBeenCalled();
//     // expect(productButton).toBeDisabled()
//
//
//     // Events and assertions...
// })