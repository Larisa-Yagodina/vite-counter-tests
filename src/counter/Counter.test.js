import React from 'react';
import {render, screen} from "@testing-library/react";
import Counter from "./Counter.jsx";

describe('Counter', () => {
    test('render', () => {
        render(<Counter initialCounter={2} />)
        const valueCounter = Number(screen.getByTestId('counterValue').textContent)
        expect(valueCounter).toBe(2)
    })
})
