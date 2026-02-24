import { Component, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DataService } from './services/data.service';

@Component({
  selector: 'app-root',
  standalone: true,
  //imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrls: ['./app.scss']
})
export class App implements OnInit {
  protected readonly title = signal('cyber-sentinel');
  serverTime = signal<string>('');  // usamos signal para reactividad

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.getServerTime().subscribe({
      next: (data) => this.serverTime.set(data.server_time),
      error: (err) => console.error('Error fetching server time:', err)
    });
  }
}