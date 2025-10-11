import { useParams } from "react-router-dom";

export default function CanvasPage() {
  // Get the 'id' parameter from the URL
  const { id } = useParams();

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold">Workflow Canvas</h1>
      <p className="mt-4 text-lg">
        You are editing workflow with ID:{" "}
        <span className="px-2 py-1 font-mono rounded text-lime-400 bg-slate-800">
          {id}
        </span>
      </p>
    </div>
  );
}
