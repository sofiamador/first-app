import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LoggingService } from '../../services/logging.service';

@Component({
  selector: 'app-home-demo',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './home-demo.component.html',
  styleUrl: './home-demo.component.css'
})
export class HomeDemoComponent implements OnInit {
  constructor(private loggingService: LoggingService) {}

  ngOnInit() {
    this.loggingService.log('Home Component initialized');
  }
 

}
