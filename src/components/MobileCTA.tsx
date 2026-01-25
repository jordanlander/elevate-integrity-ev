import { Button } from "@/components/ui/button";
import { Phone, ClipboardList } from "lucide-react";
import { Link } from "react-router-dom";

/**
 * MobileCTA renders persistent call-to-action buttons on mobile devices.
 * The bar sticks to the bottom of the screen and provides quick access
 * to call/text and request a free estimate without covering the footer.
 */
const MobileCTA = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 md:hidden flex gap-4 bg-background/80 backdrop-blur-sm border-t border-border">
      <a href="tel:4702622660" className="flex-1">
        <Button variant="electric" className="w-full h-12 text-base">
          <Phone className="w-5 h-5" />
          Text/Call
        </Button>
      </a>
      <Link to="/#contact" className="flex-1">
        <Button variant="accent" className="w-full h-12 text-base">
          <ClipboardList className="w-5 h-5" />
          Free Estimate
        </Button>
      </Link>
    </div>
  );
};

export default MobileCTA;
