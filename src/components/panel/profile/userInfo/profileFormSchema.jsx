import * as yup from "yup";

const ProfileFormSchema = yup.object().shape({
  fname: yup
    .string()
    .min(3, "نام حداقل باید دارای 3 حرف باشد")
    .max(15, "لطفا نام خود را تا 15 حرف بیشتر وارد نکنید")
    .required("لطفا نام خود را وارد کنید"),
  lname: yup
    .string()
    .min(3, "نام خانوادگی حداقل باید دارای 3 حرف باشد")
    .max(15, "لطفا نام خانوادگی خود را تا 15 حرف بیشتر وارد نکنید")
    .required("لطفا نام خانوادگی خود را وارد کنید"),
  aboutMe: yup
    .string()
    .max(500, "توضیحات نباید بیشتر از 500 کاراکتر باشد")
    .nullable(),
  address: yup
    .string()
    .min(10, "تعداد حروف آدرس خانه باید حداقل 10 حرف باشد")
    .max(500, "آدرس نباید بیشتر از 500 کاراکتر باشد")
    .nullable(),
  code: yup
    .string()
    .matches(/^[0-9]{10}$/, "لطفا کد ملی خود را درست وارد کنید")
    .required("لطفا کد ملی را وارد کنید"),
  gender: yup.boolean().required("لطفا نوع جنسیت را انتخاب کنید"),
  email: yup.string().email("لطفا یک ایمیل معتبر وارد کنید").nullable(),
  phone: yup
    .string()
    .matches(/^0?9[0-9]{9}$/, "لطفا شماره تلفن خود را درست وارد کنید")
    .required("لطفا شماره تلفن را وارد کنید"),
  birthday: yup.string().nullable(),
});

export default ProfileFormSchema;
