import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { AuthService } from '../shared/auth.service';

@Component({
  selector: 'rb-protected',
  templateUrl: './protected.component.html',
  styleUrls: ['./protected.component.css']
})
export class ProtectedComponent implements OnInit {
  // id: string;

  constructor(private authService: AuthService, private router: Router, private activatedRoute: ActivatedRoute) {
    // this.id = authService.getUserInfo();
    // console.log(this.id);
  }

  ngOnInit() {
  }

}
