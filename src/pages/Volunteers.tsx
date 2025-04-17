
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Award, Star } from "lucide-react";

const Volunteers = () => {
  const topVolunteers = [
    {
      id: 1,
      name: "Dr. Arvind Deshmukh",
      avatar: "/placeholder.svg",
      role: "Mathematics and Science",
      hours: 156,
      rating: 4.9,
      bio: "Experienced math teacher with a passion for making complex concepts accessible to all students."
    },
    {
      id: 2,
      name: "Priya Nair",
      avatar: "/placeholder.svg",
      role: "English and Phonics",
      hours: 142,
      rating: 4.8,
      bio: "Specializes in early childhood education and phonics-based learning. She has worked with various NGOs to enhance reading and writing skills in rural schools."
    },
    {
      id: 3,
      name: "Sanjay Kulkarni",
      avatar: "/placeholder.svg",
      role: "Social Studies and Marathi",
      hours: 128,
      rating: 4.7,
      bio: "Passionate about preserving and teaching Marathi literature, he makes history come alive through storytelling and interactive activities"
    },
    {
      id: 4,
      name: "Neha Iyer",
      avatar: "/placeholder.svg",
      role: "Computer Science",
      hours: 80,
      rating: 4.9,
      bio: "Introduces students to the world of coding in a fun and interactive way. She has conducted numerous workshops on digital literacy for rural schools."
    },
    {
      id: 5,
      name: "Vandana Sharma",
      avatar: "/placeholder.svg",
      role: "Physics and Astronomy",
      hours: 115,
      rating: 4.6,
      bio: "MSc in Physics, has worked with ISRO-backed educational programs and believes in making science hands-on and exciting for students."
    },
    {
      id: 6,
      name: "Ananya Sen",
      avatar: "/placeholder.svg",
      role: "Economics and Business Studies",
      hours: 134,
      rating: 4.8,
      bio: "MBA in finance, simplifies economic concepts and promotes financial literacy among high school students, encouraging them to think critically about real-world economic issues."
    }
  ];

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <section className="bg-orange-50 py-12">
          <div className="container">
            <div className="text-center">
              <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
                Volunteer Leaderboard
              </h1>
              <p className="mt-4 text-lg text-muted-foreground">
                Recognizing our most dedicated volunteers who are making a difference in education
              </p>
            </div>
          </div>
        </section>

        <section className="py-12">
          <div className="container">
            <div className="mb-10 flex items-center justify-between">
              <h2 className="text-2xl font-bold">Top Volunteers</h2>
              <Button>Become a Volunteer</Button>
            </div>
            
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {topVolunteers.map((volunteer) => (
                <Card key={volunteer.id}>
                  <CardHeader className="pb-2">
                    <div className="flex items-center space-x-4">
                      <Avatar className="h-12 w-12">
                        <AvatarImage src={volunteer.avatar} alt={volunteer.name} />
                        <AvatarFallback>{volunteer.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <div>
                        <CardTitle className="text-lg">{volunteer.name}</CardTitle>
                        <CardDescription>{volunteer.role}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{volunteer.bio}</p>
                    <div className="mt-4 flex items-center space-x-4">
                      <div className="flex items-center space-x-1">
                        <Award className="h-4 w-4 text-amber-500" />
                        <span className="text-sm font-medium">{volunteer.hours} hours</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Star className="h-4 w-4 text-amber-500" />
                        <span className="text-sm font-medium">{volunteer.rating}/5.0</span>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full">View Profile</Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Volunteers;
