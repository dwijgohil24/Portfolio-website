export const projects = [
  {
    title: "RouteIQ — AI-Powered Logistics Itinerary Planner",
    description:
      "LangChain + GPT-4 logistics agent that processes delivery constraints and generates optimized itineraries with stop sequencing, risk flags, fuel cost estimates, and on-time probability scores — reducing manual planning time by 80%.",
    bullets: [
      "Designed a LangChain and OpenAI GPT-4 logistics agent for optimized itinerary generation with risk flags and fuel cost estimates",
      "Engineered TF-IDF, KMeans, and PCA clustering for stop grouping and Nearest-Neighbour TSP optimizer using Haversine distance — cutting total route distance by up to 25%",
    ],
    tech: ["Python", "LangChain", "OpenAI GPT-4", "Scikit-learn", "Streamlit"],
    metric: "80% less planning time · 25% shorter routes",
    github: "https://github.com/dwijgohil24",
    color: "cyan",
  },
  {
    title: "Real-Time Chat Web Application",
    description:
      "Sub-50ms latency chat platform using Django Channels and WebSocket protocol, supporting 10+ concurrent users across independent chatrooms with zero message loss during load testing.",
    bullets: [
      "Launched a sub-50ms latency chat platform using Django Channels, WebSocket protocol, and Python supporting 10+ concurrent users",
      "Hardened application security using Django session-based authentication and CSRF token validation — blocking 100% of simulated CSRF attacks in QA testing",
    ],
    tech: ["Python", "Django Channels", "WebSockets", "HTML5", "Tailwind CSS"],
    metric: "<50ms latency · 0 message loss",
    github: "https://github.com/dwijgohil24",
    color: "purple",
  },
];
