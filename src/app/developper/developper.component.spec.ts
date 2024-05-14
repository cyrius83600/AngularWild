import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevelopperComponent } from './developper.component';

describe('DevelopperComponent', () => {
  let component: DevelopperComponent;
  let fixture: ComponentFixture<DevelopperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DevelopperComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DevelopperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
