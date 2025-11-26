import { useState } from "react";
import useLang from "../../../../hooks/useLang";

function CreateHCFS() {
  const { lang } = useLang();
  const [centerNameAr, setCenterNameAr] = useState("");
  const [centerNameEn, setCenterNameEn] = useState("");
  const [partnerType, setPartnerType] = useState("");
  const [partnerName, setPartnerName] = useState("");
  const [typeOfMonshaa, setTypeOfMonshaa] = useState("");
  const [ownerPartner, setOwnerPartner] = useState("");
  const [municipal, setMunicipal] = useState("");
  const [baladyah, setBaladyah] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [notes, setNotes] = useState("");
  const [served, setServed] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    console.log("Sending data...");
    console.log("data:");
    console.log({
      centerNameAr,
      centerNameEn,
      served,
      partnerType,
      partnerName,
      typeOfMonshaa,
      municipal,
      baladyah,
      email,
      phoneNumber,
      notes,
      ownerPartner,
    });
  }

  return (
    <div>
      <h1 className="text-xl font-bold mb-5">
        {lang === "ar"
          ? "إضافة مركز رعاية صحية (نفايات طبية)"
          : "Create New Health Care Center (Medical Waste)"}
      </h1>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-2 p-4 my-2 bg-slate-800 border border-slate-700 rounded [&_div]:w-full [&_input]:focus:outline-0 [&_input]:focus:border [&_input]:focus:border-slate-500 [&_label]:font-bold [&_label]:p-1"
      >
        <div className="flex flex-col md:flex-row gap-2 [&_div]:flex [&_div]:flex-col [&_div]:gap-2 [&_input]:bg-slate-700 [&_input]:rounded [&_input]:p-1">
          <div>
            <label htmlFor="name_ar">
              {lang === "ar" ? "الإسم بالعربية" : "Name in Arabic"}
            </label>
            <input
              id="name_ar"
              name="name_ar"
              value={centerNameAr}
              onChange={(e) => setCenterNameAr(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="name_en">
              {lang === "ar" ? "الإسم بالإنجليزي" : "Name in English"}
            </label>
            <input
              id="name_en"
              name="name_en"
              value={centerNameEn}
              onChange={(e) => setCenterNameEn(e.target.value)}
            />
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-2 [&_div]:flex [&_div]:flex-col [&_input]:bg-slate-700 [&_input]:rounded [&_input]:p-1">
          <div>
            <label htmlFor="partner_type">
              {lang === "ar" ? "نوع الجهة" : "Partner Type"}
            </label>
            <input
              id="partner_type"
              name="partner_type"
              value={partnerType}
              onChange={(e) => setPartnerType(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="partner_name">
              {lang === "ar" ? "اسم الجهة" : "Partner Name"}
            </label>
            <input
              id="partner_name"
              name="partner_name"
              value={partnerName}
              onChange={(e) => setPartnerName(e.target.value)}
            />
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-2 [&_div]:flex [&_div]:flex-col [&_input]:bg-slate-700 [&_input]:rounded [&_input]:p-1">
          <div>
            <label htmlFor="monshaa_type">
              {lang === "ar" ? "نوع المنشأة" : "Monshaa Type"}
            </label>
            <input
              id="monshaa_type"
              name="monshaa_type"
              value={typeOfMonshaa}
              onChange={(e) => setTypeOfMonshaa(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="owner_partner">
              {lang === "ar" ? "الجهة المالكة" : "Owner Partner"}
            </label>
            <input
              id="owner_partner"
              name="owner_partner"
              value={ownerPartner}
              onChange={(e) => setOwnerPartner(e.target.value)}
            />
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-2 [&_div]:flex [&_div]:flex-col [&_input]:bg-slate-700 [&_input]:rounded [&_input]:p-1">
          <div>
            <label htmlFor="municipal">
              {lang === "ar" ? "المحافظة" : "Municipal"}
            </label>
            <input
              id="municipal"
              name="municipal"
              value={municipal}
              onChange={(e) => setMunicipal(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="baladyah">
              {lang === "ar" ? "البلدية" : "Baladyah"}
            </label>
            <input
              id="baladyah"
              name="baladyah"
              value={baladyah}
              onChange={(e) => setBaladyah(e.target.value)}
            />
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-2 [&_div]:flex [&_div]:flex-col [&_input]:bg-slate-700 [&_input]:rounded [&_input]:p-1">
          <div>
            <label htmlFor="email">{lang === "ar" ? "الإيميل" : "Email"}</label>
            <input
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="phone">
              {lang === "ar" ? "رقم الجوال" : "Phone Number"}
            </label>
            <input
              id="phone"
              name="phone"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-2 [&_div]:flex [&_div]:flex-col [&_input]:bg-slate-700 [&_input]:rounded [&_input]:p-1">
          <div>
            <label htmlFor="notes">{lang === "ar" ? "ملاحظات" : "Notes"}</label>
            <input
              id="notes"
              name="notes"
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="served">
              {lang === "ar" ? "مخدوم؟" : "Serverd?"}
            </label>
            <input
              id="served"
              name="served"
              value={served}
              onChange={(e) => setServed(e.target.value)}
            />
          </div>
        </div>
        <button
          type="submit"
          onClick={handleSubmit}
          className="p-1 bg-slate-700 rounded mt-2 font-bold hover:brightness-110 cursor-pointer"
        >
          {lang === "ar" ? "إضافة" : "Add"}
        </button>
      </form>
    </div>
  );
}

export default CreateHCFS;
