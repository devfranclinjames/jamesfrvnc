interface LogoProps {
  imgsrc: string;
  taas: number;
  lapad: any;
  unsani: string;
  klass: string;
}
function MyLogo({ klass, taas, lapad, imgsrc, unsani }: LogoProps) {
  return (
    <>
      <div className={klass}>
        <img
          className={klass}
          src={imgsrc}
          alt={unsani}
          width={lapad}
          height={taas}
        />
      </div>
    </>
  );
}
export default MyLogo;
