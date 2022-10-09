import { useState } from "react";

export const useForm = (initial) => {
  const [form, setForm] = useState(initial);

  const onChange = (e) => {
    const { id, value } = e.target;
    setForm({ ...form, [id]: value });
  };

  const clearForm = () => setForm(initial);

  return { form, setForm, onChange, clearForm };
};
