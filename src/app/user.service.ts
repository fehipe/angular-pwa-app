import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user.model';
import { map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class UserService {
  firebaseUrl =
    'https://angularpwa-7cd13-default-rtdb.europe-west1.firebasedatabase.app/posts';

  constructor(private http: HttpClient) {}

  getUsers() {
    return this.http
      .get<{ [key: string]: User }>(this.firebaseUrl + '.json')
      .pipe(
        map((responseData) => {
          const usersArray: User[] = [];
          for (const key in responseData) {
            if (responseData.hasOwnProperty(key)) {
              usersArray.push({ ...responseData[key], id: key });
            }
          }
          return usersArray;
        })
      );
  }

  createUser(selectedUser: User) {
    const userData: User = {
      firstname: selectedUser.firstname,
      lastname: selectedUser.lastname,
      email: selectedUser.email,
    };
    return this.http.post<{ name: string }>(
      this.firebaseUrl + '.json',
      userData
    );
  }

  deleteUser(id: string | undefined) {
    return this.http.delete<{ name: string }>(
      this.firebaseUrl + '/' + id + '.json'
    );
  }

  updateUser(selectedUser: User) {
    const userData: User = {
      firstname: selectedUser.firstname,
      lastname: selectedUser.lastname,
      email: selectedUser.email,
    };
    return this.http.put<{ name: string }>(
      this.firebaseUrl + '/' + selectedUser.id + '.json',
      userData
    );
  }
}
