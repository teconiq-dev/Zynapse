"use client";
import {useState} from "react";
import {account, ID} from "@/components/backend/appwrite";

export default function Register() {
    const [loggedInUser, setLoggedInUser] = useState(null);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");

    const login = async (email, password) => {
        const session = await account.createEmailPasswordSession(email, password);
        setLoggedInUser(await account.get());
    };
    const register = async () => {
        await account.create(ID.unique(), email, password, name);
        await login(email, password);
    };

    const logout = async () => {
        await account.deleteSession("current");
        setLoggedInUser(null);
    };

    if (loggedInUser) {
        return (
            <div>
                <p>Logged in as {loggedInUser.name}</p>
                <button type="button" onClick={logout}>
                    Logout
                </button>
            </div>
        );
    }
    return (
        <div className="flex flex-col items-center justify-center min-h-screen text-black">
            <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md">
                <h2 className="text-2xl font-bold text-center text-gray-900">Not logged in</h2>
                <form className="space-y-4">
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                            Email
                        </label>
                        <input
                            id="email"
                            type="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:text-black sm:text-sm"
                        />
                    </div>
                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-black">
                            Password
                        </label>
                        <input
                            id="password"
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                    </div>
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                            Name
                        </label>
                        <input
                            id="name"
                            type="text"
                            placeholder="Name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                    </div>
                    <div className="flex items-center justify-between">
                        <button
                            type="button"
                            onClick={() => login(email, password)}
                            className="w-full px-4 py-2 font-medium text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                            Login
                        </button>
                    </div>
                    <div className="flex items-center justify-between">
                        <button
                            type="button"
                            onClick={register}
                            className="w-full px-4 py-2 font-medium text-white bg-green-600 rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                        >
                            Register
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
