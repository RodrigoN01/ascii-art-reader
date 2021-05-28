const { test, expect } = require('@jest/globals')
const welcomeMessage = require('../welcomeMessage')

test('displays a welcome message', function () {
  // Arrange
    const expected = "Welcome to the Ascii Art Viewer"

  // Act
    const actual = welcomeMessage()

  // Assert
    expect(actual).toBe(expected)
})