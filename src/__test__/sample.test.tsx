import { render } from "@testing-library/react";
import { Sample } from 'app/components/Sample'

describe('<Sample/> ', () => {

  const { getByText } = render(<Sample/>)
  const sampleElement = getByText(/in sample area/i)

  test('check login func in Sample', () => {
    expect(sampleElement).toBeInTheDocument()
  })
});
