import firebase from 'firebase/app';
import 'firebase/auth';

const app = firebase.initializeApp({
	apiKey: 'AIzaSyC61XGaa3pMmnQt3wf-xn9I1BkKt02HBbA',
	authDomain: 'scandinavian-csgo.firebaseapp.com',
	projectId: 'scandinavian-csgo',
	storageBucket: 'scandinavian-csgo.appspot.com',
	messagingSenderId: '91462814619',
	appId: '1:91462814619:web:5ef7d214791c9d9617ef3e',
});

export const auth = app.auth();
export default app;
