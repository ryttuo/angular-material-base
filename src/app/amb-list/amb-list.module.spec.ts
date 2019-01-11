import { AmbListModule } from './amb-list.module';

describe('AmbListModule', () => {
  let ambListModule: AmbListModule;

  beforeEach(() => {
    ambListModule = new AmbListModule();
  });

  it('should create an instance', () => {
    expect(ambListModule).toBeTruthy();
  });
});
