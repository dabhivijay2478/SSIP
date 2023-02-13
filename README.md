jsk_app
A new ReactJS  Web application.

Getting Started
This project is a starting point for a ReactJS application.


Firebase Config File : 

Location of Firebase.js File :
Your Project Folder -> src -> Firebase.js



![image](https://user-images.githubusercontent.com/80666494/218511178-8183e63c-c3fb-4d14-bd4f-b6b49b99bbb6.png)




import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
//Your Firebase Config
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore(app);
export { app, auth, db };


Photos of Web App


![image](https://user-images.githubusercontent.com/80666494/218243023-2138ce6f-9821-4129-a16a-8c52ff81aad6.png)


![image](https://user-images.githubusercontent.com/80666494/218243034-36861d57-5402-41bd-bd1e-2f6d4bb12936.png)


![image](https://user-images.githubusercontent.com/80666494/218243046-32b20f20-be64-4c78-9d84-ac648237f897.png)


![image](https://user-images.githubusercontent.com/80666494/218243074-1142a620-6315-4e38-946c-f9e00905e2e0.png)



