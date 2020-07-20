import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-hiragana',
    templateUrl: './hiragana.component.html',
    styleUrls: ['hiragana.component.css']
  
})
export class HiraganaComponent  implements OnInit{

    
    letters = [
          
         { 
          a:'http://www.dartmouth.edu/~introjpn/text/hiragana/hiragana_files/01_a.jpg',
          e:'http://www.dartmouth.edu/~introjpn/text/hiragana/hiragana_files/04_e.jpg',
          i:'http://www.dartmouth.edu/~introjpn/text/hiragana/hiragana_files/02_i.jpg',
          o:'http://www.dartmouth.edu/~introjpn/text/hiragana/hiragana_files/05_o.jpg', 
          u:'http://www.dartmouth.edu/~introjpn/text/hiragana/hiragana_files/03_u.jpg'},

        {
          a: 'http://www.dartmouth.edu/~introjpn/text/hiragana/hiragana_files/06_ka.jpg',
          i:'http://www.dartmouth.edu/~introjpn/text/hiragana/hiragana_files/07_ki.jpg',
          u:'http://www.dartmouth.edu/~introjpn/text/hiragana/hiragana_files/08_ku.jpg',
          e:'http://www.dartmouth.edu/~introjpn/text/hiragana/hiragana_files/09_ke.jpg',
          o:'http://www.dartmouth.edu/~introjpn/text/hiragana/hiragana_files/10_ko.jpg'},

        { 
         a: 'http://www.dartmouth.edu/~introjpn/text/hiragana/hiragana_files/11_sa.jpg',
         i:'http://www.dartmouth.edu/~introjpn/text/hiragana/hiragana_files/12_shi.jpg',
         u:'http://www.dartmouth.edu/~introjpn/text/hiragana/hiragana_files/13_su.jpg',
         e:'http://www.dartmouth.edu/~introjpn/text/hiragana/hiragana_files/14_se.jpg', 
         o:'http://www.dartmouth.edu/~introjpn/text/hiragana/hiragana_files/15_so.jpg'},

        {
         a: 'http://www.dartmouth.edu/~introjpn/text/hiragana/hiragana_files/16_ta.jpg', 
         i:'http://www.dartmouth.edu/~introjpn/text/hiragana/hiragana_files/17_chi.jpg',
         u:'http://www.dartmouth.edu/~introjpn/text/hiragana/hiragana_files/18_tsu.jpg',
         e:'http://www.dartmouth.edu/~introjpn/text/hiragana/hiragana_files/19_te.jpg',
         o:'http://www.dartmouth.edu/~introjpn/text/hiragana/hiragana_files/20_to.jpg'},

        {
         a: 'http://www.dartmouth.edu/~introjpn/text/hiragana/hiragana_files/21_na.jpg', 
         i:'http://www.dartmouth.edu/~introjpn/text/hiragana/hiragana_files/22_ni.jpg', 
         u:'http://www.dartmouth.edu/~introjpn/text/hiragana/hiragana_files/23_nu.jpg', 
         e:'http://www.dartmouth.edu/~introjpn/text/hiragana/hiragana_files/24_ne.jpg', 
         o:'http://www.dartmouth.edu/~introjpn/text/hiragana/hiragana_files/25_no.jpg'},

        {
         a: 'http://www.dartmouth.edu/~introjpn/text/hiragana/hiragana_files/26_ha.jpg', 
         i:'http://www.dartmouth.edu/~introjpn/text/hiragana/hiragana_files/27_hi.jpg', 
         u:'http://www.dartmouth.edu/~introjpn/text/hiragana/hiragana_files/28_fu.jpg', 
         e:'http://www.dartmouth.edu/~introjpn/text/hiragana/hiragana_files/29_he.jpg', 
         o:'http://www.dartmouth.edu/~introjpn/text/hiragana/hiragana_files/30_ho.jpg'},

        {
         a: 'http://www.dartmouth.edu/~introjpn/text/hiragana/hiragana_files/31_ma.jpg', 
         i:'http://www.dartmouth.edu/~introjpn/text/hiragana/hiragana_files/32_mi.jpg', 
         u:'http://www.dartmouth.edu/~introjpn/text/hiragana/hiragana_files/33_mu.jpg', 
         e:'http://www.dartmouth.edu/~introjpn/text/hiragana/hiragana_files/34_me.jpg', 
         o:'http://www.dartmouth.edu/~introjpn/text/hiragana/hiragana_files/35_mo.jpg'},

        {
         a: 'http://www.dartmouth.edu/~introjpn/text/hiragana/hiragana_files/36_ya.jpg', 
         i:'https://i.imgur.com/SLDeONr.png', 
         u:'http://www.dartmouth.edu/~introjpn/text/hiragana/hiragana_files/37_yu.jpg', 
         e:'https://i.imgur.com/SLDeONr.png', 
         o:'http://www.dartmouth.edu/~introjpn/text/hiragana/hiragana_files/38_yo.jpg'},

        {
         a: 'http://www.dartmouth.edu/~introjpn/text/hiragana/hiragana_files/39_ra.jpg', 
         i:'http://www.dartmouth.edu/~introjpn/text/hiragana/hiragana_files/40_ri.jpg', 
         u:'http://www.dartmouth.edu/~introjpn/text/hiragana/hiragana_files/41_ru.jpg', 
         e:'http://www.dartmouth.edu/~introjpn/text/hiragana/hiragana_files/42_re.jpg', 
         o:'http://www.dartmouth.edu/~introjpn/text/hiragana/hiragana_files/43_ro.jpg'},

        {
         a: 'http://www.dartmouth.edu/~introjpn/text/hiragana/hiragana_files/44_wa.jpg', 
         i:'https://i.imgur.com/SLDeONr.png', 
         u:'https://i.imgur.com/SLDeONr.png', 
         e:'https://i.imgur.com/SLDeONr.png', 
         o:'http://www.dartmouth.edu/~introjpn/text/hiragana/hiragana_files/45_wo.jpg'},

        {
         a: 'http://www.dartmouth.edu/~introjpn/text/hiragana/hiragana_files/46_n.jpg', 
         i:'https://i.imgur.com/SLDeONr.png', 
         u:'https://i.imgur.com/SLDeONr.png', 
         e:'https://i.imgur.com/SLDeONr.png', 
         o:'https://i.imgur.com/SLDeONr.png'},
      ];



      ngOnInit(): void {
        
    }

}