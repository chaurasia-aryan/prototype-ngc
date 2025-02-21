import * as React from "react";
import { cn } from "@/lib/utils"; // Utility function to merge class names

// Main Card component (acts as a container for content)
const Card = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "rounded-xl border bg-card text-card-foreground shadow", // Styling for the card
      className // Allows additional styles to be passed in
    )}
    {...props} // Passes all other props to the div
  />
));
Card.displayName = "Card";

// CardHeader (used for headings, titles, etc.)
const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col space-y-1.5 p-6", className)} // Flexbox layout with spacing
    {...props}
  />
));
CardHeader.displayName = "CardHeader";

// CardTitle (used for the main title inside the header)
const CardTitle = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("font-semibold leading-none tracking-tight", className)} // Bold and tight text styling
    {...props}
  />
));
CardTitle.displayName = "CardTitle";

// CardDescription (used for small descriptive text inside the card)
const CardDescription = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)} // Small, muted text styling
    {...props}
  />
));
CardDescription.displayName = "CardDescription";

// CardContent (used for the main body content inside the card)
const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("p-6 pt-0", className)} {...props} /> // Adds padding
));
CardContent.displayName = "CardContent";

// CardFooter (used for footer elements like buttons or links)
const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center p-6 pt-0", className)} // Flexbox for alignment
    {...props}
  />
));
CardFooter.displayName = "CardFooter";

// Export all components for use in other files
export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent };
