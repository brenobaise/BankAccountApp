import { Button } from "@chakra-ui/react";
import { MouseEventHandler } from "react";

interface GeneralButtonProps {
  children: React.ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement>;
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
