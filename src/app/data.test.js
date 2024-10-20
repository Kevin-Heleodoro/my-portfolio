const { getData, setData } = require('./data');

test('getData should return the correct data', () => {
  // Test case 1
  const result1 = getData();
  expect(result1).toEqual('some data');

  // Test case 2
  const result2 = getData(1);
  expect(result2).toEqual('some other data');
});

test('setData should update the data correctly', () => {
  // Test case 1
  const newData1 = 'new data';
  setData(newData1);
  expect(getData()).toEqual(newData1);

  // Test case 2
  const newData2 = 'another new data';
  setData(newData2);
  expect(getData()).toEqual(newData2);
});
