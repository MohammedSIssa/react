// import { fake_users } from "../../../fakeData/users";
// import useLang from "../../../hooks/useLang";

import useLang from "@/JSC/hooks/useLang";
import { fake_users } from "@/JSC/fakeData/users";

export default function AllUsers() {
  const { lang } = useLang();
  return (
    <div className="h-full p-4">
      <p className="mb-2">{lang === "ar" ? "قائمة المستخدمين" : "Users List"}</p>
      <table>
        <thead>
          {lang === "ar" && (
            <tr>
              <th>#</th>
              <th>الإسم</th>
              <th>الإيميل</th>
              <th>كلمة المرور</th>
              <th>الدور</th>
            </tr>
          )}
          {lang === "en" && (
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Password</th>
              <th>Role</th>
            </tr>
          )}
        </thead>
        <tbody>
          {fake_users[lang].map((item, idx) => (
            <tr key={idx}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>{item.password}</td>
              <td>{item.role}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
