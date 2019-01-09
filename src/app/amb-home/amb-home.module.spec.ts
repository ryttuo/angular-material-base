import { AmbHomeModule } from './amb-home.module';

describe('AmbHomeModule', () => {
  let ambHomeModule: AmbHomeModule;

  beforeEach(() => {
    ambHomeModule = new AmbHomeModule();
  });

  it('should create an instance', () => {
    expect(ambHomeModule).toBeTruthy();
  });
});
