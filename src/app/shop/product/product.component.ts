import { Component, OnInit } from '@angular/core';
import {
  ActivatedRoute,
  Router,
  UrlSegment,
  UrlSegmentGroup,
  UrlTree,
} from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  productId: string = '';
  customData: string = '';
  constructor(private route: ActivatedRoute, private router: Router) {
    // UrlSegment
    const tree: UrlTree = router.parseUrl(router.url);
    const g: UrlSegmentGroup = tree.root.children['primary'];
    const s: UrlSegment[] = g.segments;

    this.productId = s[2].path;
  }

  ngOnInit(): void {
    // Get custom data
    this.customData = this.route.snapshot.data['title'];
  }

  // c = component
  navigateToProduct(url: any, id: any, c: any) {
    this.router.navigate([url, id, c]);
  }
}
