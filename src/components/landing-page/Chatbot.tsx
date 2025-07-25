"use client";
import { useState, useRef, useEffect } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Send, Bot, User } from "lucide-react";

interface Message {
  id: string;
  content: string;
  isUser: boolean;
  timestamp: Date;
}

const ChatBot = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      content:
        "Alright, let's not play hide and seek with some dusty nav bar, okay? You want answers, insights, spicy behind-the-scenes intel? Just talk to me. I'm Greg. I know everything. And I don't need a sitemap to prove it.\n\nDon't be shy, talk to me!",
      isUser: false,
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
    });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const getGregResponse = (userMessage: string): string => {
    const message = userMessage.toLowerCase();

    if (
      message.includes("hello") ||
      message.includes("hi") ||
      message.includes("hey")
    ) {
      return "Hello! Great to meet you! I'm here to revolutionize your post-sales experience. What would you like to know about my capabilities?";
    }

    if (
      message.includes("what") &&
      (message.includes("do") || message.includes("can"))
    ) {
      return "I handle all the boring admin stuff that comes after a sale - contract management, client onboarding, follow-ups, documentation, and so much more. Think of me as your personal admin superhero! 🦸‍♂️";
    }

    if (
      message.includes("price") ||
      message.includes("cost") ||
      message.includes("pricing")
    ) {
      return "Great question! Since I'm still in development, early access users get special pricing and feedback opportunities. Want to get on the early access list?";
    }

    if (message.includes("admin") || message.includes("task")) {
      return "I excel at automating repetitive admin tasks like data entry, client communications, document generation, and workflow management. I free up your time for high-value activities!";
    }

    if (message.includes("how") && message.includes("work")) {
      return "I integrate with your existing tools and learn your workflows. Just tell me what needs to be done, and I'll handle it - from simple data entry to complex multi-step processes!";
    }

    if (
      message.includes("early access") ||
      message.includes("signup") ||
      message.includes("register")
    ) {
      return "Awesome! Scroll down to the registration section to get early access. You'll be among the first to experience the future of post-sales automation!";
    }

    return "That's a great question! I'm designed to make post-sales admin work effortless. Whether it's client management, documentation, or workflow automation - I've got you covered. What specific challenges are you facing?";
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

    // Simulate Greg thinking/typing
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
    <section
      id="chat"
      className="py-24 px-6 bg-background relative overflow-hidden"
    >
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-pulse-glow"></div>
        <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-accent/10 rounded-full blur-3xl animate-pulse-glow animation-delay-2000"></div>
      </div>

      <div className="container mx-auto max-w-4xl relative">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gradient">Chat with Greg</span>
          </h2>
        </div>

        <Card className="backdrop-blur-sm bg-card/50 border-primary/20 shadow-2xl">
          <CardContent className="p-6">
            <div
              className="max-h-80 overflow-y-auto mb-4 space-y-4 scroll-smooth"
              style={{
                height: `${Math.max(200, messages.length * 80 + 50)}px`,
              }}
            >
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex gap-3 ${
                    message.isUser ? "justify-end" : "justify-start"
                  } animate-fade-in`}
                >
                  {!message.isUser && (
                    <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
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
                    <p className="text-sm leading-relaxed">{message.content}</p>
                    <p className="text-xs opacity-70 mt-2">
                      {message.timestamp.toLocaleTimeString([], {
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </p>
                  </div>

                  {message.isUser && (
                    <div className="w-8 h-8 bg-accent/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <User className="w-4 h-4 text-accent-foreground" />
                    </div>
                  )}
                </div>
              ))}

              {isTyping && (
                <div className="flex gap-3 justify-start animate-fade-in">
                  <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <Bot className="w-4 h-4 text-primary" />
                  </div>
                  <div className="bg-muted/50 rounded-2xl px-4 py-3">
                    <div className="flex gap-1">
                      <div className="w-2 h-2 bg-muted-foreground/50 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-muted-foreground/50 rounded-full animate-bounce animation-delay-200"></div>
                      <div className="w-2 h-2 bg-muted-foreground/50 rounded-full animate-bounce animation-delay-400"></div>
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            <div className="flex gap-2">
              <Input
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Ask Greg anything..."
                className="flex-1"
                disabled={isTyping}
              />
              <Button
                onClick={handleSendMessage}
                disabled={!inputValue.trim() || isTyping}
                className="px-4"
              >
                <Send className="w-4 h-4" />
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default ChatBot;
