import { FilterPipe } from './filter.pipe';

describe('FilterPipe', () => {
  const fakeArray = [
    {
      name: 'testName1',
      description: 'test description 1'
    },
    {
      name: 'testName2',
      description: 'test description 2'
    },
    {
      name: 'testName3',
      description: 'test description 3'
    },
    {
      name: 'testName4',
      description: 'test description 4'
    },
    {
      name: 'testName5',
      description: 'test description 5'
    }
  ];
  const pipe = new FilterPipe();

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should return full array', () => {
    expect(pipe.transform(fakeArray, { text: '', field: 'name' }).length).toBe(
      fakeArray.length
    );
  });

  it('should return empty array', () => {
    expect(
      pipe.transform(fakeArray, { text: '123sdf', field: 'name' }).length
    ).toBe(0);
  });

  it('should return array with one item', () => {
    expect(pipe.transform(fakeArray, { text: '3', field: 'name' }).length).toBe(1);
  });
});
