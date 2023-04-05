import { Component, OnInit, ViewEncapsulation, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'practice-nx-welcome',
  standalone: true,
  imports: [CommonModule],
  template: ` <h1>Welcome to the app</h1> `,
  styles: [],
  encapsulation: ViewEncapsulation.None,
})
export class NxWelcomeComponent implements OnInit {
  private _host = 'http://localhost:4200/api';
  private _http = inject(HttpClient);

  ngOnInit(): void {
    this._http.get(`${this._host}/cats`).subscribe(console.log);
  }
}
