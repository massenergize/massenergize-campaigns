// testing ComboBox component
// import testing library essentials
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import "@testing-library/jest-dom";
import ComboBox from './combo-box';
import { PREFERRED_NAME_OPTIONS } from "../../_mocks/preferred-name-options";

// setup test suite
describe('ComboBox', () => {
  const handleChange = jest.fn();
  let ComboBoxComponent = null;
  // render component before each test
  beforeEach(() => {
    ComboBoxComponent = render(<ComboBox
      onChange={handleChange}
      items={PREFERRED_NAME_OPTIONS}
      value={PREFERRED_NAME_OPTIONS[0].value}
      disabled={false}
      name="preferredName"
      label="Preferred Name"
      placeholder="Select Preferred Name"
      labelPropName={"label"}
      valuePropName={"value"}
      preloaded={false}
    />);
  });

  // setup test
  it('should render', () => {
    const { getByTestId } = ComboBoxComponent;

    // arrange
    const comboBox = getByTestId('combo-box');

    // assert
    expect(comboBox).toBeInTheDocument();
  });

  it('should render the options when toggle button is clicked', async () => {
    const { getByTestId } = ComboBoxComponent;

    // arrange
    const toggleButton = getByTestId('toggle-button');
    expect(toggleButton).toBeInTheDocument();

    await fireEvent.click(toggleButton);

    // check if the options are rendered
    const options = await screen.findAllByTestId('combo-list-item');
    expect(options.length).toBe(9);

  });
})
