import { useUserSelector } from "../store/selector/formSelectors";
import styles from "../tblUsers/styles.module.scss";

export interface ITblUsers {}

export const TblUsers = () => {
  const MyFormUsers = useUserSelector();

  return (
    <div>
      {MyFormUsers.map((item: any) => (
        <table className={styles["tbl-border"]} key={item.id}>
          <tbody>
            <tr>
              <td className={styles["p-10"]}>{item.username}</td>
              <td className={styles["p-10"]}>{item.userlastname}</td>
              <td className={styles["p-10"]}>{item.useremail}</td>
            </tr>
          </tbody>
        </table>
      ))}
    </div>
  );
};
