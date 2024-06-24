import Feed from "./components/Feed";

export default function Home() {
  return (
    <main className='max-w-7xl mx-auto pt-20 min-h-screen'>
      <header>
      <h1 className="text-5xl font-bold mb-6 uppercase tracking-wide">Flickr Feed</h1>
      <p className="text-xl">Welcome to a space that allows you to fetch and view images relevant to your search using tags.</p>
      </header>
      <Feed/>
    </main>
  );
}
