import React from "react";

export default function NavigationBar() {
    return (
        <div className="m-auto w-full bg-blue-500">
            <nav className="container sticky top-0 m-auto bg-blue-500">
                <div className="flex justify-between">
                    <div
                        id="Brand"
                        className="flex gap-5 justify-between items-center m-2"
                    >
                        <img
                            src="/public/Images/Charon/nh-charon-neutral-bright-release.webp"
                            className="w-10 h-10 rounded-full"
                        />
                        <p className="text-lg font-bold text-white">
                            Charon Should Also Be A Planet
                        </p>
                    </div>
                    <ul className="flex gap-2 items-center m-2">
                        <li>
                            <a
                                className="p-3 bg-blue-400 rounded-2xl hover:bg-blue-300"
                                href="#"
                            >
                                Home
                            </a>
                        </li>
                        <li>
                            <a
                                className="p-3 bg-blue-400 rounded-2xl hover:bg-blue-300"
                                href="#"
                            >
                                About
                            </a>
                        </li>
                        <li>
                            <a
                                className="p-3 bg-blue-400 rounded-2xl hover:bg-blue-300"
                                href="#"
                            >
                                Contact
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
}
