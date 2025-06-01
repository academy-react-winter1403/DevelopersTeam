import { Document, Page, Text, View, StyleSheet, Font } from '@react-pdf/renderer';
import VazirmatnRegular from "../../../../assets/fonts/ttf/Vazirmatn-Regular.ttf";

Font.register({
  family: "Vazirmatn",
  src: VazirmatnRegular,
  fontStyle: "normal",
  fontWeight: "normal"
});

// رنگ‌ها
const COLORS = {
  primary: "#0ea5e9",      // آبی روشن
  border:  "#e5e7eb",      // خاکستری ملایم
  heading: "#1e293b",      // سرمه‌ای
  label:   "#475569",      // طوسی
  section: "#f1f5f9"       // پس زمینه باکس
};

const styles = StyleSheet.create({
  page: {
    padding: 32,
    fontFamily: 'Vazirmatn',
    direction: 'rtl',
    backgroundColor: '#fff',
  },
  header: {
    backgroundColor: COLORS.primary,
    color: "#fff",
    padding: 18,
    borderRadius: 10,
    marginBottom: 24,
    alignItems: "center",
    textAlign: 'center',
  },
  name: {
    fontSize: 22,
    fontWeight: "bold",
    letterSpacing: 1,
    marginBottom: 6,
  },
  subline: {
    fontSize: 14,
    marginBottom: 2,
  },
  box: {
    border: `1px solid ${COLORS.border}`,
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
    backgroundColor: COLORS.section,
  },
  sectionTitle: {
    fontSize: 13,
    color: COLORS.primary,
    fontWeight: 'bold',
    marginBottom: 12,
    borderBottom: `1px solid ${COLORS.border}`,
    paddingBottom: 6,
    marginRight: 2,
  },
  row: {
    display: "flex",
    flexDirection: "row-reverse",
    marginBottom: 6,
  },
  label: {
    width: 90,
    color: COLORS.label,
    fontWeight: 'bold',
    fontSize: 12,
  },
  value: {
    flexGrow: 1,
    fontSize: 12,
    color: COLORS.heading,
    fontWeight: 'normal',
  },
  aboutTitle: {
    fontSize: 13,
    fontWeight: "bold",
    color: COLORS.primary,
    marginTop: 8,
    marginBottom: 2,
  },
  aboutText: {
    fontSize: 12,
    color: COLORS.label,
    lineHeight: 1.5,
    textAlign: "justify",
  },
  // اگر دوست داشتی بیشتر می‌تونی استایل بدی
});

function toJalali(date) {
  try { return date ? new Date(date).toLocaleDateString('fa-IR') : ""; } catch { return ""; }
}

const safe = (v) => v ?? "";

export default function ResumePDF({ data }) {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        {/* هدر بالای رزومه */}
        <View style={styles.header}>
          <Text style={styles.name}>{[safe(data.fname), safe(data.lname)].filter(Boolean).join(" ")}</Text>
          <Text style={styles.subline}>رزومه شخصی</Text>
        </View>
        {/* اطلاعات فردی درون باکس پس‌زمینه‌دار */}
        <View style={styles.box}>
          <Text style={styles.sectionTitle}>مشخصات فردی</Text>
          <View style={styles.row}>
            <Text style={styles.label}>کد ملی</Text>
            <Text style={styles.value}>{safe(data.code)}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>تاریخ تولد</Text>
            <Text style={styles.value}>{toJalali(data.birthday)}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>جنسیت</Text>
            <Text style={styles.value}>{data.gender === true ? "مرد" : data.gender === false ? "زن" : ""}</Text>
          </View>
        </View>
        {/* اطلاعات تماس */}
        <View style={styles.box}>
          <Text style={styles.sectionTitle}>اطلاعات تماس</Text>
          <View style={styles.row}>
            <Text style={styles.label}>شماره موبایل</Text>
            <Text style={styles.value}>{safe(data.phone)}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>ایمیل</Text>
            <Text style={styles.value}>{safe(data.email)}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>آدرس</Text>
            <Text style={styles.value}>{safe(data.address)}</Text>
          </View>
        </View>
        {/* درباره من */}
        {data.aboutMe && (
        <View style={styles.box}>
          <Text style={styles.aboutTitle}>درباره من</Text>
          <Text style={styles.aboutText}>{safe(data.aboutMe)}</Text>
        </View>
        )}
      </Page>
    </Document>
  );
}
