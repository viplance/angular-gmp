import { DurationPipe } from './duration.pipe';

describe('DurationPipe', () => {
  const pipe = new DurationPipe();

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('transform 0', () => {
    expect(pipe.transform(0)).toBe('');
  });

  it('transform 45', () => {
    expect(pipe.transform(45)).toBe('45min');
  });

  it('transform 60', () => {
    expect(pipe.transform(60)).toBe('1h');
  });

  it('transform 130', () => {
    expect(pipe.transform(130)).toBe('2h 10min');
  });
});
