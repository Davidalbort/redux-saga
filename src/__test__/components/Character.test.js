import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render } from "@testing-library/react";
import { Character } from '../../components/Character';

describe('<Character />',() => {
    const dataMock = [
        {
            created: "2017-11-04T18:48:46.250Z",
            gender: "Male",
            id: "1",
            image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
            location: {__typename: 'Location', name: 'Citadel of Ricks'}, 
            name: "Rick Sanchez",
            origin: {__typename: 'Location', dimension: 'Dimension C-137'},
            species: "Human",
            status: "Alive",
        
        }
    ]
    test('Render of component',() => {
        const view = render(<Character character={dataMock} />)
        view.getByText('Rick Sanchez')
    })
});