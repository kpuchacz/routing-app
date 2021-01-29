import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit, AfterViewInit {

  constructor() {
  }

  @ViewChild('cardToOverlay', {static: true})
  cardToOverlay: ElementRef;

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  ngAfterViewInit() {
    console.log('afterinit');
    setTimeout(() => {
      console.log(this.cardToOverlay.nativeElement.offsetHeight);
    }, 200);
    // tslint:disable-next-line:prefer-const
    let height = this.cardToOverlay.nativeElement.offsetHeight;

    console.log('Height: ' + height);
  }
}

// export class AppComponent implements AfterViewInit {
//   constructor() {
//   }
//
//   @ViewChild('myIdentifier')
//   myIdentifier: ElementRef;
//
//   // tslint:disable-next-line:typedef
//   ngAfterViewInit() {
//     // tslint:disable-next-line:prefer-const
//     let height = this.myIdentifier.nativeElement.offsetHeight;
//
//     console.log('Height: ' + height);
//   }
// }
