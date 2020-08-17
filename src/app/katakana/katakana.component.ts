import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-katakana',
  templateUrl: './katakana.component.html',
  styleUrls: ['./katakana.component.css']
})
export class KatakanaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  katakana_letters = [
          
    { 
     a:'./assets/katakana/a.png',
     e:'./assets/katakana/e.png',
     i:'./assets/katakana/i.png',
     o:'./assets/katakana/o.png', 
     u:'./assets/katakana/u.png'},

   {
     a: './assets/katakana/ka.png',
     i:'./assets/katakana/ki.png',
     u:'./assets/katakana/ku.png',
     e:'./assets/katakana/ke.png',
     o:'./assets/katakana/ko.png'},

   { 
    a: './assets/katakana/sa.png',
    i:'./assets/katakana/shi.png',
    u:'./assets/katakana/su.png',
    e:'./assets/katakana/se.png', 
    o:'./assets/katakana/so.png'},

   {
    a: './assets/katakana/ta.png', 
    i:'./assets/katakana/chi.png',
    u:'./assets/katakana/tsu.png',
    e:'./assets/katakana/te.png',
    o:'./assets/katakana/to.png'},

   {
    a: './assets/katakana/na.png', 
    i:'./assets/katakana/ni.png', 
    u:'./assets/katakana/nu.png', 
    e:'./assets/katakana/ne.png', 
    o:'./assets/katakana/no.png'},

   {
    a: './assets/katakana/ha.png', 
    i:'./assets/katakana/hi.png', 
    u:'./assets/katakana/hu.png', 
    e:'./assets/katakana/he.png', 
    o:'./assets/katakana/ho.png'},

   {
    a: './assets/katakana/ma.png', 
    i:'./assets/katakana/mi.png', 
    u:'./assets/katakana/mu.png', 
    e:'./assets/katakana/me.png', 
    o:'./assets/katakana/mo.png'},

   {
    a: './assets/katakana/ya.png', 
    i:'https://i.imgur.com/SLDeONr.png', 
    u:'./assets/katakana/yu.png', 
    e:'https://i.imgur.com/SLDeONr.png', 
    o:'./assets/katakana/yo.png'},

   {
    a: './assets/katakana/ra.png', 
    i:'./assets/katakana/ri.png', 
    u:'./assets/katakana/ru.png', 
    e:'./assets/katakana/re.png', 
    o:'./assets/katakana/ro.png'},

   {
    a: './assets/katakana/wa.png', 
    i:'https://i.imgur.com/SLDeONr.png', 
    u:'https://i.imgur.com/SLDeONr.png', 
    e:'https://i.imgur.com/SLDeONr.png', 
    o:'./assets/katakana/wo.png'},

   {
    a: './assets/katakana/n.png', 
    i:'https://i.imgur.com/SLDeONr.png', 
    u:'https://i.imgur.com/SLDeONr.png', 
    e:'https://i.imgur.com/SLDeONr.png', 
    o:'https://i.imgur.com/SLDeONr.png'},
    
 ];

}
