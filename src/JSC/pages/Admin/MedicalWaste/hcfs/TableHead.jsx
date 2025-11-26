import useLang from "../../../../hooks/useLang";

export default function TableHead() {
  const { lang } = useLang();
  return (
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
            <th>الإجراءات</th>
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
            <th>Actions</th>
          </>
        )}
      </tr>
    </thead>
  );
}
