import { Injectable } from '@nestjs/common';

const COUNTRY_CODE_KOREA = "+82";

@Injectable()
export class AuthService {
    createUser(email: string, phoneNumber: string, name: string, password: string) {
        //
    }

    phoneNumberFormat(phoneNumber: string): string {  // E.164
        if (!phoneNumber.startsWith(COUNTRY_CODE_KOREA)) {
            phoneNumber = COUNTRY_CODE_KOREA + phoneNumber;
        }
        return phoneNumber;
    }
}

/*
import crypto from 'crypto';
import { firebaseAdmin, firebase } from '../config/firebase';

const KEY_VERIFICATIONS = 'verifications';

const createUser = ({ email, phoneNumber, name, password }) => {
    return firebaseAdmin.auth()
        .createUser({
            email,
            emailVerified: false,
            phoneNumber,
            password,
            displayName: name,
            // photoURL: '',
            disabled: false,
        });
};

const setVerificationCode = (uid) => {
    const code = crypto.createHash('sha256').update(Date.now().toString()+uid).digest('hex');
    firebaseAdmin.database()
        .ref(KEY_VERIFICATIONS)
        .child(code)
        .set({
            uid,
            code,
            timestamp: Date.now()
        })
        .catch(console.error);
    return code;
};

const verifyUser = (code) => {
    console.log('code:', code);
    return firebaseAdmin.database()
        .ref(KEY_VERIFICATIONS)
        .child(code)
        .once('value', snapshot => {
            const { uid } = snapshot.val();
            firebaseAdmin.auth()
                .updateUser(uid, {
                    emailVerified: true
                });
            return uid;
        });
};

const signInWithEmailAndPassword = (email, password) => {
    return firebase.auth()
        .signInWithEmailAndPassword(email, password)
        .then(userCredential => {
            return firebaseAdmin.auth()
                .createCustomToken(userCredential.user.uid);
        });
};

const verifyIdToken = async (token) => {
    return firebase.auth()
        .signInWithCustomToken(token)
        .then(userCredential => userCredential.user.uid);
    return firebaseAdmin.auth()
        .verifyIdToken(token)
        .then(decodedToken => decodedToken.uid);
    }

    export default {
        createUser,
        setVerificationCode,
        verifyUser,
        signInWithEmailAndPassword,
        verifyIdToken
    };
*/