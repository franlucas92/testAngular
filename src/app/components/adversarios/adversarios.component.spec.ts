import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdversariosComponent } from './adversarios.component';

describe('AdversariosComponent', () => {
  let component: AdversariosComponent;
  let fixture: ComponentFixture<AdversariosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdversariosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdversariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
