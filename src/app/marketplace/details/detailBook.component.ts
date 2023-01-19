import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-detail-book',
  templateUrl: './detailBook.component.html',
})
export class DetailBookComponent implements OnInit {
  @Input() idBook: string | null | undefined;
  count: number;

  constructor(private route: ActivatedRoute, private router: Router) {
    this.count = 0;
  }

  ngOnInit(): void {
    this.idBook = this.route.snapshot.paramMap.get('id');
    this.count = Number(this.idBook);
    console.log('HAHAH');
  }

  handleId() {
    this.router.navigate(['/marketplace', this.idBook, 'getid']);
  }

  increaseVal() {
    this.count = this.count + 1;
  }
}
