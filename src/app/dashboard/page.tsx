"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Send, Users, BarChart3, Settings, Bot, User } from "lucide-react";
import Link from "next/link";

interface Message {
  id: string;
  content: string;
  isUser: boolean;
  timestamp: Date;
}

const Dashboard = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [activeSection, setActiveSection] = useState("chat");
  const [hasStarted, setHasStarted] = useState(false);

  const sidebarItems = [
    { id: "customers", label: "Customers", icon: Users },
    { id: "charts", label: "Charts", icon: BarChart3 },
    { id: "settings", label: "Settings", icon: Settings },
  ];

  const getGregResponse = (userMessage: string): string => {
    const message = userMessage.toLowerCase();
    if (
      message.includes("hello") ||
      message.includes("hi") ||
      message.includes("hey")
    ) {
      return "Hello! I'm Greg, your AI post-sales assistant. How can I help you today?";
    }
    if (
      message.includes("what") &&
      (message.includes("do") || message.includes("can"))
    ) {
      return "I can help you manage customers, analyze data, automate workflows, and handle all your post-sales admin tasks. What would you like me to help with?";
    }
    return "I'm here to help with your post-sales operations. Feel free to ask me anything!";
  };

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;

    const newUserMessage: Message = {
      id: Date.now().toString(),
      content: inputValue,
      isUser: true,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, newUserMessage]);
    setInputValue("");
    setIsTyping(true);
    if (!hasStarted) setHasStarted(true);

    setTimeout(() => {
      const gregResponse: Message = {
        id: (Date.now() + 1).toString(),
        content: getGregResponse(inputValue),
        isUser: false,
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, gregResponse]);
      setIsTyping(false);
    }, 1000 + Math.random() * 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="min-h-screen bg-background flex">
      {/* Sidebar */}
      <div className="w-64 bg-card border-r border-border flex flex-col">
        <div className="p-6 border-b border-border">
          <h1 className="text-xl font-bold text-foreground">
            <Link href="/">
              Greg
              <span className="text-muted-foreground italic">the AI</span>
            </Link>{" "}
          </h1>
        </div>

        <nav className="flex-1 p-4">
          <ul className="space-y-2">
            {sidebarItems.map((item) => {
              const Icon = item.icon;
              return (
                <li key={item.id}>
                  <button
                    onClick={() => setActiveSection(item.id)}
                    className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-left transition-colors ${
                      activeSection === item.id
                        ? "bg-primary/10 text-primary"
                        : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                    {item.label}
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="p-4 border-t border-border">
          <Button className="w-full bg-primary text-primary-foreground hover:bg-primary-dark">
            Upgrade
          </Button>
        </div>
      </div>

      {/* Main Area */}
      <div className="flex-1 flex flex-col">
        <header className="h-16 bg-card border-b border-border flex items-center justify-end px-6">
          <Button
            variant="outline"
            className="bg-primary text-primary-foreground hover:bg-primary-dark border-primary"
          >
            Sign in
          </Button>
        </header>

        {/* Layout Switcher */}
        {hasStarted ? (
          <div className="flex-1 flex p-8 gap-6 transition-all">
            {/* Left Panel */}
            <div className="flex-1 p-6">
              <div
                className="h-full rounded-lg p-6 backdrop-blur-sm"
                style={{
                  backgroundColor: "hsl(var(--sidebar-bg) / 0.5)",
                  border: "1px solid hsl(var(--border-accent))",
                }}
              >
                <h3 className="text-xl font-semibold text-text-primary mb-4">
                  Customer Data
                </h3>
                <div className="overflow-auto">
                  <table className="w-full">
                    <thead>
                      <tr
                        className="border-b"
                        style={{ borderColor: "hsl(var(--border-accent))" }}
                      >
                        <th className="text-left py-3 text-text-primary font-semibold">
                          Name
                        </th>
                        <th className="text-left py-3 text-text-primary font-semibold">
                          Email
                        </th>
                        <th className="text-left py-3 text-text-primary font-semibold">
                          Status
                        </th>
                        <th className="text-left py-3 text-text-primary font-semibold">
                          Last Active
                        </th>
                      </tr>
                    </thead>
                    <tbody className="space-y-2">
                      <tr
                        className="border-b"
                        style={{
                          borderColor: "hsl(var(--border-accent) / 0.3)",
                        }}
                      >
                        <td className="py-3 text-text-secondary">John Smith</td>
                        <td className="py-3 text-text-muted">
                          john@example.com
                        </td>
                        <td className="py-3">
                          <span className="px-2 py-1 rounded-full text-xs bg-green-500/20 text-green-400">
                            Active
                          </span>
                        </td>
                        <td className="py-3 text-text-muted">2 hours ago</td>
                      </tr>
                      <tr
                        className="border-b"
                        style={{
                          borderColor: "hsl(var(--border-accent) / 0.3)",
                        }}
                      >
                        <td className="py-3 text-text-secondary">
                          Sarah Johnson
                        </td>
                        <td className="py-3 text-text-muted">
                          sarah@example.com
                        </td>
                        <td className="py-3">
                          <span className="px-2 py-1 rounded-full text-xs bg-yellow-500/20 text-yellow-400">
                            Pending
                          </span>
                        </td>
                        <td className="py-3 text-text-muted">1 day ago</td>
                      </tr>
                      <tr
                        className="border-b"
                        style={{
                          borderColor: "hsl(var(--border-accent) / 0.3)",
                        }}
                      >
                        <td className="py-3 text-text-secondary">Mike Chen</td>
                        <td className="py-3 text-text-muted">
                          mike@example.com
                        </td>
                        <td className="py-3">
                          <span className="px-2 py-1 rounded-full text-xs bg-green-500/20 text-green-400">
                            Active
                          </span>
                        </td>
                        <td className="py-3 text-text-muted">30 minutes ago</td>
                      </tr>
                      <tr
                        className="border-b"
                        style={{
                          borderColor: "hsl(var(--border-accent) / 0.3)",
                        }}
                      >
                        <td className="py-3 text-text-secondary">
                          Emma Wilson
                        </td>
                        <td className="py-3 text-text-muted">
                          emma@example.com
                        </td>
                        <td className="py-3">
                          <span className="px-2 py-1 rounded-full text-xs bg-red-500/20 text-red-400">
                            Inactive
                          </span>
                        </td>
                        <td className="py-3 text-text-muted">3 days ago</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* Right Panel - Chat */}
            <div className="w-96 flex flex-col">
              <Card className="mb-4 bg-card/50 backdrop-blur-sm border-primary/20 flex-1 overflow-hidden">
                <CardContent className="p-6 overflow-y-auto space-y-4 scroll-smooth">
                  {messages.map((message) => (
                    <div
                      key={message.id}
                      className={`flex gap-3 ${
                        message.isUser ? "justify-end" : "justify-start"
                      } animate-fade-in`}
                    >
                      {!message.isUser && (
                        <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center mt-1">
                          <Bot className="w-4 h-4 text-primary" />
                        </div>
                      )}
                      <div
                        className={`max-w-[80%] rounded-2xl px-4 py-3 ${
                          message.isUser
                            ? "bg-primary text-primary-foreground"
                            : "bg-muted/50 text-foreground"
                        }`}
                      >
                        <p className="text-sm">{message.content}</p>
                        <p className="text-xs opacity-70 mt-2">
                          {message.timestamp.toLocaleTimeString([], {
                            hour: "2-digit",
                            minute: "2-digit",
                          })}
                        </p>
                      </div>
                      {message.isUser && (
                        <div className="w-8 h-8 bg-accent/20 rounded-full flex items-center justify-center mt-1">
                          <User className="w-4 h-4 text-accent" />
                        </div>
                      )}
                    </div>
                  ))}
                  {isTyping && (
                    <div className="flex gap-3 justify-start animate-fade-in">
                      <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center">
                        <Bot className="w-4 h-4 text-primary" />
                      </div>
                      <div className="bg-muted/50 rounded-2xl px-4 py-3">
                        <div className="flex gap-1">
                          <div className="w-2 h-2 bg-muted-foreground/50 rounded-full animate-bounce"></div>
                          <div className="w-2 h-2 bg-muted-foreground/50 rounded-full animate-bounce delay-150"></div>
                          <div className="w-2 h-2 bg-muted-foreground/50 rounded-full animate-bounce delay-300"></div>
                        </div>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>

              {/* Chat Input */}
              <div className="relative">
                <Input
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Send a message..."
                  className="w-full pr-12 h-12 bg-input border-input-border focus:border-input-focus rounded-xl"
                  disabled={isTyping}
                  onKeyPress={handleKeyPress}
                />
                <Button
                  onClick={handleSendMessage}
                  disabled={!inputValue.trim() || isTyping}
                  className="absolute right-2 top-2 h-8 w-8 p-0 bg-primary hover:bg-primary-dark"
                >
                  <Send className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        ) : (
          // Initial Centered Layout
          <div className="flex-1 flex items-center justify-center p-8">
            <div className="w-full max-w-4xl">
              <div className="text-center mb-8">
                <h3 className="text-3xl font-bold text-foreground mb-4">
                  Welcome to the Chat Interface
                </h3>
                <p className="text-lg text-muted-foreground">
                  Start a conversation with Greg the AI
                </p>
              </div>

              {/* Chat Input Only */}
              <div className="relative">
                <Input
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Send a message..."
                  className="w-full pr-12 h-12 bg-input border-input-border focus:border-input-focus rounded-xl"
                  disabled={isTyping}
                  onKeyPress={handleKeyPress}
                />
                <Button
                  onClick={handleSendMessage}
                  disabled={!inputValue.trim() || isTyping}
                  className="absolute right-2 top-2 h-8 w-8 p-0 bg-primary hover:bg-primary-dark"
                >
                  <Send className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
