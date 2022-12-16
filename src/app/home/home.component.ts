import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { User } from './../user.model';
import { UserService } from './../user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  title = 'angular-pwa-app';
  ip = '';
  position: any;
  modalRef: BsModalRef | undefined;
  users: User[] = [];
  selectedUser: any;
  actionType = '';
  index = 0;
  isLoading = false;

  constructor(
    private modalService: BsModalService,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.getItems();
    this.getGeolocation();
  }

  getItems() {
    this.isLoading = true;
    this.userService.getUsers().subscribe((users) => {
      this.isLoading = false;
      this.users = users;
    });
  }

  getGeolocation() {
    navigator.geolocation.getCurrentPosition(
      (position: any) => {
        console.log('Location accessed');
        this.position =
          position.coords.latitude + ' ' + position.coords.longitude;
      },
      () => {
        console.log('User not allowed');
      },
      { timeout: 10000 }
    );
  }

  openNewUserModal(template: TemplateRef<any>) {
    this.actionType = 'creating';
    this.selectedUser = {};
    this.modalRef = this.modalService.show(template);
  }

  onSubmit() {
    if (this.actionType === 'creating') {
      this.userService.createUser(this.selectedUser).subscribe((data) => {
        this.getItems();
      });
    } else if (this.actionType === 'updating') {
      this.updateUser();
    }
    this.modalRef?.hide();
  }

  openModifyUserModal(template: TemplateRef<any>, index: number) {
    this.index = index;
    this.actionType = 'updating';
    this.selectedUser = Object.assign({}, this.users[index]);
    this.modalRef = this.modalService.show(template);
  }

  updateUser() {
    this.userService.updateUser(this.selectedUser).subscribe((data) => {
      this.getItems();
    });
  }

  deleteUser(id: string | undefined) {
    this.userService.deleteUser(id).subscribe((data) => {
      this.getItems();
    });
  }
}
