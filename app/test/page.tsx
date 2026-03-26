"use client";

import Image from "next/image";

type PropsProfileInfo = {
    name: string;
    avatarUrl: string;
}; 

export default function ProfileInfo({ name = "@higa.ink", avatarUrl }: PropsProfileInfo) {

    return (
        <div className="p-3">
            <div className="flex flex-col items-center gap-3 sm:flex-row sm:gap-5">
                <Image
                    src={avatarUrl || "/imgs/profile_avatar_placeholder.png"}
                    alt={name}
                    width={80}
                    height={80}
                    draggable={false}
                    className="
                        w-21 h-21
                        rounded-full
                        sm:w-25 sm:h-25
                        md:w-29 md:h-29
                        object-cover"
                />
                <span className="
                            text-lg 
                            sm:text-xl
                            md:text-2xl
                            font-semibold
                            "
                >
                    {name}
                </span>
            </div>
        </div>
    );
}