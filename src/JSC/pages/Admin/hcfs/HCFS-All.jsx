import { NavLink } from "react-router-dom";

import useLang from "../../../hooks/useLang";

export default function HCFSAll() {
  const { lang } = useLang();
  return (
    <div className="h-full">
      <h1>
        {lang === "ar"
          ? "قائمة مراكز الرعاية الصحية (نفايات طبية)"
          : "List of Medical Centers (Medical Waste)"}
      </h1>
      <table className="mt-10">
        <thead className="[&_th]:bg-slate-700">
          <tr>
            {lang === "ar" && (
              <>
                <th>#</th>
                <th>الاسم - انجليزي</th>
                <th>الاسم - عربي</th>
                <th>المحافظة</th>
                <th>البلدية</th>
                <th>نوع المنشأة</th>
                <th>الجهة</th>
                <th>الحالة</th>
                <th>مخدوم؟</th>
              </>
            )}
            {lang === "en" && (
              <>
                <th>#</th>
                <th>Name - English</th>
                <th>Name - Arabic</th>
                <th>Municipal</th>
                <th>Govenrate</th>
                <th>Partner Type</th>
                <th>Partner</th>
                <th>Status</th>
                <th>Served?</th>
              </>
            )}
          </tr>
        </thead>
        <tbody>
          {lang === "ar" && (
            <tr>
              <td>1</td>
              <td>Shaer</td>
              <td>نقطة الشاعر الطبية</td>
              <td>خانيونس</td>
              <td>خانيونس</td>
              <td>نقطة طبية</td>
              <td>UNRWA</td>
              <td>يعمل جزئيا</td>
              <td>نعم</td>
            </tr>
          )}
          {lang === "en" && (
            <tr>
              <td>1</td>
              <td>Shaer</td>
              <td>Shaer Medical Point</td>
              <td>Khan Younis</td>
              <td>Khan Younis</td>
              <td>Medical Point</td>
              <td>UNRWA</td>
              <td>Partially Functioning</td>
              <td>Yes</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
