import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-participant-array',
  templateUrl: './participant-array.component.html',
  styleUrls: ['./participant-array.component.scss']
})
export class ParticipantArrayComponent implements OnInit {

  @Input()
  ticketForm! : FormGroup;

  @Input()
  isEdit = true;

  
  constructor(
    private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.ticketForm.addControl("participantForm", this.formBuilder.array([]))
    this.participantForm.push(this.createNewParticipant());
    
  }

  addParticipant() {
    this.participantForm.push(this.createNewParticipant());
  }
  delParticipant(index: number){
    this.participantForm.removeAt(index);
  
  }

  get participantForm() {
    return this.ticketForm.controls['participantForm'] as FormArray;
  }

  get eventForm() {
    return this.ticketForm.controls['event'] as FormArray;
  }

  

  createNewParticipant(){
    return this.formBuilder.group({
      email: [null], 
      name:[null, [Validators.required]],
      surname:[null, [Validators.required]],
    })
  }

}
