interface HeaderProps {
  heading: string;
  phone: string;
  email: string;
}
export default function HeaderContents({ heading, phone, email }: HeaderProps) {
  return (
    <>
      <div className="display-6">
        <div className="text-uppercase">{heading}</div>
      </div>
      <div className="display-1">
        <h1 className="text-uppercase">{phone}</h1>
      </div>
      <div className="display-3">
        <h3 className="text-lowercase">{email}</h3>
      </div>
    </>
  );
}
