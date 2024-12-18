import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Loader } from "lucide-react";
import moment from "moment";

interface LatestTelemetryCardProps {
  loading: boolean;
  title: string;
  data?: any;
  isBoolean?: boolean;
  booleanArr?: string[];
  isInteger?: boolean;
  unit?: string;
  children?: React.ReactNode;
  className?: any;
}

const LatestTelemetryCard: React.FC<LatestTelemetryCardProps> = ({
  loading,
  title,
  data,
  unit,
  isBoolean = false,
  isInteger = false,
  children,
  className,
  booleanArr,
}) => {
  if (booleanArr?.length == 0) {
    booleanArr = ["Đang bật", "Đang tắt"];
  }
  return (
    <Card className={cn(`${className} p-4 sm:p-6`)}>
      {/* Card Header */}
      <CardHeader className="flex flex-row items-center justify-center space-y-0">
        <CardTitle className="text-sm sm:text-base font-medium">{title}</CardTitle>
      </CardHeader>
  
      {/* Card Content */}
      <CardContent>
        <div
          className="text-2xl sm:text-3xl font-bold flex gap-2 items-center justify-center"
          suppressHydrationWarning
        >
          {/* Loading State */}
          {loading && (
            <Loader className="h-4 w-4 animate-spin text-gray-400" />
          )}
  
          {/* Data Display */}
          {!isBoolean && data && (
            <>
              {isInteger ? Math.round(data?.["value"]) : data?.["value"]}
              <span className="text-base sm:text-lg">{unit}</span>
            </>
          )}
  
          {/* Boolean Data Display */}
          {isBoolean && data && (
            <p className="text-sm sm:text-base">
              {data?.["value"] === "true" ? booleanArr?.[0] : booleanArr?.[1]}
            </p>
          )}
        </div>
  
        {/* Update Timestamp */}
        <div className="text-xs sm:text-sm text-gray-400 mt-2 text-center">
          Cập nhật {moment(data?.["ts"]).format("HH:mm:ss DD/MM/YYYY")}
        </div>
  
        {/* Children Components */}
        <div className="mt-4">{children}</div>
      </CardContent>
    </Card>
  );  
};

export default LatestTelemetryCard;
