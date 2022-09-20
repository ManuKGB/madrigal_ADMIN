import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { DateAdapter } from '@angular/material/core';
import { Subscription } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';
import { InfosService } from 'app/infos.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit {
  _updateInfos: FormGroup;
  infos:any;
  translateSubscription!: Subscription;
  constructor(
    private fb: FormBuilder,
    private dateAdapter: DateAdapter<any>,
    private translate: TranslateService,
    private infoServ:InfosService
  ) {
    this._updateInfos = this.fb.group({
      numero: ['', [Validators.required]],
      horaires: ['', [Validators.required]],
      intro_text: ['', [Validators.required]],
      pourquoi: ['', [Validators.required]],
      avis: ['', [Validators.required]],
      contact: ['', [Validators.required]],
      intro_text1: ['', [Validators.required]],
      intro_text2: ['', [Validators.required]],
      intro_text3: ['', [Validators.required]],
      intro_text4: ['', [Validators.required]],
      intro_text5: ['', [Validators.required]],
      intro_text6: ['', [Validators.required]],

    });
  }


  ngOnInit() {
    this.translateSubscription = this.translate.onLangChange.subscribe((res: { lang: any }) => {
      this.dateAdapter.setLocale(res.lang);
    });

    this.infoServ.getInfos().subscribe((response)=>{
      this.infos=response;
    })

  }
  getErrorMessage(form: FormGroup) {
    return form.get('email')?.hasError('required')
      ? 'validations.required'
      : form.get('email')?.hasError('email')
      ? 'validations.invalid_email'
      : '';
  }

  updateInfos(informations:any){
    Swal.fire({
      title:'Confirmation de modification!',
      text:'Voulez-vous vraiment enregistrer les modifications  apporter?',
      icon:'info',
      showCancelButton:true,
      showConfirmButton:true,
      showLoaderOnConfirm:true,
      showLoaderOnDeny:true,
      confirmButtonText:'Modifier',
      cancelButtonText:'Annuler',
      confirmButtonColor:'green',
      cancelButtonColor:'red'
    }).then( result=>{
      if (result.value) {
         this.infoServ.updateInfos(informations).subscribe((_response)=>{
        })
        Swal.fire({
          title:'Succès',
          text:'Modification réussi',
          position:'top-end',
          timer:1400,
          showConfirmButton:false,
          icon:'success',


        });

      }
    })

  }
  showImg(){
    Swal.fire({
      title: 'Sweet!',
      text: 'Voici la partie qui sera modifier !',
      imageUrl: 'assets/images/Update_Img_Rsrc/_NUMEROS.png',
      imageWidth: 500,
      imageHeight: 300,
      imageAlt: 'A tall image',

    })
  }
  showImg1(){

  }
  showImg2(){

  }
  showImg3(){

  }
  showImg4(){

  }
  showImg5(){

  }
  showImg6(){

  }
  showImg7(){

  }
  showImg8(){

  }

}
