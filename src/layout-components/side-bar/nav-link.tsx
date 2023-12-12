import Nav from 'react-bootstrap/Nav';

interface NavLinkProps {
  children: React.ReactNode;
  disabled?: boolean;
  id?: string;
  href?: string;
}

export function NavLink ({ children, disabled, id, href} : NavLinkProps) {
  const props = {
    disabled,
    ...(id && {eventKey: id}),
    ...(href && {href}),
  }
  return (
    <Nav.Link {...props}>
      {children}
    </Nav.Link>
  );
}
