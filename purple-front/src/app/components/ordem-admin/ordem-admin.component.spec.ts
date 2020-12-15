import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdemAdminComponent } from './ordem-admin.component';

describe('OrdemAdminComponent', () => {
  let component: OrdemAdminComponent;
  let fixture: ComponentFixture<OrdemAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrdemAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdemAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
