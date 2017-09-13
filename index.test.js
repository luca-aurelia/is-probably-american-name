const isName = require('is-probably-american-name')
const kindOf = require('kind-of')

describe('isProbablyAmericanName', () => {
  const knownName = 'mary'
  it('should be a function', () => {
    expect(isName).toBeInstanceOf(Function)
  })
  it("should return false if it's called with no arguments", () => {
    expect(isName()).toEqual(false)
  })
  it("should throw an error if it's passed something besides a string", () => {
    expect(() => isName(42)).toThrowErrorMatchingSnapshot()
    expect(() => isName({ answer: 42 })).toThrowErrorMatchingSnapshot()
  })
  it('should return a boolean if called with a string', () => {
    expect(kindOf(isName('mary'))).toEqual('boolean')
  })
  it('should return true if called with a common name', () => {
    expect(isName(knownName)).toEqual(true)
  })
  it('should return false if called with a non-name string', () => {
    const question = 'What do you get if you multiply six by nine?'
    expect(isName(question)).toEqual(false)
  })
  it('should ignore the case of its arguments', () => {
    const lower = isName(knownName.toLowerCase())
    const upper = isName(knownName.toUpperCase())
    expect(lower).toEqual(upper)
  })
})
