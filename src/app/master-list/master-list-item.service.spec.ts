import { TestBed } from '@angular/core/testing';

import { MasterListItemService } from './master-list-item.service';

describe('MasterListItemService', () => {
  let service: MasterListItemService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MasterListItemService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
