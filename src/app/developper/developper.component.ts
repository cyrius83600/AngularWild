import { Component } from '@angular/core';
import { Skill } from '../models/skill.model';
import { Developper } from '../models/developper.model';
import { NgFor } from '@angular/common';
import { SkillComponent } from '../skill/skill.component';

@Component({
  selector: 'developper-component',
  standalone: true,
  imports: [NgFor,SkillComponent],
  templateUrl: './developper.component.html',
  styleUrl: './developper.component.css'
})
export class DevelopperComponent {
  skill1:Skill= new Skill("Skill1","logo1","site1");
  skill2:Skill = {name:"Skill2", logo:"logo2", site:"site2"};
  skill3:Skill = {name:"Skill3", logo:"logo3", site:"site3"};
    developpeur:Developper = {
      lastname:"CONCAS",
      firstname:"Cyril",
      age:35,
      gender:"Homme",
      bio:"Bio",
      skills:new Array(this.skill1, this.skill2, this.skill3)
      
    }
    

    
}
