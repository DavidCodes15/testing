import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import User from "@/models/user";
import { connectToDB } from "@/utils/database";

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: {
          label: "სახელი",
          type: "text",
          placeholder: "თქვენი სახელი",
        },
        password: {
          label: "პაროლი",
          type: "password",
          placeholder: "პაროლი",
        },
      },
      async authorize(credentials) {
        try {
          await connectToDB();

          // Check if the user already exists in the database
          const existingUser = await User.findOne({
            username: credentials.username,
          });

          if (existingUser) {
            // User exists, check credentials
            if (credentials.password === existingUser.password) {
              return existingUser;
            } else {
              // Incorrect password
              return null;
            }
          } else {
            // User doesn't exist, create a new user
            const newUser = new User({
              username: credentials.username,
              password: credentials.password,
            });
            await newUser.save();
            return newUser;
          }
        } catch (error) {
          console.log(error);
        }
      },
    }),
  ],
});

export { handler as GET, handler as POST };
