export interface handleSignupProps {
  username: string;
  email: string;
}

export interface User {
  name: string;
  email: string;
}
export interface ProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
  user: { name: string; email: string };
  onUserUpdate: (user: { name: string; email: string }) => void;
}
