import { thingsboard } from "@/lib/tbClient";
import { Loader } from "lucide-react";
import moment from "moment";
import { redirect } from "next/navigation";
import { useEffect, useState } from "react";
import { Chart } from "react-google-charts";
import { TbEntity } from "thingsboard-api-client";

interface TelemetryChartProps {
  entityId: string;
  entityType: TbEntity;
  targetkey: string;
  label: string;
  startTs: number;
  endTs: number;
}
const formattedData = (label: string, key: string, data: any) => {
  const tempdata = data[key]
    .map((val: any, idx: number) => [
      moment(data[key][idx].ts).format("HH:mm DD-MM-YYYY"),
      parseFloat(data[key][idx].value),
    ])
    .sort();
  return [["Thời gian", label], ...tempdata];
};

const TelemetryChart = ({
  entityId,
  entityType,
  label,
  targetkey,
  startTs,
  endTs,
}: TelemetryChartProps) => {
  const [data, setData] = useState() as any;
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      redirect("/login");
    }
    const getData = async () => {
      setLoading(true);
      const data = await thingsboard.telemetry().getTimeseries(
        token,
        {
          entityId,
          entityType,
        },
        {
          keys: targetkey,
          startTs,
          endTs,
        }
      );
      const formatData = formattedData(label, targetkey, data);
      setData(formatData);
      setLoading(false);
    };
    getData();
  }, [endTs, entityId, entityType, label, targetkey, startTs]);

  const options = {
    title: label,
    curveType: "function",
    legend: { position: "bottom" },
  };

  return (
    <div className="container mx-0 lg:mx-auto px-0 py-4">
      {/* Loader */}
      {loading && (
        <div className="flex justify-center items-center">
          <Loader className="h-6 w-6 animate-spin text-gray-500" />
        </div>
      )}

      {/* Chart */}
      {data != null && (
        <div className="w-full overflow-x-auto">
          <Chart
            chartType="LineChart"
            width="100%"
            height="400px"
            data={data}
            options={options}
          />
        </div>
      )}
    </div>
  );
};

export default TelemetryChart;
