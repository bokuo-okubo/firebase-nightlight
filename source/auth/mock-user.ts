/**
 * @license Use of this source code is governed by a GPL-3.0 license that
 * can be found in the LICENSE file at https://github.com/cartant/firebase-nightlight
 */

import { firebase } from "../firebase";
import { unsupported_ } from "../mock-error";
import { randomString } from "../text-random-string";

export interface MockUserOptions {
    email?: string;
    uid?: string;
}

export class MockUser implements firebase.User {

    public displayName: string | null;
    public email: string | null;
    public emailVerified: boolean;
    public isAnonymous: boolean;
    public metadata: firebase.auth.UserMetadata;
    public phoneNumber: string | null;
    public photoURL: string | null;
    public providerData: (firebase.UserInfo | null)[];
    public providerId: string;
    public refreshToken: string;
    public uid: string;

    constructor(options: MockUserOptions) {

        const alphabet = "ABCDEFGHIJKLMONPQRSTUVWXYZabcdefghijklmonpqrstuvwxyz0123456789";
        const email = options.email || null;
        const uid = options.uid || randomString(alphabet, 28);

        this.displayName = email;
        this.email = email;
        this.emailVerified = false;
        this.isAnonymous = false;
        this.metadata = { toJSON(): string { return JSON.stringify(this); } };
        this.phoneNumber = null;
        this.photoURL = null;
        this.providerData = [{
            displayName: email,
            email,
            phoneNumber: null,
            photoURL: null,
            providerId: "password",
            uid
        }];
        this.providerId = "password";
        this.refreshToken = "";
        this.uid = uid;
    }

    delete(): Promise<any> {

        throw unsupported_();
    }

    getIdToken(forceRefresh?: boolean): Promise<any> {

        throw unsupported_();
    }

    getToken(forceRefresh?: boolean): Promise<any> {

        throw unsupported_();
    }

    link(credential: firebase.auth.AuthCredential): Promise<any> {

        throw unsupported_();
    }

    linkAndRetrieveDataWithCredential(credential: firebase.auth.AuthCredential): Promise<any> {

        throw unsupported_();
    }

    linkWithCredential(credential: firebase.auth.AuthCredential): Promise<any> {

        throw unsupported_();
    }

    linkWithPhoneNumber(
        phoneNumber: string,
        applicationVerifier: firebase.auth.ApplicationVerifier
    ): Promise<any> {

        throw unsupported_();
    }

    linkWithPopup(provider: firebase.auth.AuthProvider): Promise<any> {

        throw unsupported_();
    }

    linkWithRedirect(provider: firebase.auth.AuthProvider): Promise<any> {

        throw unsupported_();
    }

    reauthenticate(credential: firebase.auth.AuthCredential): Promise<any> {

        throw unsupported_();
    }

    reauthenticateAndRetrieveDataWithCredential(credential: firebase.auth.AuthCredential): Promise<any> {

        throw unsupported_();
    }

    reauthenticateWithCredential(credential: firebase.auth.AuthCredential): Promise<any> {

        throw unsupported_();
    }

    reauthenticateWithPhoneNumber(
        phoneNumber: string,
        applicationVerifier: firebase.auth.ApplicationVerifier
    ): Promise<any> {

        throw unsupported_();
    }

    reauthenticateWithPopup(provider: firebase.auth.AuthProvider): Promise<any> {

        throw unsupported_();
    }

    reauthenticateWithRedirect(provider: firebase.auth.AuthProvider): Promise<any> {

        throw unsupported_();
    }

    reload(): Promise<any> {

        throw unsupported_();
    }

    sendEmailVerification(): Promise<any> {

        throw unsupported_();
    }

    toJSON(): Object {

        throw unsupported_();
    }

    unlink(providerId: string): Promise<any> {

        throw unsupported_();
    }

    updateEmail(email: string): Promise<any> {

        throw unsupported_();
    }

    updatePassword(password: string): Promise<any> {

        throw unsupported_();
    }

    updatePhoneNumber(phoneCredential: firebase.auth.AuthCredential): Promise<any> {

        throw unsupported_();
    }

    updateProfile(
        profile: { displayName: string | null, photoURL: string | null }
    ): Promise<any> {

        throw unsupported_();
    }
}
