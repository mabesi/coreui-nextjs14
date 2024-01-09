import Link from "next/link";

function HomePage() {
  return (
    <div className="bg-info-subtle p-2">
      <h3>Home page...</h3>
      <hr />
      <Link href="/dashboard" >Dashboard</Link><br />
      <Link href="/login" >Login</Link><br />
      <Link href="/register" >Register</Link>
    </div>
  )
};

export default HomePage;