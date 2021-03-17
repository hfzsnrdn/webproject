import { Component, OnInit } from '@angular/core';
import { AngularFirestore} from '@angular/fire/firestore';
import { LoadingController, NavController, ToastController } from '@ionic/angular';
import { Contact } from 'src/model/contact.mode';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.page.html',
  styleUrls: ['./contactus.page.scss'],
})
export class ContactusPage implements OnInit {

  contact = {} as Contact;
 constructor(
 private toastCtrl: ToastController,
 private loadingCtrl: LoadingController,
 private navCtrl: NavController,
 private firestore: AngularFirestore
 
 ) {}
 ngOnInit() {}
 async createPost(contact: Contact){
 if(this.formValidation()) {
 //show loader
 let loader = this.loadingCtrl.create({
 message: "Please wait..."
 });
 (await loader).present();
 try{
    await this.firestore.collection("contact").add(contact);
} catch(e){
this.showToast(e);
}
//dismiss loader
(await loader).dismiss();
//redirect to home page
this.navCtrl.navigateRoot("home");
}
}

formValidation(){
if(!this.contact.name){
this.showToast("Enter name");
return false;
}
if(!this.contact.email){
this.showToast("Enter email");
return false;
}
if(!this.contact.enquiry){
this.showToast("Enter enquiry");
return false;
}
if(!this.contact.message){
this.showToast("Enter message");
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
