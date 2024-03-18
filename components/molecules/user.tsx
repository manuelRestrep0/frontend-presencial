import React from "react";

export default function UserInfo() {
    return (
        <div className="flex items-center bg-gray-300">
            <div className="mr-4">
                <img src="/user.jpg" className="w-10 h-10 rounded-full" alt="profile-pic" />
            </div>
            <div>
                <div className="font-bold">Maverick Smith Jostin</div>
                <div className="text-sm">Administrador</div>
            </div>
        </div>
    );
}
