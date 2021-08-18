import {Component, Input, AfterViewInit} from '@angular/core';

import {NgbModal, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'ngbd-modal-content',
  template: `
    <div class="modal-header">
      <h4 class="modal-title"> Ouch </h4>
      <button type="button" class="close" aria-label="Close" (click)="activeModal.dismiss('Cross click')">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div class="modal-body">
      <p>You seem to have clicked {{name}}! Do you want to continue ?</p>
    </div>
    <div class="modal-footer">
      <button md-button style="color: #fff;background-color: #153961;" (click)="activeModal.close(true)">Confirm</button>
      <button md-button (click)="activeModal.close(false)">Cancel</button>
      </div>
  `
})
export class NgbdModalContent {
  @Input() name: any;

  constructor(public activeModal: NgbActiveModal) {}
}

@Component({
  selector: 'ngbd-modal-component',
  templateUrl: './modal.component.html'
})
export class NgbdModalComponent implements AfterViewInit {
  constructor(private modalService: NgbModal) {}

  ngAfterViewInit(){
    this.open();
  }

  open() {
    const modalRef = this.modalService.open(NgbdModalContent);
    modalRef.componentInstance.name = 'Refresh';
  }
}
