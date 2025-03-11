import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { ContactsComponent } from './components/contacts/contacts.component';
import { ShipmentsComponent } from './components/shipments/shipments.component';
import { AppComponent } from './app.component';

export const routes: Routes = [
  {
    path: 'contacts',
    component: ContactsComponent
  },
  {
    path: 'shipments',
    component: ShipmentsComponent
  }];
