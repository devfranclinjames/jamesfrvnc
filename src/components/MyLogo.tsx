interface LogoProps {
  imgsrc: string;
  taas: number;
  lapad: any;
  unsani: string;
}
function MyLogo({ taas, lapad, imgsrc, unsani }: LogoProps) {
  return (
    <>
      <img src={imgsrc} alt={unsani} width={lapad} height={taas} />
    </>
  );
}
export default MyLogo;
