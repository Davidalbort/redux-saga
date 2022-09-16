import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { fireEvent } from '@testing-library/dom';
import { render } from "@testing-library/react";
import { Button} from '../../components/Button';

describe('<Button />', () =>{
    test('Render to component',() => {
        const view = render(<Button />);
        view.getByText('GENERATE')
    });
    test('Click on button call event handler once',() => {
        const handleMock = jest.fn();
        const view = render(<Button handleClick={handleMock} />)
        fireEvent.click(view.getByText('GENERATE'));
        expect(handleMock).toBeCalledTimes(1);
    });
});