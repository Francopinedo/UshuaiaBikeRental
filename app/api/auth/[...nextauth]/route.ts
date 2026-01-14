import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  callbacks: {
    async signIn({ user }) {
      // AQUÍ BLOQUEAS EL ACCESO: Solo tu email puede entrar
      const emailsPermitidos = ["francopinedo.dev@gmail.com"]; 
      return emailsPermitidos.includes(user.email || "");
    },
  },
  pages: {
    signIn: '/login', // Opcional: crea una página de login personalizada
    error: '/',       // Si alguien no autorizado intenta entrar, lo manda a la Home
  }
});

export { handler as GET, handler as POST };