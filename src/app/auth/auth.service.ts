import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { AuthData } from "./auth-data.model";
import { User } from "./user.model";


@Injectable({
    providedIn: 'root'
})

export class AuthSerice {
    private user: User | null | undefined;
    authChange = new Subject<boolean>();

    registerUsr(authData: AuthData) {
        this.user = {
            emailId: authData.emailId,
            userId: Math.round(((Math.random()) * 10000000)).toString()
        };
        this.authChange.next(true);
    }
    login(authData: AuthData) {
        this.user = {
            emailId: authData.emailId,
            userId: Math.round(((Math.random()) * 10000000)).toString()
        };
        this.authChange.next(true);
    }
    logout() {
        this.user = null;
        this.authChange.next(false);
    }

    getUser() {
        // We have returned only value not references
        return { ...this.user };
    }

    isAuth() {
        return this.user != null;
    }






}