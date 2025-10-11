import { Link } from "react-router-dom";

// --- Helper Icon Components (for card details) ---
const FileIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    fill="currentColor"
    className="w-4 h-4"
  >
    <path d="M4 2a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V5.59a1 1 0 0 0-.293-.707l-2.828-2.828A1 1 0 0 0 9.59 2H4Zm0 9h8v1H4v-1Zm0-3h8v1H4v-1Zm0-3h5v1H4V5Z" />
  </svg>
);
const ClockIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    fill="currentColor"
    className="w-4 h-4"
  >
    <path
      fillRule="evenodd"
      d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14Zm.75-10.25a.75.75 0 0 0-1.5 0v3.5c0 .26.104.512.293.702l2.5 2.5a.75.75 0 0 0 1.06-1.062L8.75 8.44V4.75Z"
      clipRule="evenodd"
    />
  </svg>
);
const HashIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    fill="currentColor"
    className="w-4 h-4"
  >
    <path d="M8.016 3.11A.75.75 0 0 1 8.75 3h.5a.75.75 0 0 1 .75.75v.516a.75.75 0 0 1-1.5 0v-.016h.016v.016a.75.75 0 0 1-1.5 0v-1.14a.75.75 0 0 1 .016-.16Zm-2 0A.75.75 0 0 1 6.75 3h.5a.75.75 0 0 1 .75.75v.516a.75.75 0 0 1-1.5 0v-.016h.016v.016a.75.75 0 0 1-1.5 0v-1.14a.75.75 0 0 1 .016-.16ZM5.5 6.75a.75.75 0 0 0 0 1.5h.516a.75.75 0 0 0 0-1.5H5.5Zm3 0a.75.75 0 0 0 0 1.5h.516a.75.75 0 0 0 0-1.5H8.5Zm-4 3.5a.75.75 0 0 1 .75-.75h1.14a.75.75 0 0 1 0 1.5h-.016v.016a.75.75 0 0 1-1.5 0v-.516h-.016a.75.75 0 0 1-.75-.75Zm2 0a.75.75 0 0 1 .75-.75h1.14a.75.75 0 0 1 0 1.5h-.016v.016a.75.75 0 0 1-1.5 0v-.516h-.016a.75.75 0 0 1-.75-.75Zm2 0a.75.75 0 0 1 .75-.75h1.14a.75.75 0 0 1 0 1.5h-.016v.016a.75.75 0 0 1-1.5 0v-.516h-.016a.75.75 0 0 1-.75-.75Z" />
  </svg>
);
const PlusIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="w-6 h-6"
  >
    <path
      fillRule="evenodd"
      d="M12 3.75a.75.75 0 0 1 .75.75v6.75h6.75a.75.75 0 0 1 0 1.5h-6.75v6.75a.75.75 0 0 1-1.5 0v-6.75H4.5a.75.75 0 0 1 0-1.5h6.75V4.5a.75.75 0 0 1 .75-.75Z"
      clipRule="evenodd"
    />
  </svg>
);

// --- Reusable Workflow Card Component ---
const WorkflowCard = ({ id, name, created }) => {
  return (
    <Link to={`/workflow/${id}`} className="cursor-pointer group">
      {/* Card Thumbnail */}
      <div className="aspect-square bg-[#1C1C1E] rounded-2xl flex items-center justify-center p-4 border border-stroke group-hover:border-accent transition-colors">
        {/* Placeholder visual */}
        <div className="flex items-center justify-center w-16 h-16 border-2 border-dashed rounded-full border-stroke/50">
          <div className="w-4 h-4 rounded-full bg-accent/50"></div>
        </div>
      </div>
      {/* Card Details */}
      <div className="p-2 mt-4 space-y-1">
        <div className="flex items-center gap-2 text-sm text-slate-400">
          <HashIcon />
          <span># {id.slice(0, 5).toUpperCase()}</span>
        </div>
        <h3 className="flex items-center gap-2 font-bold text-white text-md">
          <FileIcon />
          {name}
        </h3>
        <p className="flex items-center gap-2 text-xs text-slate-400">
          <ClockIcon />
          Created {created}
        </p>
      </div>
    </Link>
  );
};

// --- Main Workflow Page ---
export default function WorkflowPage() {
  // In a real app, this data would come from an API
  const recentWorkflows = [
    { id: "56345", name: "My work Name", created: "5 days ago" },
    { id: "98765", name: "Client Onboarding Flow", created: "2 days ago" },
    { id: "12345", name: "Social Media Automation", created: "1 week ago" },
  ];

  // Generate a new random ID for the "Add work" card
  const newWorkflowId = crypto.randomUUID();

  return (
    <div className="w-full min-h-screen bg-brand-dark">
      <div className="p-8 mx-auto text-white max-w-7xl">
        {/* Header Section (Profile part is ignored as requested) */}
        <header className="mb-12">
          <h1 className="text-3xl font-bold">All Works</h1>
        </header>

        {/* Recent Workflows Section */}
        <main>
          <h2 className="mb-6 text-xl font-semibold">Recent Workflows</h2>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {/* Map over workflow data to render reusable cards */}
            {recentWorkflows.map((workflow) => (
              <WorkflowCard
                key={workflow.id}
                id={workflow.id}
                name={workflow.name}
                created={workflow.created}
              />
            ))}

            {/* "Add New Work" Card */}
            <Link to={`/workflow/${newWorkflowId}`} className="group">
              <div className="flex flex-col items-center justify-center p-4 transition-colors bg-transparent border-2 border-dashed cursor-pointer aspect-square rounded-2xl border-stroke text-slate-400 group-hover:border-accent group-hover:text-accent">
                <div className="flex items-center justify-center w-12 h-12 mb-4 border-2 border-current rounded-full">
                  <PlusIcon />
                </div>
                <span className="font-semibold">Add work</span>
              </div>
            </Link>
          </div>
        </main>
      </div>
    </div>
  );
}
