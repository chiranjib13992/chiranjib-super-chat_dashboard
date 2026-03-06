import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Messages from './components/Messages';
import Login from './components/Login';
import AuthGuard from './guards/Auth.guard';
import Signup from './components/Signup';


export default function AppRouting() {
    return (
        <Routes>

            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route
                path="/dashboard"
                element={
                    <AuthGuard>
                        <Dashboard/>
                    </AuthGuard>
                }
            />

            <Route
                path="/messages"
                element={
                    <AuthGuard>
                        <Messages />
                    </AuthGuard>
                }
            />

        </Routes>
    );
}
