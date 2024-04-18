import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxRutificadorComponent } from './ngx-rutificador.component';

describe('NgxRutificadorComponent', () => {
  let component: NgxRutificadorComponent;
  let fixture: ComponentFixture<NgxRutificadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgxRutificadorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NgxRutificadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
