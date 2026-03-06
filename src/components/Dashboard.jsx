// src/pages/Dashboard.jsx
import React, { useState } from "react";
import ChatList from "./ChatList";
import ChatWindow from "./ChatWindow";
import { users } from "./data/users";

export default function Dashboard() {
  const [selectedUser, setSelectedUser] = useState(null);

  return (
    <div className="flex h-full bg-gray-100">
      {/* Left: Contacts */}
      <ChatList
        users={users.filter((u) => u.online)}
        onSelect={setSelectedUser}
        selectedUserId={selectedUser?.id}
      />

      {/* Right: Chat window */}
      <ChatWindow user={selectedUser} />
    </div>
  );
}