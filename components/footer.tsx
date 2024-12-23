"use client";

import Link from "next/link";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-gray-100 dark:bg-gray-900 border-t py-8">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between">
                {/* Left Section: About */}
                <div className="w-full md:w-1/2 pr-0 md:pr-4 mb-6 md:mb-0">
                    <h4 className="text-lg font-bold text-gray-700 dark:text-gray-300 mb-4">
                        Về Chúng Tôi
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                        <strong>Product by:</strong><br />
                        VINH VINH PHAT ONE MEMBER CO., LTD
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                        <strong>Địa chỉ:</strong><br />
                        Add: 359 Ap Chien Luoc Street, Khu Pho 2, Binh Hung Hoa A Ward,
                        Binh Tan District, Ho Chi Minh City<br />
                        Fac: 2861, National Highway 1, Hamlet 3, Binh Chanh Commune,
                        Binh Chanh District, HCM City<br />
                        Tel: 0283.620.4978 Fax: 0283.620.4978<br />
                        Made in Viet Nam
                    </p>
                </div>

                {/* Right Section: Social Media */}
                <div className="w-full md:w-1/2 pl-0 md:pl-4 text-left md:text-right">
                    <h4 className="text-lg font-bold text-gray-700 dark:text-gray-300 mb-4">
                        Kết Nối Với Chúng Tôi
                    </h4>
                    <div className="flex justify-start md:justify-end space-x-4">
                        <Link
                            href="https://facebook.com"
                            className="text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 transition"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FaFacebook size={20} />
                        </Link>
                        <Link
                            href="https://twitter.com"
                            className="text-gray-600 dark:text-gray-400 hover:text-blue-400 dark:hover:text-blue-300 transition"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FaTwitter size={20} />
                        </Link>
                        <Link
                            href="https://instagram.com"
                            className="text-gray-600 dark:text-gray-400 hover:text-pink-500 dark:hover:text-pink-400 transition"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FaInstagram size={20} />
                        </Link>
                        <Link
                            href="https://linkedin.com"
                            className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500 transition"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FaLinkedin size={20} />
                        </Link>
                    </div>
                </div>
            </div>

            {/* Bottom Section */}
            <div className="mt-8 border-t pt-4">
                <p className="text-sm text-gray-600 dark:text-gray-400 text-center">
                    &copy; {new Date().getFullYear()} Vinh Vinh Phat. All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
