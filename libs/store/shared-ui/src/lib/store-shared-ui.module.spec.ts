import { async, TestBed } from '@angular/core/testing';
import { StoreSharedUiModule } from './store-shared-ui.module';

describe('StoreSharedUiModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [StoreSharedUiModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(StoreSharedUiModule).toBeDefined();
  });
});
