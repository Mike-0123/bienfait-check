import { useFormContext } from "react-hook-form";

const Input = ({ title, placeholder, type, name, className }: IInput) => {
  const { register, formState: { errors }, } = useFormContext();

  return (
    <div className={`flex flex-col gap-1 my-2 ${className && className}`}>
      <div className="flex flex-col gap-1">
        <span className="text-textUserColor text-start dark:text-bgUserColor">{title}</span>
        <input
          type={type}
          placeholder={placeholder}
          {...register(name)}
          className={`border-2 focus:border-shineColor focus:outline-none rounded-lg px-4 py-2 dark:text-textUserColor ${errors[name] ? "border-red-500" : ""
            }`}
        />
      </div>

      {errors[name] && (
        <span className="text-red-500 text-sm">{(errors[name]?.message as string) || ""}</span>
      )}
    </div>
  );
};

export interface IInput {
  placeholder?: string;
  type: string;
  title: string;
  name: string;
  className?: string;
}

export default Input