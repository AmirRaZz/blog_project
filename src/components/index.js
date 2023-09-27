"use client";

import { useAuth } from "src/context/AuthContext";

const Index = () => {
    const { user } = useAuth();
    return (
        <>
            {user && <span className="ml-2">سلام {user.name}،</span>}
            <span>به Next-App خوش آمدی!</span>
        </>
    );
};

export default Index;
