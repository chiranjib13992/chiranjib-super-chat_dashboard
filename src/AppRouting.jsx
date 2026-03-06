import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Messages from './components/Messages';
import Login from './components/Login';
import AuthGuard from './guards/Auth.guard';
import Signup from './components/Signup';
import NotFound from './components/NotFound';
import DashboardLayout from './layout/DashboardLayout';

export default function AppRouting() {
  return (
    <Routes>

      {/* Public routes */}
      <Route path="/" element={<Login />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />

      {/* Dashboard layout routes */}
      <Route element={<DashboardLayout />}>

        <Route
          path="/dashboard"
          element={
            <AuthGuard>
              <Dashboard />
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

      </Route>

      {/* 404 */}
      <Route path="*" element={<NotFound />} />

    </Routes>
  );
}