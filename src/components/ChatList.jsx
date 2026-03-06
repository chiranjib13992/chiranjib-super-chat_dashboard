// src/components/ChatList.jsx
import React from "react";

export default function ChatList({ users, onSelect, selectedUserId }) {
  return (
    <div className="w-64 bg-white border-r border-gray-200 flex-shrink-0">
      <h2 className="p-4 font-bold text-lg border-b border-gray-200">Contacts</h2>
      <ul>
        {users.map((user) => (
          <li
            key={user.id}
            onClick={() => onSelect(user)}
            className={`p-4 cursor-pointer flex items-center justify-between hover:bg-gray-100 ${
              selectedUserId === user.id ? "bg-blue-100" : ""
            }`}
          >
            <span>{user.name}</span>
            {user.online && <span className="w-3 h-3 bg-green-500 rounded-full"></span>}
          </li>
        ))}
      </ul>
    </div>
  );
}