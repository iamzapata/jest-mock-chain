import React from "react"
import { EmailShare } from "./EmailShare"
import { render, screen } from "@testing-library/react"

jest.mock("./useEmailShare.ts", () =>
  jest
    .fn()
    .mockImplementationOnce(() => [
      { name: "Andres" },
      { isLoading: false },
      { error: null },
    ])
    .mockImplementationOnce(() => [
      { name: "Andres" },
      { isLoading: true },
      { error: null },
    ])
    .mockImplementationOnce(() => [
      undefined,
      { isLoading: true },
      { error: null },
    ])
    .mockImplementationOnce(() => [
      { name: "Andres" },
      { isLoading: false },
      { error: new Error("I Broke!") },
    ])
)

describe("<EmailShare />", () => {
  const renderEmailShare = () => render(<EmailShare />)

  it("renders", () => {
    renderEmailShare()

    expect(screen.queryByText("Hello, Andres!")).toBeTruthy()
  })

  it("does not render if loading true", () => {
    renderEmailShare()

    expect(screen.queryByText("Hello, Andres!")).toBeNull()
  })

  it("does not render if user is undefined", () => {
    renderEmailShare()

    expect(screen.queryByText("Hello, Andres!")).toBeNull()
  })

  it("renders error message", () => {
    renderEmailShare()

    expect(screen.queryByText("Oops! Nothing to see here!")).toBeTruthy()
  })
})
