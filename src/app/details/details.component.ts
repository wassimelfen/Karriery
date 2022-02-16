import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  data : any = {
    id: "61ec0744b7d678d10a277baf",
    userId: {
    email: "maysakhlifi12@gmail.com",
    photo:
    "https://iupac.org/wp-content/uploads/2018/05/default-avatar.png",
    about:
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A, iste deserunt. Debitis corporis ducimus eligendi nulla, aliquid quia, eos fugit culpa facere omnis alias minus dolore tempora? Minus, maiores ipsa? 3",
    address: "Rue rsaf",
    city: "Bizerte",
    country: "Tunis",
    education: "Data Science ",
    field: "IT",
    firstname: "Mayssa",
    lastname: "Khlifi ",
    phonenumber: "29333337",
    postcode: "7030",
    },
    packId: {
    title: "Executive",
    service: "Professional carreer refactor",
    price: "250",
    type: "Pack",
    },
    status: "0",
    resume:
    "https://firebasestorage.googleapis.com/v0/b/carriery-storage.appspot.com/o/resumes%2Fmaysakhlifi12%40gmail.com%2F1642858244962?alt=media&token=915ccde6-7422-44c9-bb46-7ed7c974f348",
    };
    
  constructor() { }

  ngOnInit(): void {
  }

}
