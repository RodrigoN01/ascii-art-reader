const { test, expect } = require('@jest/globals')
const getAsciiList = require('../getAsciiList')

test('displays a list of filenames from the data folder', function () {
  // Arrange
    const expected = ['kea.txt', 'kiwi.txt', 'mania.txt', 'nikau.txt', 'pohutukawa.txt']

  // Act
    const actual = getAsciiList(dataPath)

  // Assert
    expect(actual).toBe(expected)
})