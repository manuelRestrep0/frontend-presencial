import { useRef, useState } from 'react';

const useFormData = (initial: any) => {
  const form = useRef(initial);
  const [formData, setFormData] = useState({} as any);
  const getFormData: any = () => {
    const fd = new FormData(form.current);
    const obj: any = {};

    fd.forEach((value, key) => {
      const str = key.split(':');
      if (str.length > 1 && str[0] !== undefined && str[1] !== undefined) {
        obj[str[0]] = {
          ...obj[str[0]],
          [str[1]]: value,
        };
      } else if (str[0] !== undefined){
        obj[str[0]] = value;
      }
    });

    return obj;
  };
  const updateFormData = () => {
    setFormData(getFormData());
  };

  const resetFormData = () => {
    setFormData({});
  };
  return { form, formData, updateFormData, resetFormData } as const;
};

export default useFormData;