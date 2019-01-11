import { AmbContactModule } from './amb-contact.module';

describe('AmbContactModule', () => {
  let ambContactModule: AmbContactModule;

  beforeEach(() => {
    ambContactModule = new AmbContactModule();
  });

  it('should create an instance', () => {
    expect(ambContactModule).toBeTruthy();
  });
});
