import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-third',
  templateUrl: './third.component.html',
  styleUrls: ['./third.component.css']
})
export class ThirdComponent implements OnInit {
input = '';
data = [];
i = false;
arr = [];
found: boolean;
toggle = true;
  constructor(private httpClient: HttpClient) { }
  onNameKeyUp(event: any) {

    this.input = event.target.value;
    this.found = false;
  }
  getProfile() {
    this.httpClient.get('http://universities.hipolabs.com/search?country=' + this.input)
.subscribe((data: any []) => {
if (data.length) {
  this.data = data ;
  this.found = true;
}
});
  }
  togle(){
    this.toggle = !this.toggle;
  }
  checkbox(i: any)
  {
    this.i = !this.i;
    if (this.i === true) {
    this.arr.push(i);
    }
  }
  ngOnInit() {
  }

}
