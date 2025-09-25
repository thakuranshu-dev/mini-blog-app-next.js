export default async function Home() {
  const res = await fetch('http://localhost:3000/api/info');
  const info = await res.json();
  
  const updatedTime = new Date().toLocaleString(
    "en-IN", 
    { timeZone: "Asia/Kolkata" },
  );


  return(
    <div className="p-6 h-screen flex flex-col justify-center items-center">
      <div className="p-4 rounded border border-blue-500">
        <h1 className="text-3xl font-bold mb-4">Welcome to the Home Page</h1>
        <div className="bg-gray-100 p-4 rounded text-gray-900">
          <p><strong>App Name:</strong> {info.name}</p>
          <p><strong>Author:</strong> {info.author}</p>
        </div>

        <div className="bg-yellow-100 p-4 rounded mt-3.5 text-green-950">
          <p><strong>Last Updated Time (IST):</strong></p>
          <p>{updatedTime}</p>
        </div>
      </div>
    </div>
  );
}