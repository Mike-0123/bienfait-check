import { useFormContext } from "react-hook-form";

const TextArea = ({ title, placeholder, name }: ITextArea) => {
  const { register, formState: { errors }, } = useFormContext();

  return (
    <div className="flex flex-col gap-1 my-2">
      <span className="text-textUserColor">{title}</span>
      <textarea
        placeholder={placeholder}
        {...register(name)}
        className={`border-2 focus:border-shineColor focus:outline-none rounded-lg px-4 py-2 resize-none ${
          errors[name] ? "border-red-500" : ""
        }`}
      />
      {errors[name] && (
        <span className="text-red-500 text-sm">{(errors[name]?.message as string) || ""}</span>
      )}
    </div>
  );
};

export interface ITextArea {
  placeholder?: string;
  title: string;
  name: string;
}

export default TextArea;
