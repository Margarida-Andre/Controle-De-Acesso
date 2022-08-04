import React, { useEffect, useState } from "react";
import api from "../../services/api";
// import { Container } from './styles';

interface PermissionComponentProps {
  role: string;
  children: React.ReactNode;
}

const PermissionComponent: React.FC<PermissionComponentProps> = ({
  role,
  children,
}) => {
  const [permissions, setPermisions] = useState([] as string[]);
  useEffect(() => {
    async function loadRoles() {
      const response = api.get("/users/roles");
      const findRole = (await response).data.some((r: string) =>
        role?.split(",").includes(r)
      );
      setPermisions(findRole);
    }
    loadRoles();
  }, [role]);

  return <>{permissions && children}</>;
};

export default PermissionComponent;
