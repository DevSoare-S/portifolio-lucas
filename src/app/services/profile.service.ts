import { Injectable } from '@angular/core';
import { Profile } from '../models/profile';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor() { }

  getProfile(): Profile {
    
    var profile: Profile = {

      email: 'LucasSoares.dev@hotmail.com',
      name: 'Lucas Soares',
      whatsAppUrl: 'https://api.whatsapp.com/send?phone=5554992980674&text=Ol%C3%A1,%20Gostaria%20de%20saber%20mais%20sobre%20seus%20servi%C3%A7os.',
      linkedIn: 'https://www.linkedin.com/in/lucas-soares-265358328/?trk=opento_sprofile_goalscard'
    }

    return profile;
  }
}
