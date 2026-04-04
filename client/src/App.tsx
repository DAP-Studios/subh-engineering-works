import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Testimonials from "./pages/Testimonials";
import Comparison from "./pages/Comparison";
import FAQ from "./pages/FAQ";
import Resources from "./pages/Resources";

function Router() {
  return (
    <Switch>
      <Route path={"/"} component={Home} />
      <Route path={"/about"} component={About} />
      <Route path={"/products"} component={Products} />
      <Route path={"/services"} component={Services} />
      <Route path={"/testimonials"} component={Testimonials} />
      <Route path={"/comparison"} component={Comparison} />
      <Route path={"/faq"} component={FAQ} />
      <Route path={"/resources"} component={Resources} />
      <Route path={"/contact"} component={Contact} />
      <Route path={"/404"} component={NotFound} />
      {/* Final fallback route */}
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider
        defaultTheme="light"
        // switchable
      >
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
