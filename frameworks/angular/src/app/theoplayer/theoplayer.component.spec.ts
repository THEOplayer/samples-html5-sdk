import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TheoplayerComponent } from './theoplayer.component';

describe('TheoplayerComponent', () => {
  let component: TheoplayerComponent;
  let fixture: ComponentFixture<TheoplayerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TheoplayerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TheoplayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
