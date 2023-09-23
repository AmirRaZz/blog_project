import Header from "src/containers/Layout/Header";
import "../styles/globals.css";
import Footer from "src/containers/Layout/Footer";
import { Toaster } from "react-hot-toast";
import AuthProvider from "src/context/AuthContext";

export const metadata = {
    title: " Next App Blog",
    description: "This is blog app",
};

export default function RootLayout({ children }) {
    return (
        <html dir="rtl" lang="fa">
            <body className="bg-gray-100 min-h-screen ">
                <AuthProvider>
                    <Header />
                    <Toaster />
                    {children}
                    <Footer />
                </AuthProvider>
            </body>
        </html>
    );
}
