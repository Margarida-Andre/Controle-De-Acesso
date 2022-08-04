import PermissionComponent from "../PermissionComponent";

const Dashboard: React.FC = () => {
  return (
    <>
      <h1>Menu</h1>
      <ul>
        <PermissionComponent role="ROLE_ADMIN">
          <li>
            <a href="/product">Cadastro de produto</a>
          </li>
        </PermissionComponent>

        <li>
          <a href="/list-product">Listagem de produto</a>
        </li>
      </ul>
    </>
  );
};

export default Dashboard;
