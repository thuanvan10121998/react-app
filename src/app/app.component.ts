import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { fromEvent, Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    // const btn = document.querySelector('#btn');
    // const input = document.querySelector('#input');

    // output (example): MouseEvent {...}
    // complete: không có gì log.
    // fromEvent(btn, 'click').subscribe(observer);

    // output (example): KeyboardEvent {...}
    // complete: không có gì log.
    // fromEvent(input, 'keydown').subscribe(observer);
    // fromEvent(document, 'click');
  }

}
