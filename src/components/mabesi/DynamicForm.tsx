import React, { useState, ChangeEvent, FormEvent } from 'react';

interface FormField {
  id?: string;
  name: string;
  label: string;
  type: string;
  options?: string[];
  className?: string;
}

interface DynamicFormProps {
  formData: FormField[];
  onSubmit: (values: Record<string, any>) => void;
  onCancel: () => void;
}

const DynamicForm: React.FC<DynamicFormProps> = ({ formData, onSubmit, onCancel }) => {
  const [formValues, setFormValues] = useState<Record<string, any>>({});

  const handleChange = (fieldName: string, value: any) => {
    setFormValues((prevValues) => ({
      ...prevValues,
      [fieldName]: value,
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(formValues);
  };

  return (
    <form onSubmit={handleSubmit}>
      {formData.map((field) => {
        const { id, name, label, type, options, className } = field;
        return (
          <div key={id || name} className={className}>
            <label htmlFor={id || name}>{label}</label>
            {type === 'text' && (
              <input
                type="text"
                id={id || name}
                value={formValues[name] || ''}
                onChange={(e: ChangeEvent<HTMLInputElement>) => handleChange(name, e.target.value)}
              />
            )}
            {type === 'email' && (
              <input
                type="email"
                id={id || name}
                value={formValues[name] || ''}
                onChange={(e: ChangeEvent<HTMLInputElement>) => handleChange(name, e.target.value)}
              />
            )}
            {type === 'password' && (
              <input
                type="password"
                id={id || name}
                value={formValues[name] || ''}
                onChange={(e: ChangeEvent<HTMLInputElement>) => handleChange(name, e.target.value)}
              />
            )}
            {type === 'textarea' && (
              <textarea
                id={id || name}
                value={formValues[name] || ''}
                onChange={(e: ChangeEvent<HTMLTextAreaElement>) => handleChange(name, e.target.value)}
              />
            )}
            {type === 'select' && (
              <select
                id={id || name}
                value={formValues[name] || ''}
                onChange={(e: ChangeEvent<HTMLSelectElement>) => handleChange(name, e.target.value)}
              >
                {options?.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            )}
            {type === 'radio' && (
              options?.map((option) => (
                <div key={option}>
                  <input
                    type="radio"
                    id={id || option}
                    name={name}
                    value={option}
                    checked={formValues[name] === option}
                    onChange={() => handleChange(name, option)}
                  />
                  <label htmlFor={id || option}>{option}</label>
                </div>
              ))
            )}
            {type === 'checkbox' && (
              options?.map((option) => (
                <div key={option}>
                  <input
                    type="checkbox"
                    id={id || option}
                    name={name}
                    value={option}
                    checked={formValues[name]?.includes(option) || false}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => {
                      const updatedValues = e.target.checked
                        ? [...(formValues[name] || []), option]
                        : (formValues[name] || []).filter((value:any) => value !== option);
                      handleChange(name, updatedValues);
                    }}
                  />
                  <label htmlFor={id || option}>{option}</label>
                </div>
              ))
            )}
            {type === 'file' && (
              <input
                type="file"
                id={id || name}
                onChange={(e: ChangeEvent<HTMLInputElement>) => handleChange(name, e.target.files?.[0])}
              />
            )}
          </div>
        );
      })}
      <button type="submit">Submit</button>
      <button type="button" onClick={onCancel}>
        Cancel
      </button>
    </form>
  );
};

export default DynamicForm;