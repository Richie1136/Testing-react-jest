# Learning Jest with React

# expect assertion function matches used in my language_spoken.test file

.ToEqual - Used to perform deep equality checks between objects .toBe - Similar to .toEqual() but is used to compare.
primitive values(String, Number Boolean, etc..). .toContain - Used when we want to verify that an item is in an array.
.toBeTruthy - Is used to verify whether a value is truthy or not. .not.toBeDefined - Used to verify that a position is
NOT defined, in this case im verfifing that actualValue[3] is NOT defined.

done() - Jest will wait until the done callback is called before it finishes the test.

## Testing with a real REST API is not ideal for a few reasons

We aren't concerned about whether the third-party API works. Instead, we only care about whether or not the function
that perfomrs the API calls works.

Incorporating REST API calls into our tests can create fragile tests that may fail simply due to network issues.

If we were interacting with a production-grade database, we could accidentally alter offical data.

## Mocks

A safer and more efficient way to write our tests would be to create mock functions that bypasses the API call and
returns values that we control instead.

To mock a file and the apiRequest() function, we might write something like this

const apiRequest = jest.fn(() => { return Promise.resolve({ status: '', data: {} }) })

export default apiRequest

## Mock Module Methods

One of the methods is mockFunction.mockResolvedValueOnce() - which accepts a value that the next call to mockFunction()
will resolve to.
