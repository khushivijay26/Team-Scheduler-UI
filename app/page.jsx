import Topbar from "@/components/Topbar";
import Timeline from "@/components/Timeline";
import AssignPanel from "@/components/AssignPanel";
function Page() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Topbar />
      <div className="px-3 py-3">
        <div className="grid grid-cols-1 xl:grid-cols-[1fr_360px] gap-6">
          <Timeline />
          <AssignPanel />
        </div>
      </div>
    </main>
  );
}

export default Page;