import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageActualiteesComponent } from './page-actualitees.component';

describe('PageActualiteesComponent', () => {
  let component: PageActualiteesComponent;
  let fixture: ComponentFixture<PageActualiteesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageActualiteesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageActualiteesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
