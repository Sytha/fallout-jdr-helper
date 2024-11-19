import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CharacterStats, Resistances, ResistanceLocation, SkillType, SkillValue } from '../../character-stats.model';


@Component({
  selector: 'app-character-sheet-resistance',
  templateUrl: './character-sheet-resistance.component.html',
  styleUrls: ['./character-sheet-resistance.component.scss'],
})
export class CharacterSheetResistance implements OnInit {
  @Input() res: Resistances;
  @Input() editable: boolean;
  @Input() internalSize: number = 12;
  @Input() label: string = "";
  @Output() onEdit: EventEmitter<Resistances> = new EventEmitter<Resistances>();
  ngOnInit(): void {
  }

  onChange() {
    this.onEdit.emit(this.res);
  }

}
