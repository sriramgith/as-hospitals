import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const username = sessionStorage.getItem('username');
  const password = sessionStorage.getItem('password');
  const usertype = sessionStorage.getItem('usertype');
  if(!username){
    if (usertype == "client" || state.url.includes('client')) {
      router.navigate(['/clientlogin']);
    } 
    else if (usertype == "doctor" || state.url.includes('doctor')) {
      router.navigate(['/doctorlogin']);
    }
    else{
      router.navigate(['/clientlogin']);
    }
    return false;
  }
  else{
    if(usertype== "doctor" && state.url.includes('client')){
      sessionStorage.clear();
      router.navigate(['/clientlogin']);
      return false;
    }
    else if(usertype=="client" && state.url.includes('doctor')){
      sessionStorage.clear();
      router.navigate(['/doctorlogin']);
      return false;
    }
    return true;
  
  }
};
