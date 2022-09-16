import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from "@testing-library/react";
import { Header } from '../../containers/Header';

describe('<Header />', () =>{
    test('Render of component', () =>{
        const view = render(<Header />);
        view.getByText('Redux-Saga')
    });
});