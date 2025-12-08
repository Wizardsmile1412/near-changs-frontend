import { Button } from "@/components/ui/button";

export default function HomePage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-background">
      <div className="max-w-2xl text-center space-y-4 px-4">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
          Near Changs
        </h1>
        <p className="text-muted-foreground">
          Find and book trusted home repair services near you.
        </p>
        <div className="flex justify-center gap-3 mt-4">
          <Button>Get Started</Button>
          <Button variant="outline">Browse Services</Button>
        </div>
      </div>
    </main>
  );
}
