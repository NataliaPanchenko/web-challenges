import Link from "../components/Link";
import QuickActions from "../components/QuickActions";

export default function Actions({ lights, litRooms, onAllOff, onAllOn }) {
  return (
    <>
      <Link href="/">← Back home</Link>
      <h1>Quick Actions</h1>
      <QuickActions
        lights={lights}
        litRooms={litRooms}
        onAllOff={onAllOff}
        onAllOn={onAllOn}
      />
    </>
  );
}
