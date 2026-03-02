import { useTrackingPhone } from "@/hooks/use-tracking-phone";

type PhoneNumberProps = {
  className?: string;
};

const PhoneNumber = ({ className }: PhoneNumberProps) => {
  const phone = useTrackingPhone();

  return (
    <a href={phone.href} className={className}>
      {phone.display}
    </a>
  );
};

export default PhoneNumber;
