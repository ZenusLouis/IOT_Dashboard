"use client";

import { Button } from "@/components/ui/button";
import { thingsboard } from "@/lib/tbClient";
import Link from "next/link";
import { redirect, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import MainNav from "./main-nav";
import axios from "axios";

const Navbar = () => {
  const router = useRouter();
  const [profileInfo, setProfileInfo] = useState({}) as any;

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      redirect("/login");
    }
    const getData = async () => {
      await axios
        .post(`/api/auth/user`, { token })
        .then((resp) => {
          setProfileInfo(resp.data);
        })
        .catch((error) => {
          localStorage.removeItem("token");
          router.push("/login");
        });
    };
    getData();
  }, []);

  return (
    <div className="border-b">
      <div className="flex h-16 items-center px-4 sm:px-6">
        {/* Main Navigation */}
        <MainNav />

        {/* Profile Section */}
        <div className="ml-auto flex items-center space-x-2 sm:space-x-4">
          <div className="flex flex-col items-end text-right">
            <span>{profileInfo ? `Chào, ${profileInfo?.firstName}` : ``}</span>
          </div>
          {/* Logout Button */}
          <Link href="/logout">
            <Button className="text-sm font-medium bg-gray-900 text-white hover:bg-gray-800 rounded-md px-4 py-2">
              Đăng Xuất
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
