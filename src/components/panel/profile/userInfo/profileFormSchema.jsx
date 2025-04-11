import * as yup from "yup";

const ProfileFormSchema = yup.object().shape({
  LName: yup
    .string()
    .max(3, "نام حداقل باید دارای 3 حرف باشد")
    .max(15, "لطفا نام خود را تا 15 حرف بیشتر وارد نکنید")
    .required("لطفا نام خود را وارد کنید"),
  FName: yup
    .string()
    .min(3, "نام خانوادگی حداقل باید دارای 3 حرف باشد")
    .max(15, "لطفا نام خانوادگی خود را تا 15 حرف بیشتر وارد نکنید")
    .required("لطفا نام خانوادگی خود را وارد کنید"),
  UserAbout: yup.string().max(500).required("لطفا درباره خود متنی بنویسید"),
  HomeAdderess: yup
    .string()
    .min(10, "تعداد حروف آدرس خانه باید حداقل 10 حرف باشد")
    .max(500)
    .required("لطفا آدرس محل خانه خود را وارد کنید"),
  NationalCode: yup
    .string()
    .matches(/^[0-9]{10}$/, "لطفا کد ملی خود را درست وارد کنید")
    .required(" لطفا کد ملی را وارد کنید"),
  Gender: yup.boolean().required("لطفا نوع جنسیت را انتخاب کنید"),
  Email: yup
    .string()
    .matches(
      /^(0?9[0-9]{9})|([A-Za-z0-9._%\+\-]+@[a-z0-9.\-]+\.[a-z]{2,3})$/,
      "لطفا شماره تلفن خود یا ایمیل خود را درست وارد کنید"
    )
    .required("لطفا ایمیل یا شماره تلفن را وارد کنید"),
  phoneNumber: yup
    .string()
    .matches(
      /^(0?9[0-9]{9})|([A-Za-z0-9._%\+\-]+@[a-z0-9.\-]+\.[a-z]{2,3})$/,
      "لطفا شماره تلفن خود یا ایمیل خود را درست وارد کنید"
    )
    .required("لطفا شماره تلفن را وارد کنید"),
});

export default ProfileFormSchema;
