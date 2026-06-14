# Content Source — Dutig

Raw source material for writing the bilingual UI copy in `messages/th.json` and
`messages/en.json` (Phase 3). Pulled from the company profile PDF (Thai) and the
live App Store listing (official English). **This is source material, not final
copy** — tighten it per the writing guidance in DESIGN.md / frontend-design
(plain verbs, sentence case, say what the user controls, no filler).

> Source files (kept out of the repo, in `../Docs/`): `Dutig-company-profile.pdf`,
> `app-demo/` (screenshots + demo video), `ref/landing-page/`.
> App Store: https://apps.apple.com/th/app/dutig/id1623325508

---

## Brand basics

- **Name:** Dutig · **Tagline (official EN):** "Enhance your security system"
- **What it is:** a hardware-free mobile security application. It doesn't replace
  existing security procedures — it applies them through an app so everyone in a
  managed area participates in keeping it safe.
- **Audience / places:** villages, condos, warehouses, factories, offices.
- **People in the area:** juristic person / management, safety officers (จป.),
  guards (รปภ.), residents / staff.

---

## Three pillars (the spine of the site)

**Enhance — ยกระดับ**
- EN (App Store): "Increase efficiency and enhance security measures."
- TH source: เพิ่มประสิทธิภาพและยกระดับงานรักษาความปลอดภัยตามหลักพื้นฐานที่ควรปฏิบัติ
  โดยไม่เปลี่ยนขั้นตอนหรือโครงสร้างงานเดิม แต่นำหลักพื้นฐานมาประยุกต์กับเทคโนโลยีสมัยใหม่
  ให้สะดวกและปลอดภัยยิ่งขึ้น

**Connect — เชื่อมต่อ**
- EN: "Connect individuals within the area."
- TH source: เชื่อมต่อบุคคลทุกประเภทในพื้นที่ที่มีมาตรการรักษาความปลอดภัย เพราะงานที่มี
  ประสิทธิภาพคือการที่ทุกคนในพื้นที่มีส่วนร่วมกับงานรักษาความปลอดภัย

**Verify — ตรวจสอบและคัดกรอง**
- EN: "Verification and screening."
- TH source: คัดกรองบุคคล ยานพาหนะ และทรัพย์สิน ในการเข้า-ออกพื้นที่ ต้องระบุตัวตน/แหล่งที่มาได้
  และผ่านการตรวจสอบรับรองจากผู้เกี่ยวข้อง เพื่อลดความเสี่ยงต่อความปลอดภัยของพื้นที่

---

## About / how it works (full source paragraph)

EN (App Store, verbatim — usable as base copy):
> Dutig is a Mobile Security Application that has been developed to enhance the
> security measures of an area and ensure its safety. We believe that good security
> is achieved when individuals within an area have a clear understanding of security
> measures and actively participate in the security system. Therefore, Dutig has
> developed a security management system through a Mobile Application that provides
> convenient access — it can be downloaded and installed on smartphones or tablets.
> Our service is free from physical security devices and relies solely on a Mobile
> Application to coordinate the different people in the area, from the most important
> to the least, structured as a Group Community where access and participation are
> controlled and verified to ensure authorized membership.

Key "how it works" idea: **no hardware → download app → roles join a controlled
Group Community → control + verify entry/exit.**

---

## Account roles (the signature section)

Naming convention = base word + `-tig`. Each splits into **I** (industrial:
factories, warehouses) and **II** (residential).

| Role | Who | Capability (source) |
|------|-----|---------------------|
| **Manatig** | Top admin / authority (manager, safety officer) | Full control of the app; designs the security setup; manages & screens all account types; sees all data/stats; approves outsider entry/exit. **Must be the first account registered.** |
| **Asst. Manatig** | Delegated manager | Can review data/stats and approve entry/exit, but cannot design/control the security setup. |
| **Guardig** | Security guard (รปภ.) | Base guard functions: patrol, incident reporting on a schedule. |
| **Guardig+** | Guard at screening points | Everything Guardig does, plus higher-level functions: issue gate passes, check permission requests. |
| **Residentig** | Resident (condo / apartment / village) | Resident conveniences + approve outsider entry. *Home Automation / Home Security: in development.* |

---

## Use cases (icon row)

Villages (หมู่บ้าน) · Condos (คอนโด) · Warehouses (คลังสินค้า) ·
Factories (โรงงาน) · Offices (สำนักงาน).

---

## App showcase

Real screens available in `../Docs/app-demo/pictures/` (sign-in with TH/EN toggle,
statistics / gate-pass dashboard, "permission to leave the area," role management).
Demo video `demo-app.MP4` — usage TBD; section built to accept it later.

---

## Get the app / CTA

- **App Store:** live → https://apps.apple.com/th/app/dutig/id1623325508
- **Google Play:** not live yet → "coming soon" button.
- Also: Line OA, YouTube (from the profile's "More information" page).
- It's **free** (Manatig subscription + gate-pass / storage packs are in-app
  purchases — context only; not a pricing page).

---

## Copy guidance reminders

- Thai is the primary voice; English mirrors it. Keep both natural, not literal
  word-for-word translations.
- Lead with what the reader gets ("ทุกคนในพื้นที่ช่วยกันดูแลความปลอดภัย"), not
  system internals.
- Buttons say the action ("ดาวน์โหลดบน App Store" / "Download on the App Store").
- Keep the three-pillar vocabulary consistent everywhere: Enhance · Connect · Verify
  / ยกระดับ · เชื่อมต่อ · ตรวจสอบ.
