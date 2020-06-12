import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AfficherClientComponent } from './afficher-client.component';

describe('AfficherClientComponent', () => {
  let component: AfficherClientComponent;
  let fixture: ComponentFixture<AfficherClientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AfficherClientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AfficherClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
