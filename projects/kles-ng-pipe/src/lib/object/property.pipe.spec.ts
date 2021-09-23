import { PropertyPipe } from './property.pipe';

describe('PropertyValuePipe', () => {
  let pipe: PropertyPipe;

  beforeEach(() => {
    pipe = new PropertyPipe();
  });

  const value = {
    a: 1,
    b: 2,
    c: 3,
  };

  it("should return the value of the object's property b", () => {
    expect(pipe.transform(value, 'b')).toEqual(2);
  });
});
