import { EmailShare } from "./EmailShare"
import { render, screen } from "@testing-library/react"

describe("<EmailShare />", () => {
  const renderEmailShare = () => render(<EmailShare />)

  it("renders without crashing", () => {
    renderEmailShare()
  })
})
