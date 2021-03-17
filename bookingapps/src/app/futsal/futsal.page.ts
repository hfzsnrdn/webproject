import { Component, OnInit } from '@angular/core';
import { AngularFirestore} from '@angular/fire/firestore';
import { LoadingController, NavController, ToastController } from '@ionic/angular';
import { Booking } from 'src/model/booking.mode';

@Component({
  selector: 'app-futsal',
  templateUrl: './futsal.page.html',
  styleUrls: ['./futsal.page.scss'],
})
export class FutsalPage implements OnInit {

  booking = {} as Booking;
 constructor(
 private toastCtrl: ToastController,
 private loadingCtrl: LoadingController,
 private navCtrl: NavController,
 private firestore: AngularFirestore
 
 ) {}
 ngOnInit() {}
 async createPost(booking : Booking){
 if(this.formValidation()) {
 //show loader
 let loader = this.loadingCtrl.create({
 message: "Please wait..."
 });
 (await loader).present();
 try{
  this.booking.status="pending";
  await this.firestore.collection("all").add(booking);
}catch(e){
this.showToast(e);
}
//dismiss loader
(await loader).dismiss();
//redirect to home page
this.navCtrl.navigateRoot("home");
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
}}