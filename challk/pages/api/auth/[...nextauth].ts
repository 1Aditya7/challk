import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { signInWithEmailAndPassword } from "firebase/auth";
import { getAuth } from "firebase/auth";

const auth = getAuth();

const authOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          throw new Error("Email and password are required");
        }

        try {
          const userCredential = await signInWithEmailAndPassword(auth, credentials.email, credentials.password);
          if (userCredential.user) {
            return {
              id: userCredential.user.uid,
              email: userCredential.user.email,
              name: userCredential.user.displayName,
            };
          }
          return null;
        } catch (error) {
          console.error("Error during sign-in:", error);
          throw new Error("Invalid email or password");
        }
      },
    }),
  ],
};

export default NextAuth(authOptions);

import { signIn } from "next-auth/react";
import { Credentials } from "@/types"; // Define your own types as needed

// Your page component where the sign-in form is displayed
const LoginPage = () => {
  const handleSignIn = async (credentials: Credentials) => {
    try {
      await signIn('credentials', { ...credentials, redirect: false });
    } catch (error) {
      console.error("Error during sign-in:", error);
      // Handle error
    }
  };

  // Your JSX for the sign-in form and UI
};

export default LoginPage;
