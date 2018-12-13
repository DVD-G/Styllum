import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgmCoreModuleComponent } from './agm-core-module.component';

describe('AgmCoreModuleComponent', () => {
  let component: AgmCoreModuleComponent;
  let fixture: ComponentFixture<AgmCoreModuleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgmCoreModuleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgmCoreModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
