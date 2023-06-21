import { DatePicker, Form } from "antd";
import { Controller, useForm } from "react-hook-form";

const Lesson4OnBlur = () => {
  const {
    register,
    watch,
    control,
    // handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    mode: "onBlur",
  });
  const { RangePicker } = DatePicker;
  // const onSubmit = (e: any) => {
  // };
  return (
    <>
      <h1 className="p-8 pb-0 text-[16px] font-[700]">
        Thực hành validate form - onBlur
      </h1>
      <form className="p-8 pb-0 max-w-full " >
        <div className="grid grid-cols-2 gap-6">
          <div className={`${errors.username ? "error " : ""} username `}>
            <label className="label-input">Username</label>
            <input
              type="text"
              id="username"
              className="input"
              placeholder="Username"
              {...register("username", {
                pattern: {
                  value: /(^[a-z]*)$/,
                  message:
                    "Không được bao gồm chữ viết hoa, số và ký tự đặc biệt.",
                },
                minLength: {
                  value: 8,
                  message: "Tối thiểu 8 ký tự.",
                },
                required: "Không được bỏ trống.",
              })}
            />
            {errors.username && (
              <span className="message">
                {errors.username?.message?.toString()}
              </span>
            )}
          </div>
          <div className={`${errors.password ? "error " : ""} password `}>
            <label className="label-input">Password</label>
            <input
              type="password"
              id="password"
              placeholder="Password"
              className="input"
              {...register("password", {
                pattern: {
                  value: /(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.*[0-9]).+/,
                  message:
                    "Phải bao gồm một chữ viết hoa, một ký tự đặc biệt và một số.",
                },
                minLength: {
                  value: 8,
                  message: "Tối thiểu 8 ký tự.",
                },
                required: "Không được bỏ trống.",
              })}
            />
            {errors.password && (
              <span className="message">
                {errors.password?.message?.toString()}
              </span>
            )}
          </div>
          <div
            className={`${
              errors.confirm_password ? "error " : ""
            } confirm-password `}
          >
            <label className="label-input">Confirm password</label>
            <input
              type="password"
              id="confirm_password"
              placeholder="Confirm password"
              className="input"
              {...register("confirm_password", {
                required: "Không được bỏ trống.",
                minLength: {
                  value: 8,
                  message: "Tối thiểu 8 ký tự.",
                },
                validate: (val: string) => {
                  if (watch("password") != val) {
                    return "Your passwords do no match";
                  }
                },
              })}
            />
            {errors.confirm_password && (
              <span className="message">
                {errors.confirm_password?.message?.toString()}
              </span>
            )}
          </div>
          <div className={`${errors.email ? "error " : ""} email `}>
            <label className="label-input">Email</label>
            <input
              type="email"
              id="email"
              placeholder="Email"
              className="input"
              {...register("email", {
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                  message: "Không đúng định dạng email",
                },
                required: "Không được bỏ trống.",
              })}
            />
            {errors.email && (
              <span className="message">
                {errors.email?.message?.toString()}
              </span>
            )}
          </div>
          <div className={`${errors.phone ? "error " : ""} phoneNumber`}>
            <label className="label-input">PhoneNumber address</label>
            <input
              type="phone"
              placeholder="PhoneNumber address"
              id="phone"
              className="input"
              {...register("phone", {
                pattern: {
                  value: /^[0-9]{10}$/,
                  message: "Không đúng định dạng phone",
                },
                required: "Không được bỏ trống.",
              })}
            />
            {errors.phone && (
              <span className="message">
                {errors.phone?.message?.toString()}
              </span>
            )}
          </div>
          <div className={`${errors.website ? "error " : ""} website`}>
            <label className="label-input">Website</label>
            <input
              type="text"
              id="website"
              className="input"
              placeholder="Website"
              {...register("website", {
                pattern: {
                  value:
                    /^(http(s):\/\/.)[-a-zA-Z0-9@:%._~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_.~#?&//=]*)$/,
                  message: "Không đúng định dạng website",
                },
                required: "Không được bỏ trống.",
              })}
            />
            {errors.website && (
              <span className="message">
                {errors.website?.message?.toString()}
              </span>
            )}
          </div>
          <div className={`${errors.dateOfBirth ? "error " : ""} dateOfBirth`}>
            <label className="label-input">Date of Birth</label>
            <Controller
              render={({
                field: { onChange, onBlur, value },
                fieldState: { error },
              }) => (
                <Form.Item
                  name="date"
                  // rules={[{ required: true, message: "Không bỏ được bỏ trống" }]}
                >
                  <DatePicker
                    className="w-full input p-[7px]"
                    disabledDate={(d) =>
                      !d || d.isAfter("2020-12-31") || d.isBefore("1980-01-01")
                    }
                    format="YYYY-MM-DD"
                    onBlur={onBlur}
                    onChange={onChange}
                    value={value}
                  />
                  {error && (
                    <span className="message">{error.message?.toString()}</span>
                  )}
                </Form.Item>
              )}
              name="dateOfBirth"
              control={control}
              rules={{ required: "Không bỏ được bỏ trống" }}
            />
          </div>
          <div className={`${errors.firstName ? "error " : ""} firstName`}>
            <label className="label-input">First Name</label>
            <input
              placeholder="First Name"
              type="text"
              id="firstName"
              className="input"
              {...register("firstName", {
                required: "Không được bỏ trống.",
              })}
            />
            {errors.firstName && (
              <span className="message">
                {errors.firstName?.message?.toString()}
              </span>
            )}
          </div>
          <div className={`${errors.lastName ? "error " : ""} lastName`}>
            <label className="label-input">Last Name</label>
            <input
              type="text"
              placeholder="Last Name"
              id="lastName"
              className="input"
              {...register("lastName", {
                required: "Không được bỏ trống.",
              })}
            />
            {errors.lastName && (
              <span className="message">
                {errors.lastName?.message?.toString()}
              </span>
            )}
          </div>
          <div className={`${errors.linkedln ? "error " : ""} linkedIn`}>
            <label className="label-input">LinkedIn</label>
            <input
              type="text"
              id="linkedln"
              className="input"
              placeholder="linkedln"
              {...register("linkedln", {
                pattern: {
                  value:
                    /^(http(s)?:\/\/)?([\w]+\.)?linkedin\.com\/(pub|in|profile)\/([-a-zA-Z0-9]+)\/*/gm,
                  message: "Không đúng định dạng linkedIn",
                },
                required: "Không được bỏ trống.",
              })}
            />
            {errors.linkedln && (
              <span className="message">
                {errors.linkedln?.message?.toString()}
              </span>
            )}
          </div>
          <div className={`${errors.facebook ? "error " : ""} facebook`}>
            <label className="label-input">Facebook</label>
            <input
              type="text"
              id="facebook"
              className="input"
              placeholder="facebook"
              {...register("facebook", {
                pattern: {
                  value:
                    /(?:https?:\/\/)?(?:www\.)?(mbasic.facebook|m\.facebook|facebook|fb)\.(com|me)\/(?:(?:\w\.)*#!\/)?(?:pages\/)?(?:[\w\-.]*\/)*([\w\-.]*)/,
                  message: "Không đúng định dạng facebook",
                },
                required: "Không được bỏ trống.",
              })}
            />
            {errors.facebook && (
              <span className="message">
                {errors.facebook?.message?.toString()}
              </span>
            )}
          </div>
          <div className={`${errors.activerange ? "error " : ""} activeRange`}>
            <label className="label-input">Active Range</label>
            <Controller
              render={({
                field: { onChange, onBlur, value },
                fieldState: { error },
              }) => (
                <div>
                  <RangePicker
                    className="w-full input"
                    value={value}
                    onChange={onChange}
                    onBlur={onBlur}
                  />
                  {error && (
                    <span className="message">{error.message?.toString()}</span>
                  )}
                </div>
              )}
              name="activerange"
              control={control}
              rules={{ required: "Không bỏ được bỏ trống" }}
            />
          </div>
        </div>
        <button
          className={`${
            !isValid ? "cursor-not-allowed bg-blue-100" : ""
          } hover:opacity-90 text-white mt-10 font-medium rounded-lg text-sm px-5 py-2.5 text-center  bg-blue-500`}
          type="submit"
          disabled={!isValid}
        >
          Submit
        </button>
      </form>
    </>
  );
};

export default Lesson4OnBlur;
