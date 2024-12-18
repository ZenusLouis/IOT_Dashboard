import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Edit } from "lucide-react";

interface InputThresholdProps {
  title: string;
  targetKey: string;
  setEdit: (edit: { key: string; value: string | number }) => void;
  edit: { key: string; value: string | number };
  attribute: Record<string, any>;
  onChange: (key: string, value: number) => void;
}

const InputThreshold: React.FC<InputThresholdProps> = ({
  title,
  targetKey,
  setEdit,
  edit,
  attribute,
  onChange,
}) => {
  const [localValue, setLocalValue] = useState<number>(
    attribute?.[targetKey]
  );

  // Khi giá trị `attribute` thay đổi, đồng bộ lại giá trị `localValue`
  useEffect(() => {
    setLocalValue(attribute?.[targetKey]);
  }, [attribute, targetKey]);

  return (
    <div className="flex flex-col sm:flex-row justify-start items-center gap-2 sm:gap-4">
      <span className="text-sm font-medium sm:w-1/3">{title}:</span>
      <Input
        value={localValue || ""}
        className="w-full sm:w-[200px] rounded-full ms-0 sm:ms-2 sm:text-center"
        type="number"
        onChange={(e) => {
          const value = parseInt(e.target.value);
          setLocalValue(value); // Cập nhật giá trị cục bộ
          onChange(targetKey, value); // Gửi giá trị thay đổi về parent
        }}
      />
      {/* <Button
        variant={"ghost"}
        size={"sm"}
        className="rounded-full mt-2 sm:mt-0"
        style={{ zIndex: 99 }}
        onClick={() => {
          // Cho phép chỉnh sửa khi người dùng click Edit
          setEdit({
            key: targetKey,
            value: localValue ?? "",
          });
        }}
      >
        <Edit className="w-4 h-4" />
      </Button> */}
    </div>
  );
};

export default InputThreshold;
