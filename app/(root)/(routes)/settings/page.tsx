"use client";

import Heading from "@/components/heading";
import { Separator } from "@/components/ui/separator";

const SettingsPage = () => {
  return (
    <>
      <div className="space-y-6">
        {/* Heading Section */}
        <Heading title="Cá Nhân" description="Thông tin cá nhân của bạn" />
        <Separator />
      </div>
    </>
  );
};

export default SettingsPage;
