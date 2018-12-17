import { Component, OnInit } from '@angular/core';
import { ASSETS } from 'src/app/shared/constants/assets';

@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.scss']
})
export class LogoComponent implements OnInit {
  logo: string = ASSETS.LOGO;
  constructor() { }

  ngOnInit() {
  }

}
