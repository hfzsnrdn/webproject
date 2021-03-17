import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { ActivatedRoute } from   '@angular/router';
import { LoadingController, NavController, ToastController } from '@ionic/angular';
import { Booking } from 'src/model/booking.mode';

@Component({
  selector: 'app-editbooking',
  templateUrl: './editbooking.page.html',
  styleUrls: ['./editbooking.page.scss'],
})
export class EditbookingPage implements OnInit {

  booking = {} as Booking;
  id: any;
  constructor(
    private actRoute: ActivatedRoute,
    private loadingCtrl: LoadingController,
    private firestore: AngularFirestore,
    private toastCtrl: ToastController,
    private navCtrl: NavController
  ) { 
    this.id = this.actRoute.snapshot.paramMap.get("id");
  }

  ngOnInit() {
    this.getPostById(this.id);
  }

  async getPostById(id: string){
    //show loader
    let loader = this.loadingCtrl.create({
    message: "Please wait..."
    });
    (await loader).present();
    this.firestore.doc("all/" + id)
    .valueChanges()
    .subscribe(data => {
    this.booking.name = data["name"];
    this.booking.contact = data["contact"]
    this.booking.venue = data["venue"];
    this.booking.datemula = data["datemula"];
    this.booking.datetamat = data["datetamat"];
    this.booking.timemula = data["timemula"];
    this.booking.timetamat = data["timetamat"];
    this.booking.reason = data["reason"];
    this.booking.need = data["need"];
    this.booking.status = data["status"]
  });
 //dismiss loader
 (await loader).dismiss();
 }
 async updatePost(booking : Booking){
 if(this.formValidation()) {
 //show loader
 let loader = this.loadingCtrl.create({
 message: "Please wait..."
 });
 (await loader).present();

 try{
 await this.firestore.doc("all/" + this.id).update(booking);
 } catch(e){
 this.showToast(e);
 }
 //dismiss loader
 (await loader).dismiss();

 //redirect to view post page
 this.navCtrl.navigateRoot("booking");
 }
 }
 formValidation(){
if(!this.booking.name){
this.showToast("Enter name");
return false;
}
if(!this.booking.contact){
this.showToast("Enter contact");
return false;
}
if(!this.booking.venue){
this.showToast("Select venue");
return false;
}
if(!this.booking.datemula){
this.showToast("Select start date");
return false;
}
if(!this.booking.datetamat){
this.showToast("Select end date");
return false;
}
if(!this.booking.timemula){
this.showToast("Enter start time");
return false;
}
if(!this.booking.timetamat){
this.showToast("Enter end time");
return false;
}
return true;
}
showToast (message:string){
this.toastCtrl.create({
message: message,
duration: 3000
})
.then(toastData => toastData.present());
}
}

