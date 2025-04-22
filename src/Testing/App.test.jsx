import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import App from './App';


describe("App Component", () => {
  it("renders magnificient monkeys", () => {
    const { container } = render(<App />)
    // since screen does not have the container property, we'll destructure render to obtain a container for this test
    expect(container).toMatchSnapshot()
  })

  it("renders radical rhinos after button click", async () => {
    const user = userEvent.setup()

    render(<App />)
    const button = screen.getByRole('button', {name: 'Click Me'})

    await user.click(button)

    expect(screen.getByRole('heading').textContent).toMatch(/radical rhinos/i)
  })
})


// In the first test, we utilize snapshots to check whether all the nodes render as we expect them to. 
// In the second test, we simulate a click event. 
// Then we check if the heading changed.

// the callback function for the second test is an async one, as we need this in order to await user.click()

// // While Learning:

// Example 1
// describe("App Component Testing", () => {
//   it("renders correct heading", () => {
//     render(<App />)
//     expect(screen.getByRole("heading").textContent).toMatch(/React Testing Library!/i)
//   })
// })

// Example 2

// render(
//   <div>
//     <label htmlFor="example">Example</label>
//     <input id="example" />
//   </div>
// )

// const exampleInput = screen.getByLabelText('Example')

// Example 3

// render(
//   <div>Hello World</div>
// )

// // will find the div
// screen.getByText('Hello World')
// screen.getByText('llo Worl', {exact: false})
// screen.getByText('hello world', {exact: false}) 

// // exact is a percision argument, default is true
// // when exact is false, it matches substrings and ignores case
// // exact has no effect when used with regex or function arguments
// // using regex is better in most cases than using exact

// // regex
// screen.getByText(/World/)
// screen.getByText(/world/i)
// screen.getByText(/^hello world$/i)
// screen.getByText(/Hello W?oRlD/i) // finds Hello World & Hello orld

// // custom function
// screen.getByText((content, element) => content.startsWith('hello'))

// // will not find the div
// screen.getByText((content, element) => {
//   return element.tagName.toLowerCase() === "span" && content.startsWith('Hello')
// }) // Looking for a span instead of a div.