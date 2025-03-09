import Button from './components/Button';

export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="text-center">
        <h1 className="text-2xl font-bold mb-4">Tailwind is Working! 🚀</h1>
        <Button label="Click Me" onClick={() => alert('Button Clicked!')} />
      </div>
    </div>
  );
}
