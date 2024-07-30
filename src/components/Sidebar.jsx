export default function Sidebar({ name }) {
  return (
    <div className="fixed-side-bar">
      <div>
        <img className="logo" src="/logo/logo-main.svg" />
        <p className="side-bar-dynamic-name">{name}</p>
        <img className="logo" src="/logo/abcd-logo_orange.svg"></img>
      </div>
    </div>
  );
}
