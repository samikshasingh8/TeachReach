
import { useState } from "react";
import { DashboardLayout } from "@/components/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Search, Send, Paperclip, Users, FileText, Video } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";

const VolunteerMessaging = () => {
  const { toast } = useToast();
  const [message, setMessage] = useState("");
  const [activeChat, setActiveChat] = useState(1);
  
  const contacts = [
    {
      id: 1,
      name: "Vandana Sharma",
      role: "Student",
      avatar: "https://th.bing.com/th/id/OIP.iVy4GvweG9y9afOBzrdMPwHaE7?w=283&h=189&c=7&r=0&o=5&dpr=1.3&pid=1.7",
      school: "Zilla Parishad High School, Pune",
      lastMessage: "Can you explain question 3 from the homework?",
      time: "10:30 AM",
      unread: 2
    },
    {
      id: 2,
      name: "Rohan Sharma",
      role: "Student",
      avatar: "https://th.bing.com/th/id/OIP.ELRfIfmoMKku3Upf5le8ugHaE8?w=283&h=189&c=7&r=0&o=5&dpr=1.3&pid=1.7",
      school: "Zilla Parishad High School, Mumbai",
      lastMessage: "Thanks for the help yesterday!",
      time: "Yesterday",
      unread: 0
    },
    {
      id: 3,
      name: "Dr. Meera Joshi",
      role: "School Admin",
      avatar: "https://img.freepik.com/premium-photo/smiling-indian-teacher-holding-books-with-students-classroom-background_1076263-2664.jpg",
      school: "Zilla Parishad High School, Hyderabad",
      lastMessage: "Can we schedule a call to discuss the curriculum?",
      time: "Yesterday",
      unread: 0
    },
    {
      id: 4,
      name: "Madhav Gupta",
      role: "Student",
      avatar: "data:image/jpeg;base64,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",
      school: "Zilla Parishad Primary School, Pune",
      lastMessage: "I'm having trouble with the algebra homework.",
      time: "Monday",
      unread: 0
    },
    {
      id: 5,
      name: "Advanced Math Group",
      role: "Group",
      avatar: "/placeholder.svg",
      members: 24,
      lastMessage: "Prof. Deepak: Remember to submit your projects by Friday!",
      time: "Tuesday",
      unread: 0
    }
  ];
  
  const messages = [
    {
      id: 1,
      sender: "Prisha Gautam",
      text: "Hi, I'm having trouble understanding the quadratic formula. Could you help me?",
      time: "10:15 AM",
      isUser: false
    },
    {
      id: 2,
      sender: "You",
      text: "Of course! The quadratic formula is used to solve equations in the form ax² + bx + c = 0. The formula is x = (-b ± √(b² - 4ac)) / 2a.",
      time: "10:20 AM",
      isUser: true
    },
    {
      id: 3,
      sender: "Prisha Gautam",
      text: "Thank you, but I'm still confused about how to use it. Can you explain question 3 from the homework?",
      time: "10:30 AM",
      isUser: false
    }
  ];
  
  const handleSendMessage = () => {
    if (!message.trim()) return;
    
    toast({
      title: "Message Sent",
      description: "Your message has been delivered."
    });
    
    setMessage("");
  };

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Messaging</h1>
          <p className="text-muted-foreground">
            Communicate with students and school administrators
          </p>
        </div>
        
        <div className="grid h-[75vh] grid-cols-1 gap-4 md:grid-cols-3">
          {/* Contacts sidebar */}
          <Card className="md:col-span-1">
            <CardHeader className="p-4">
              <div className="flex items-center justify-between">
                <CardTitle className="text-lg">Conversations</CardTitle>
                <Button variant="ghost" size="icon">
                  <Users className="h-5 w-5" />
                </Button>
              </div>
              <div className="relative mt-2">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input 
                  type="search" 
                  placeholder="Search messages..." 
                  className="pl-8" 
                />
              </div>
            </CardHeader>
            <CardContent className="p-0">
              <div className="h-[calc(75vh-8rem)] overflow-auto">
                {contacts.map((contact) => (
                  <div 
                    key={contact.id}
                    className={`flex cursor-pointer items-center gap-3 border-b p-4 transition-colors hover:bg-muted/50 ${
                      activeChat === contact.id ? "bg-muted" : ""
                    }`}
                    onClick={() => setActiveChat(contact.id)}
                  >
                    <Avatar className="h-12 w-12">
                      <AvatarImage src={contact.avatar} alt={contact.name} />
                      <AvatarFallback>{contact.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div className="flex-1 overflow-hidden">
                      <div className="flex items-center justify-between">
                        <h3 className="font-medium">{contact.name}</h3>
                        <span className="text-xs text-muted-foreground">{contact.time}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Badge variant="outline" className="font-normal">
                          {contact.role}
                        </Badge>
                        {contact.role === "Group" ? (
                          <span className="text-xs text-muted-foreground">
                            {contact.members} members
                          </span>
                        ) : (
                          <span className="text-xs text-muted-foreground">
                            {contact.school}
                          </span>
                        )}
                      </div>
                      <p className="truncate text-sm text-muted-foreground">
                        {contact.lastMessage}
                      </p>
                    </div>
                    {contact.unread > 0 && (
                      <div className="flex h-5 w-5 items-center justify-center rounded-full bg-orange-500 text-xs text-white">
                        {contact.unread}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
          
          {/* Chat area */}
          <Card className="flex flex-col md:col-span-2">
            <CardHeader className="border-b p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Avatar>
                    <AvatarImage src={contacts[0].avatar} alt={contacts[0].name} />
                    <AvatarFallback>{contacts[0].name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div>
                    <CardTitle className="text-lg">{contacts[0].name}</CardTitle>
                    <div className="flex items-center gap-2">
                      <Badge variant="outline" className="font-normal">
                        {contacts[0].role}
                      </Badge>
                      <span className="text-xs text-muted-foreground">
                        {contacts[0].school}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex gap-1">
                  <Button variant="ghost" size="icon">
                    <Video className="h-5 w-5" />
                  </Button>
                  <Button variant="ghost" size="icon">
                    <FileText className="h-5 w-5" />
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent className="flex-1 overflow-auto p-4" style={{ maxHeight: "calc(75vh - 14rem)" }}>
              <div className="space-y-4">
                {messages.map((msg) => (
                  <div 
                    key={msg.id}
                    className={`flex ${msg.isUser ? "justify-end" : "justify-start"}`}
                  >
                    <div className={`max-w-[80%] rounded-lg p-3 ${
                      msg.isUser 
                        ? "bg-orange-500 text-white" 
                        : "bg-muted"
                    }`}>
                      {!msg.isUser && (
                        <div className="mb-1 font-medium">{msg.sender}</div>
                      )}
                      <p>{msg.text}</p>
                      <div className={`mt-1 text-right text-xs ${
                        msg.isUser ? "text-orange-100" : "text-muted-foreground"
                      }`}>
                        {msg.time}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
            <div className="border-t p-4">
              <div className="flex items-center gap-2">
                <Button variant="ghost" size="icon">
                  <Paperclip className="h-5 w-5" />
                </Button>
                <Input 
                  placeholder="Type your message..." 
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                      handleSendMessage();
                    }
                  }}
                />
                <Button onClick={handleSendMessage}>
                  <Send className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default VolunteerMessaging;
