import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { LoadingController, ToastController} from '@ionic/angular';

@Component({
  selector: 'app-managebooking',
  templateUrl: './managebooking.page.html',
  styleUrls: ['./managebooking.page.scss'],
})
export class ManagebookingPage implements OnInit {

  booking: any;

  constructor(
 private loadingCtrl: LoadingController,
 private toastCtrl: ToastController,
 private firestore: AngularFirestore
  ) { }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.getPosts();
    }
    async getPosts(){
    //show loader
    let loader = await this.loadingCtrl.create({
    message: "Please wait..."
    });
    loader.present();
    try {
    this.firestore
    .collection("all")
    .snapshotChanges()
    .subscribe(data => {
    this.booking = data.map(e => {
    return {
    id: e.payload.doc.id,
    name: e.payload.doc.data()["name"],
    contact: e.payload.doc.data()["contact"],
    venue: e.payload.doc.data()["venue"],
    datemula: e.payload.doc.data()["datemula"],
    datetamat: e.payload.doc.data()["datetamat"],
    timemula: e.payload.doc.data()["timemula"],
    timetamat: e.payload.doc.data()["timetamat"],
    reason: e.payload.doc.data()["reason"],
    need: e.payload.doc.data()["need"],
    status: e.payload.doc.data()["status"]
    };
    });
    loader.dismiss();
    });

    } catch(e){
    this.showToast(e);
    }
    }
    async deletePost(id: string){
    //show loader
    let loader = this.loadingCtrl.create({
    message: "Please wait..."
    });
    (await loader).present();
    await this.firestore.doc("all/" + id).delete();
    //dismiss loader
    (await loader).dismiss();
 }
 showToast (message:string){
 this.toastCtrl.create({
 message: message,
 duration: 3000
 }).then(toastData => toastData.present());
 } 
}
