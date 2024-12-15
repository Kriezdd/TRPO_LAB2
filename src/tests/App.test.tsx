import "@vitest/browser/matchers.d.ts";
import "@testing-library/jest-dom/matchers"
import { render, screen } from '@testing-library/react'
import App from '../App'
import {expect} from "vitest";

beforeAll(() => void render(<App />))

describe('App', () => {
  it('renders the App component', () => {
    render(<App />)
  })
  it('button increments', async () => {
    const {getByText, getByRole} = render(<App />)
    await expect(getByText(/Счётчик: 0/i)).toBeInTheDocument()
    await getByRole('button', {name: '+'}).click()
    await expect(getByText(/Счётчик: 1/i)).toBeInTheDocument()
  })
})