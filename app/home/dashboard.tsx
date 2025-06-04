import { ChartAreaInteractive } from "~/components/chart-area-interactive";
import { DataTable } from "~/components/data-table";
import { SectionCards } from "~/components/section-cards";

import data from "./data.json";
export function Dashboard() {
  return (
    // <div className="min-h-screen p-4 flex flex-col gap-4 bg-gray-100">
    //   {/* 三栏响应式：在中屏以上为三列，以下为自动堆叠 */}
    //   <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
    //     <div className="aspect-video rounded-xl bg-red-300 flex items-center justify-center">
    //       <span>区块 1</span>
    //     </div>
    //     <div className="aspect-video rounded-xl bg-green-300 flex items-center justify-center">
    //       <span>区块 2</span>
    //     </div>
    //     <div className="aspect-video rounded-xl bg-blue-300 flex items-center justify-center">
    //       <span>区块 3</span>
    //     </div>
    //     <div className="aspect-video rounded-xl bg-red-300 flex items-center justify-center">
    //       <span>区块 4</span>
    //     </div>
    //   </div>

    //   {/* 下方内容块：全屏显示时可填满余下高度 */}
    //   <div className="flex-1 min-h-[300px] rounded-xl bg-purple-300 flex items-center justify-center">
    //     <span>主内容区（自动填满剩余高度）</span>
    //   </div>
    // </div>
    <div className="flex flex-1 flex-col">
      <div className="@container/main flex flex-1 flex-col gap-2">
        <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
          <SectionCards />
          <div className="px-4 lg:px-6">
            <ChartAreaInteractive />
          </div>
          <DataTable data={data} />
        </div>
      </div>
    </div>
  );
}
