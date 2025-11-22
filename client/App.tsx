import "./global.css";

import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/hooks/useAuth";
import Index from "./pages/Index";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import ProtectedProfile from "./pages/ProtectedProfile";
import ProfileStats from "./pages/ProfileStats";
import ProtectedStats from "./pages/ProtectedStats";
import PublicProfile from "./pages/PublicProfile";
import Requests from "./pages/Requests";
import ProtectedRequests from "./pages/ProtectedRequests";
import Settings from "./pages/Settings";
import ProtectedSettings from "./pages/ProtectedSettings";
import FindRequests from "./pages/FindRequests";
import RequestData from "./pages/RequestData";
import CreateRequest from "./pages/CreateRequest";
import ProtectedCreateRequest from "./pages/ProtectedCreateRequest";
import Leaderboard from "./pages/Leaderboard";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

export const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/:username/profile" element={<Profile />} />
            <Route path="/profile" element={<ProtectedProfile />} />
            <Route path="/:username/stats" element={<ProfileStats />} />
            <Route path="/stats" element={<ProtectedStats />} />
            <Route path="/public-profile" element={<PublicProfile />} />
            <Route path="/:username/requests" element={<Requests />} />
            <Route path="/requests" element={<ProtectedRequests />} />
            <Route path="/:username/settings" element={<Settings />} />
            <Route path="/settings" element={<ProtectedSettings />} />
            <Route path="/find-requests" element={<FindRequests />} />
            <Route path="/request-data" element={<RequestData />} />
            <Route
              path="/:username/create-request"
              element={<CreateRequest />}
            />
            <Route
              path="/create-request"
              element={<ProtectedCreateRequest />}
            />
            <Route path="/leaderboard" element={<Leaderboard />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </AuthProvider>
  </QueryClientProvider>
);
