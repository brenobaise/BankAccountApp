import { Button } from "@chakra-ui/react";

interface GeneralButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
}

export const GeneralButton = ({ children, onClick }: GeneralButtonProps) => {
  return (
    <Button
      colorPalette='purple'
      size='lg'
      variant='solid'
      fontWeight='bold'
      onClick={onClick}
    >
      {children}
    </Button>
  );
};
